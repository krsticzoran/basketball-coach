'use client'

import { useState } from 'react'
import classes from '@/styles/components/ui/accordion.module.scss'

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
          <svg
            className={isShowing ? classes.open : classes.close}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            width='24px'
            height='24px'
          >
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7a.996.996 0 10-1.41 1.41L10.59 12l-4.89 4.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.39-.38.39-1.02 0-1.4z' />
          </svg>
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
