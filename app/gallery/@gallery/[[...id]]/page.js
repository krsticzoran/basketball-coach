import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import classes from '@/styles/pages/gallery.module.scss'
import { getImage } from '@/lib/get-images'
import SvgClose from '@/components/ui/svg-close'

export default async function Gallery({ params }) {
  const data = await getImage()

  if (data.length === 0) {
    notFound()
  }

  return (
    <>
      {params.id && (
        <div className={classes.modal}>
          <div className={classes.container}>
            <button>
              <Link href={'/gallery'}>
                <SvgClose />
              </Link>
            </button>
            <Image
              src={data[params.id].url}
              alt={data[params.id].name}
              width={1000}
              height={600}
            />
          </div>
        </div>
      )}
      <div className={classes.gallery}>
        {data.map((image, index) => (
          <div key={index} className={classes['gallery-item']}>
            <Link
              href={{
                pathname: `/gallery/${index}`,
              }}
            >
              <Image
                src={image.url}
                alt={image.name}
                width={500}
                height={300}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
