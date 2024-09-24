import Image from 'next/image'
import bgImage from '../public/jokic.jpeg'
import Button from '@/components/ui/button'
import classes from '@/styles/pages/home.module.scss'
import welcomeImg from '../public/Savovic.jpeg'
import services1 from '../public/services1.jpg'
import services2 from '../public/services2.jpg'
import services3 from '../public/services3.jpg'
import personal from '../public/personal.svg'
import Accordion from '@/components/ui/accordion'
import ContentReveal from '@/components/ui/content-reveal'

export default function Home() {
  return (
    <main>
      <section className={classes.hero}>
        <div className={classes.text}>
          <ContentReveal delay={0.5} scale={1.15}>
            <h1>
              Unlock Your
              <span> MVP Potential</span>
            </h1>
            <p>
              <span> Train with Siniša Savović, Jokić's First Coach.</span>
              <span>
                Join our sessions and let's make your basketball dreams a
                reality.
              </span>
            </p>
            <Button href='/book-a-session/'>get started</Button>
          </ContentReveal>
        </div>

        <div className={classes.image}>
          <ContentReveal delay={1.5}>
            <Image src={bgImage} priority alt='Nikola Jokic' />
          </ContentReveal>
        </div>
      </section>
      <section className={classes.about}>
        <ContentReveal height={'0px'} minHeight={'40vh'} delay={0.5}>
          <div className={classes.container}>
            <div className={classes['img-container']}>
              <Image src={welcomeImg} alt='Sinisa Savovic' />
            </div>

            <div className={classes['block-right']}>
              <div className='subtitle'>
                <div className='line'></div>
                <div className='text'>about</div>
              </div>
              <h2>
                Meet Siniša Savović: A Trailblazer in Basketball Excellence
              </h2>
              <p>
                Sinisa Savovic, a visionary leader in the realm of basketball
                coaching, embodies a legacy of unparalleled expertise and
                dedication. With a career spanning decades, his influence has
                shaped the trajectories of countless athletes, including the
                likes of NBA star Nikola Jokic. Dive deeper into Sinisa's
                journey, philosophy, and unparalleled impact in the world of
                basketball.
              </p>
              <Button href='/about/'>Find Out More</Button>
            </div>
          </div>
        </ContentReveal>
      </section>
      <section className={classes.services}>
        <div className={classes.container}>
          <ContentReveal delay={0.5}>
            <div className='subtitle'>
              <div className='line'></div>
              <div className='text'>services</div>
            </div>
            <h2 className={classes.heading}>
              HELPING YOU REACH HIGHER AND ACHIEVE MORE
            </h2>
          </ContentReveal>
          <div className={classes.grid}>
            <ContentReveal height={'0px'} minHeight={'40vh'} delay={0.5}>
              <div className={classes[`service-one`]}>
                <div className={classes[`service-img`]}>
                  <Image src={services1} alt='services' />
                </div>
                <div className={classes[`services-text`]}>
                  <Image src={personal} alt='services' />
                  <h4>PERSONAL TRAINING</h4>
                </div>
                <p>
                  Lacus duis consectetur elementum pharetra, dictumst dictum
                  nulla adipiscing.
                </p>
              </div>
            </ContentReveal>
            <ContentReveal height={'0px'} minHeight={'40vh'} delay={0.5}>
              <div className={classes[`service-two`]}>
                <div className={classes[`service-img`]}>
                  <Image src={services2} alt='services' />
                </div>
                <div className={classes[`services-text`]}>
                  <Image src={personal} alt='services' />
                  <h4>Basketball camp</h4>
                </div>
                <p>
                  Lacus duis consectetur elementum pharetra, dictumst dictum
                  nulla adipiscing.
                </p>
              </div>
            </ContentReveal>
            <ContentReveal height={'0px'} minHeight={'40vh'} delay={0.5}>
              <div className={classes[`service-three`]}>
                <div className={classes[`service-img`]}>
                  <Image src={services3} alt='services' />
                </div>
                <div className={classes[`services-text`]}>
                  <Image src={personal} alt='services' />
                  <h4>Team</h4>
                </div>
                <p>
                  Lacus duis consectetur elementum pharetra, dictumst dictum
                  nulla adipiscing.
                </p>
              </div>
            </ContentReveal>
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
        <div className={classes[`img-block`]}>
          <Image src={services3} alt='services' />
        </div>
      </section>
      <section className={classes.accordion}>
        <div className={classes.container}>
          <div className={classes[`accordion-header`]}>
            <div className='subtitle'>
              <div className='line'></div>
              <div className='text'>Faq</div>
            </div>

            <h2>
              FREQUENTLY ASKED
              <br />
              QUESTIONS
            </h2>
          </div>
          <div className={classes[`accordion-grid`]}>
            <Accordion
              header='Can I cancel my membership?'
              content='Iaculis id magna arcu nibh magna orci nibh. Lorem donec arcu imperdiet sodales ut non praesent tristique est. Nunc vulputate morbi elit convallis. Consectetur etiam enim dignissim arcu elementum. Arcu orci, malesuada proin ac. Ornare odio morbi laoreet.'
            />
            <Accordion
              header='Can I cancel my membership?'
              content='Iaculis id magna arcu nibh magna orci nibh. Lorem donec arcu imperdiet sodales ut non praesent tristique est. Nunc vulputate morbi elit convallis. Consectetur etiam enim dignissim arcu elementum. Arcu orci, malesuada proin ac. Ornare odio morbi laoreet.'
            />
            <Accordion
              header='Can I cancel my membership?'
              content='Iaculis id magna arcu nibh magna orci nibh. Lorem donec arcu imperdiet sodales ut non praesent tristique est. Nunc vulputate morbi elit convallis. Consectetur etiam enim dignissim arcu elementum. Arcu orci, malesuada proin ac. Ornare odio morbi laoreet.'
            />
            <Accordion
              header='Can I cancel my membership?'
              content='Iaculis id magna arcu nibh magna orci nibh. Lorem donec arcu imperdiet sodales ut non praesent tristique est. Nunc vulputate morbi elit convallis. Consectetur etiam enim dignissim arcu elementum. Arcu orci, malesuada proin ac. Ornare odio morbi laoreet.'
            />
          </div>
        </div>
      </section>
    </main>
  )
}
