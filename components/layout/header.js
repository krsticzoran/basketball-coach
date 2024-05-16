import Link from 'next/link'
import classes from '@/styles/components/layout/header.module.scss'
import instagram from '../../public/instagram.png'
import Image from 'next/image'
import icon from '../../public/ball.png'

export default function Header() {
  return (
    <header className={classes.header}>
      <div>
        <ul>
          <li>
            <Link href=''>
              <Image src={icon} alt='icon' />
            </Link>
          </li>
          <li>individual basketball practices</li>
        </ul>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/gallery'>Gallery</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
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
