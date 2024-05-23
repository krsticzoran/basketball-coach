import Link from 'next/link'
import classes from '@/styles/components/layout/header.module.scss'
import instagram from '../../public/instagram.png'
import Image from 'next/image'
import NavLink from './nav-link'

export default function Header() {
  return (
    <header className={classes.header}>
      <ul>
        <li className={classes.logo}>
          <Link href='/'>some logo</Link>
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
  )
}
