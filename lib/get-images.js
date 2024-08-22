export const getImage = async () => {
  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/`,
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`,
        },
      },
    )

    if (!res.ok) {
      throw new Error('Failed to fetch images from Cloudinary')
    }

    const responseData = await res.json()

    const images = responseData.resources
      .filter((resource) => resource.asset_folder === 'sinisa')
      .map((img) => ({
        url: img.secure_url,
        name: img.display_name,
      }))
    return images
  } catch (error) {
    console.error('Error fetching images:', error)
    return []
  }
}
