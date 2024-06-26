'use client'
import SvgClose from '@/components/ui/svg-close'
import ArrowIcon from '@/components/ui/arrow-icon'
import classes from '@/styles/pages/gallery.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Modal({ params, data }) {
  const router = useRouter()
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [currentId, setCurrentId] = useState(params.id)

  useEffect(() => {
    setCurrentId(params.id)
  }, [params.id])

  const handlePrevClick = () => {
    setIsFadingOut(true)
    setTimeout(() => {
      router.push(
        `/gallery/${params.id == 0 ? data.length - 1 : params.id - 1}`,
      )
      setIsFadingOut(false)
    }, 700) // Duration of the fade-out animation
  }

  const handleNextClick = () => {
    setIsFadingOut(true)
    setTimeout(() => {
      router.push(
        `/gallery/${params.id == data.length - 1 ? 0 : +params.id + 1}`,
      )
      setIsFadingOut(false)
    }, 0) // Duration of the fade-out animation
  }

  return (
    <>
      {currentId && (
        <div
          className={`${classes.modal} ${isFadingOut ? classes['fade-out'] : classes['fade-in']}`}
        >
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
            <Image
              src={data[currentId].url}
              alt={data[currentId].name}
              width={1000}
              height={600}
            />
          </div>
        </div>
      )}
    </>
  )
}
