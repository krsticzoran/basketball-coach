import Image from 'next/image'
import bgImage from '../public/jokic.jpeg'
import Button from '@/components/ui/button'
import classes from '@/styles/pages/home.module.scss'
import welcomeImg from '../public/Savovic.jpeg'

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
          <Button href='/contact/'>get started</Button>
        </div>
        <div>
          <Image src={bgImage} priority alt='Nikola Jokic' />
        </div>
      </section>
      <section className={classes.welcome}>
        <div className={classes.container}>
          <div>
            <Image src={welcomeImg} alt='Sinisa Savovic' />
          </div>

          <div className={classes['block-right']}>
            <div className={classes.subtitle}>
              <div className={classes.line}></div>
              <div className={classes.text}>about</div>
            </div>
            <h2>Meet Siniša Savović: A Trailblazer in Basketball Excellence</h2>
            <p>
              Sinisa Savovic, a visionary leader in the realm of basketball
              coaching, embodies a legacy of unparalleled expertise and
              dedication. With a career spanning decades, his influence has
              shaped the trajectories of countless athletes, including the likes
              of NBA star Nikola Jokic. Dive deeper into Sinisa's journey,
              philosophy, and unparalleled impact in the world of basketball.
            </p>
            <Button href='/about/'>Find Out More</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
