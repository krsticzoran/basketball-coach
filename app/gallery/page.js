import Image from 'next/image'
import classes from '@/styles/pages/gallery.module.scss'
import { getImage } from '@/lib/get-images'
import { notFound } from 'next/navigation'

export default async function Gallery() {
  const data = await getImage()

  if (data.length === 0) {
    notFound()
  }

  return (
    <div className={classes.gallery}>
      {data.map((image, index) => (
        <div key={index} className={classes['gallery-item']}>
          <Image src={image.url} alt={image.name} width={500} height={300} />
        </div>
      ))}
    </div>
  )
}
