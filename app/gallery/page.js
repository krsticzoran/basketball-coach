import Image from 'next/image'
import classes from '@/styles/pages/gallery.module.scss'

const images = [
  { path: '/Savovic.jpeg' },
  { path: '/Savovic1.jpg' },
  { path: '/jokic.jpeg' },
  { path: '/Savovic1.jpg' },
  { path: '/jokic.jpeg' },
  { path: '/jokic.jpeg' },
  { path: '/Savovic.jpeg' },
  { path: '/Savovic1.jpg' },
  { path: '/jokic.jpeg' },
  { path: '/Savovic1.jpg' },
  { path: '/jokic.jpeg' },
  { path: '/jokic.jpeg' },
  { path: '/Savovic.jpeg' },
  { path: '/Savovic1.jpg' },
  { path: '/jokic.jpeg' },
  { path: '/Savovic1.jpg' },
  { path: '/jokic.jpeg' },
  { path: '/jokic.jpeg' },
]

export default function Gallery() {
  return (
    <div className={classes.gallery}>
      {images.map((image, index) => (
        <div key={index} className={classes['gallery-item']}>
          <Image
            src={image.path}
            alt={`Image ${index + 1}`}
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>
  )
}
