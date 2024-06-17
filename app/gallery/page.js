import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import classes from '@/styles/pages/gallery.module.scss'
import { getImage } from '@/lib/get-images'

export default async function Gallery() {
  const data = await getImage()

  if (data.length === 0) {
    notFound()
  }

  return (
    <div className={classes.gallery}>
      {data.map((image, index) => (
        <div key={index} className={classes['gallery-item']}>
          <Link
            href={{
              pathname: `/gallery/${index}`,
              query: { url: image.url, name: image.name },
            }}
          >
            <Image src={image.url} alt={image.name} width={500} height={300} />
          </Link>
        </div>
      ))}
    </div>
  )
}
