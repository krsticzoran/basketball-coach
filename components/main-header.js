import Link from 'next/link'
import classes from '@/styles/layout/main-header.module.scss'

export default function MainHeader() {
  return (
    <header className={classes.header}>
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
        </ul>
      </nav>
    </header>
  )
}
