import SvgClose from '@/components/ui/svg-close'
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
            <div>
              <Image
                src={data[params.id].url}
                alt={data[params.id].name}
                width={1000}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
