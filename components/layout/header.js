'use client'

import Link from 'next/link'
import classes from '@/styles/components/layout/header.module.scss'
import instagram from '../../public/instagram.png'
import menu from '@/public/menu.svg'
import Image from 'next/image'
import NavLink from './nav-link'
import { useState, useEffect } from 'react'
import logo from '@/public/logo.png'

export default function Header() {
  const [isDesktop, setIsDesktop] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const checkWindowWidth = () => {
    if (typeof window !== 'undefined') {
      const windowWidth = window.innerWidth
      setIsDesktop(windowWidth >= 1024)
    }
  }

  useEffect(() => {
    checkWindowWidth()
    window.addEventListener('resize', checkWindowWidth)
    return () => window.removeEventListener('resize', checkWindowWidth)
  }, [])

  return (
    <>
      {isDesktop === null ? (
        <div style={{ visibility: 'hidden' }}>Loading...</div>
      ) : isDesktop ? (
        <header className={classes.header}>
          <ul>
            <li className={classes.logo}>
              <Link href='/'>
                <Image src={logo} priority alt='logo' />
              </Link>
            </li>
          </ul>

          <nav>
            <ul>
              <li>
                <NavLink href='/'>Home</NavLink>
              </li>
              <li>
                <NavLink href='/about'>About</NavLink>
              </li>
              <li>
                <NavLink href='/gallery'>Gallery</NavLink>
              </li>
              <li className={classes.session}>
                <Link href='/book-a-session'>book a session</Link>
              </li>
              <li>
                <Link href='https://www.instagram.com/sawa_ska/'>
                  <Image src={instagram} priority alt='Instagram' />
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <>
          <header className={classes['header-mobile']}>
            <ul>
              <li className={classes.logo}>
                <Link href='/'>
                  <Image src={logo} priority alt='logo' />
                </Link>
              </li>
            </ul>
            <ul>
              <li
                className={
                  isOpen
                    ? classes['menu-button-open']
                    : classes['menu-button-close']
                }
              >
                <button onClick={() => setIsOpen((prevState) => !prevState)}>
                  <Image src={menu} priority alt='menu icon' />
                </button>
              </li>
              <li>
                <Link href='https://www.instagram.com/sawa_ska/'>
                  <Image src={instagram} priority alt='Instagram' />
                </Link>
              </li>
            </ul>
          </header>
          <div
            className={`${classes['menu-modal']} ${isOpen ? classes.open : classes.hidden}`}
          >
            <nav onClick={() => setIsOpen(false)}>
              <ul>
                <li>
                  <NavLink href='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink href='/about'>About</NavLink>
                </li>
                <li>
                  <NavLink href='/gallery'>Gallery</NavLink>
                </li>
                <li>
                  <Link href='/book-a-session' className={classes.session}>
                    book a session
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
