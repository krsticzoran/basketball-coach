import Image from 'next/image'
import bgImage from '../public/jokic.jpeg'
import Button from '@/components/ui/button'
import classes from '@/styles/pages/home.module.scss'

export default function Home() {
  return (
    <main>
      <section className={classes.hero}>
        <div className={classes.text}>
          <h1>
            Unlock Your
            <span> MVP Potential</span>
          </h1>
          <p>
            <span> Train with Siniša Savović, Jokić's First Coach.</span>
            <span>
              Join our sessions and let's make your basketball dreams a reality.
            </span>
          </p>
          <Button href='/contact/'>Book Your Session</Button>
        </div>
        <div>
          <Image src={bgImage} priority alt='Nikola Jokic' />
        </div>
      </section>
    </main>
  )
}
