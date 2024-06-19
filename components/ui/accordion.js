'use client'

import { useState } from 'react'
import classes from '@/styles/components/ui/accordion.module.scss'
import SvgClose from './svg-close'

export default function Accordion({ header, content }) {
  const [isShowing, setIsShowing] = useState(false)

  const toggle = () => {
    setIsShowing(!isShowing)
  }
  return (
    <div
      className={`${classes.accordion} ${isShowing ? classes['background-display'] : classes['background-hidden']}`}
      onClick={toggle}
    >
      <div className={classes.header}>
        <h6>{header}</h6>

        <div className={classes.title}>
          <SvgClose isShowing={isShowing} />
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
