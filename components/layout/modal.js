'use client'
import SvgClose from '@/components/ui/svg-close'
import ArrowIcon from '@/components/ui/arrow-icon'
import classes from '@/styles/pages/gallery.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Modal({ params, data }) {
  const router = useRouter()

  const handlePrevClick = () => {
    setTimeout(() => {
      router.push(
        `/gallery/${params.id == 0 ? data.length - 1 : params.id - 1}`,
      )
    }, '500')
  }

  const handleNextClick = () => {
    setTimeout(() => {
      router.push(
        `/gallery/${params.id == data.length - 1 ? 0 : +params.id + 1}`,
      )
    }, '500')
  }

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
            <button className={classes.left} onClick={handlePrevClick}>
              <ArrowIcon direction='left' />
            </button>

            <button className={classes.right} onClick={handleNextClick}>
              <ArrowIcon direction='right' />
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
