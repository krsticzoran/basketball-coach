import Link from 'next/link'
import classes from '@/styles/components/layout/footer.module.scss'
import ContentReveal from '../ui/content-reveal'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={classes.footer}>
      <ContentReveal delay={0.5}>
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
                <Link href='mailto:savovicsinisa72@gmail.com'>Email Us</Link>
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
                <Link href='https://www.instagram.com/sawa_ska//'>
                  Instagram
                </Link>
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
                <Link href='/privacy-policy'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/terms-of-service'>Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </ContentReveal>
      <ContentReveal delay={0.5}>
        <div className={classes.bottom}>
          <div>© 2024 - {currentYear} Pro Basketball Coach</div>
          <div>
            <a href='https://zkrstic.dev/' target='_blank'>
              MADE BY ZORAN KRSTIC
            </a>
          </div>
        </div>
      </ContentReveal>
    </footer>
  )
}
