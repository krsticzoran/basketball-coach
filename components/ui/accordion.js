'use client'

import { useState } from 'react'
import classes from '@/styles/components/ui/accordion.module.scss'

import close from '../../public/close.svg'
import Image from 'next/image'

export default function Accordion({ header, content }) {
  const [isShowing, setIsShowing] = useState(false)

  const toggle = () => {
    setIsShowing(!isShowing)
  }
  return (
    <div className={classes.accordion} onClick={toggle}>
      <div className={classes.header}>
        <h6>{header}</h6>

        <div className={classes.title}>
          <Image
            src={close}
            alt='close'
            className={isShowing ? classes.open : classes.close}
          />
        </div>
      </div>
      <div className={content}>
        <div className={isShowing ? classes.display : classes.hidden}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}
