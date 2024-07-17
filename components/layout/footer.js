import Link from 'next/link'
import classes from '@/styles/components/layout/footer.module.scss'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.top}>
        <div>
          <h5>Quick Links</h5>
          <ul>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/book-a-session'>Book a session</Link>
            </li>
            <li>
              <Link href='/gallery'>Gallery</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Contact Us</h5>
          <ul>
            <li>
              <Link href='tel:+38166300775'>Call Us</Link>
            </li>
            <li>
              <Link href='mailto:savovicsinisa@gmail.com'>Email Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Social</h5>
          <ul>
            <li>
              <Link href='https://www.facebook.com/PROSERBIACOACH'>
                Facebook
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com/sawa_ska//'>Instagram</Link>
            </li>
            <li>
              <Link href='/'>youtube</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Legal</h5>
          <ul>
            <li>
              <Link href='/'>Privacy Policy</Link>
            </li>
            <li>
              <Link href='/'>Terms of Service</Link>
            </li>
            <li>
              <Link href='/'>Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.bottom}>
        <div>© 2024 Pro Basketball Coach</div>
        <div>
          <Link href='https://www.linkedin.com/in/zorankrstic/'>
            MADE BY ZORAN KRSTIC
          </Link>
        </div>
      </div>
    </footer>
  )
}
