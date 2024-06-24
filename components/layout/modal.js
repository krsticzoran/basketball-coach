'use client'
import SvgClose from '@/components/ui/svg-close'
import ArrowIcon from '@/components/ui/arrow-icon'
import classes from '@/styles/pages/gallery.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Modal({ params, data }) {
  return (
    <>
      {params.id && (
        <div className={classes.modal}>
          <div className={classes.container}>
            <button className={classes.close}>
              <Link href={'/gallery'}>
                <SvgClose />
              </Link>
            </button>
            <button className={classes.left}>
              <Link
                href={`/gallery/${params.id == 0 ? data.length - 1 : params.id - 1}`}
              >
                <ArrowIcon direction='left' />
              </Link>
            </button>

            <button className={classes.right}>
              <Link
                href={`/gallery/${params.id == data.length - 1 ? 0 : +params.id + 1}`}
              >
                <ArrowIcon direction='right' />
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
    </>
  )
}
