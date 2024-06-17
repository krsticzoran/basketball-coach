import Image from 'next/image'
import classes from '@/styles/pages/gallery.module.scss'

export default function ImagePreview({ searchParams }) {
  return (
    <div className={classes.modal}>
      <Image
        src={searchParams.url}
        alt={searchParams.name}
        width={1000}
        height={600}
      />
    </div>
  )
}
