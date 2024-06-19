import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import classes from '@/styles/pages/gallery.module.scss'
import { getImage } from '@/lib/get-images'

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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  width='24px'
                  height='24px'
                >
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path d='M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7a.996.996 0 10-1.41 1.41L10.59 12l-4.89 4.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.39-.38.39-1.02 0-1.4z' />
                </svg>
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
