'use client'

import Link from 'next/link'
import classes from '@/styles/components/layout/header.module.scss'
import instagram from '../../public/instagram.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const path = usePathname()
  console.log(path)

  return (
    <header className={classes.header}>
      <ul>
        <li className={classes.logo}>some logo</li>
      </ul>

      <nav>
        <ul>
          <li>
            <Link
              href='/'
              className={path === '/' ? classes.active : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className={path === '/about' ? classes.active : undefined}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/gallery'
              className={path === '/gallery' ? classes.active : undefined}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className={path === '/contact' ? classes.active : undefined}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link href='https://www.instagram.com/sawa_ska/'>
              <Image src={instagram} alt='Instagram' />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
