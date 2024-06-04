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
    <div className={classes.accordion}>
      {header}
      <div className={classes.title} onClick={toggle}>
        <Image
          src={close}
          alt='close'
          className={isShowing ? classes.open : classes.close}
        />
      </div>
      <div className={isShowing ? classes.display : classes.hidden}>
        {content}
      </div>
    </div>
  )
}
