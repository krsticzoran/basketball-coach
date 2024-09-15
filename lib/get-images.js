export const getImage = async () => {
  let images = []
  let nextCursor = null

  try {
    do {
      const url = new URL(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
      )
      if (nextCursor) {
        url.searchParams.append('next_cursor', nextCursor)
      }

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`,
        },
      })

      if (!res.ok) {
        throw new Error('Failed to fetch images from Cloudinary')
      }

      const responseData = await res.json()

      images = images.concat(
        responseData.resources
          .filter((resource) => resource.asset_folder === 'basketball')
          .map((img) => ({
            url: img.secure_url,
            name: img.display_name,
          })),
      )

      nextCursor = responseData.next_cursor || null
    } while (nextCursor)

    return images
  } catch (error) {
    console.error('Error fetching images:', error)
    return []
  }
}
