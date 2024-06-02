import Image from 'next/image'
import bgImage from '../public/jokic.jpeg'
import Button from '@/components/ui/button'
import classes from '@/styles/pages/home.module.scss'
import welcomeImg from '../public/Savovic.jpeg'
import services1 from '../public/services1.jpeg'
import services2 from '../public/services2.jpeg'
import services3 from '../public/services3.jpeg'
import personal from '../public/personal.svg'

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
      <section className={classes.about}>
        <div className={classes.container}>
          <div>
            <Image src={welcomeImg} alt='Sinisa Savovic' />
          </div>

          <div className={classes['block-right']}>
            <div className='subtitle'>
              <div className='line'></div>
              <div className='text'>about</div>
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
      <section className={classes.services}>
        <div className={classes.container}>
          <div className='subtitle'>
            <div className='line'></div>
            <div className='text'>services</div>
          </div>
          <h2 className={classes.heading}>
            HELPING YOU REACH HIGHER AND ACHIEVE MORE
          </h2>
          <div className={classes.grid}>
            <div className={classes[`service-one`]}>
              <div className={classes[`service-img`]}>
                <Image src={services1} />
              </div>
              <div className={classes[`services-text`]}>
                <Image src={personal} />
                <h4>PERSONAL TRAINING</h4>
              </div>
              <p>
                Lacus duis consectetur elementum pharetra, dictumst dictum nulla
                adipiscing.
              </p>
            </div>
            <div className={classes[`service-two`]}>
              <div className={classes[`service-img`]}>
                <Image src={services2} />
              </div>
              <div className={classes[`services-text`]}>
                <Image src={personal} />
                <h4>Basketball camp</h4>
              </div>
              <p>
                Lacus duis consectetur elementum pharetra, dictumst dictum nulla
                adipiscing.
              </p>
            </div>
            <div className={classes[`service-three`]}>
              <div className={classes[`service-img`]}>
                <Image src={services3} />
              </div>
              <div className={classes[`services-text`]}>
                <Image src={personal} />
                <h4>Team</h4>
              </div>
              <p>
                Lacus duis consectetur elementum pharetra, dictumst dictum nulla
                adipiscing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.full}>
        <div className={classes[`left-block`]}>
          <div className='subtitle'>
            <div className='line'></div>
            <div className='text'>services</div>
          </div>
          <h2>Meet Siniša Savović: A Trailblazer in Basketball Excellence</h2>
          <p>
            Sinisa Savovic, a visionary leader in the realm of basketball
            coaching, embodies a legacy of unparalleled expertise and
            dedication. With a career spanning decades, his influence has shaped
            the trajectories of countless athletes, including the likes of NBA
            star Nikola Jokic. Dive deeper into Sinisa's journey, philosophy,
            and unparalleled impact in the world of basketball.
          </p>
        </div>
        <div>
          <Image src={services3} />
        </div>
      </section>
    </main>
  )
}
