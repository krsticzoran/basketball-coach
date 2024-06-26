'use client'
import SvgClose from '@/components/ui/svg-close'
import ArrowIcon from '@/components/ui/arrow-icon'
import classes from '@/styles/pages/gallery.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Modal({ params, data }) {
  const router = useRouter()
  const [fadeClass, setFadeClass] = useState('')

  const handlePrevClick = () => {
    setFadeClass(classes['fade-out-prev'])
    setTimeout(() => {
      router.push(
        `/gallery/${params.id == 0 ? data.length - 1 : params.id - 1}`,
      )
      setFadeClass(classes['fade-in-prev'])
    }, 300)
  }

  const handleNextClick = () => {
    setFadeClass(classes['fade-out-next'])
    setTimeout(() => {
      router.push(
        `/gallery/${params.id == data.length - 1 ? 0 : +params.id + 1}`,
      )
      setFadeClass(classes['fade-in-next'])
    }, 300)
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
            <div className={fadeClass}>
              <Image
                src={data[params.id].url}
                alt={data[params.id].name}
                width={1000}
                height={600}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
