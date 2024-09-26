import Image from 'next/image'
import bgImage from '../public/jokic.jpeg'
import Button from '@/components/ui/button'
import classes from '@/styles/pages/home.module.scss'
import welcomeImg from '../public/Savovic.jpeg'
import services1 from '../public/services1.jpg'
import services2 from '../public/services2.jpg'
import services3 from '../public/services3.jpg'
import personal from '../public/personal.svg'
import team from '../public/team.svg'
import camp from '../public/camp.svg'
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
                  Siniša’s individual coaching has been instrumental in
                  developing elite players like Nikola Jokić, while guiding top
                  basketball talents across Europe to achieve success at both
                  national and international levels.
                </p>
              </div>
            </ContentReveal>
            <ContentReveal height={'0px'} minHeight={'40vh'} delay={0.5}>
              <div className={classes[`service-two`]}>
                <div className={classes[`service-img`]}>
                  <Image src={services2} alt='services' />
                </div>
                <div className={classes[`services-text`]}>
                  <Image src={camp} alt='services' />
                  <h4>Basketball camp</h4>
                </div>
                <p>
                  In his accomplished career, Siniša has participated in over 15
                  basketball camps across Europe, gaining valuable experience
                  working alongside legendary coaches such as Željko Obradović
                  and Ranko Žeravica.
                </p>
              </div>
            </ContentReveal>
            <ContentReveal height={'0px'} minHeight={'40vh'} delay={0.5}>
              <div className={classes[`service-three`]}>
                <div className={classes[`service-img`]}>
                  <Image src={services3} alt='services' />
                </div>
                <div className={classes[`services-text`]}>
                  <Image src={team} alt='services' />
                  <h4>Team</h4>
                </div>
                <p>
                  Siniša is a licensed FIBA coach who has led both senior and
                  youth teams, achieving an impressive 80% win rate as a head
                  coach throughout his career, including the national team of
                  Vojvodina, KK Vrbas, and many others.
                </p>
              </div>
            </ContentReveal>
          </div>
        </div>
      </section>
      <section className={classes.full}>
        <ContentReveal height={'0px'} minHeight={'40vh'} delay={0.5}>
          <div className={classes[`left-block`]}>
            <div className='subtitle'>
              <div className='line'></div>
              <div className='text'>services</div>
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
          </div>
        </ContentReveal>
        <ContentReveal height={'0px'} minHeight={'40vh'} delay={0.5}>
          <div className={classes[`img-block`]}>
            <Image src={services3} alt='services' />
          </div>
        </ContentReveal>
      </section>

      <section className={classes.accordion}>
        <div className={classes.container}>
          <ContentReveal delay={0.5}>
            <div className={classes[`accordion-header`]}>
              <div className='subtitle'>
                <div className='line'></div>
                <div className='text'>Faq</div>
              </div>

              <h2>
                FREQUENTLY ASKED&nbsp;
                <br />
                QUESTIONS
              </h2>
            </div>
          </ContentReveal>
          <div className={classes[`accordion-grid`]}>
            <ContentReveal delay={0.5}>
              <Accordion
                header='Can I cancel my membership?'
                content='Iaculis id magna arcu nibh magna orci nibh. Lorem donec arcu imperdiet sodales ut non praesent tristique est. Nunc vulputate morbi elit convallis. Consectetur etiam enim dignissim arcu elementum. Arcu orci, malesuada proin ac. Ornare odio morbi laoreet.'
              />
            </ContentReveal>
            <ContentReveal delay={0.5}>
              <Accordion
                header='Can I cancel my membership?'
                content='Iaculis id magna arcu nibh magna orci nibh. Lorem donec arcu imperdiet sodales ut non praesent tristique est. Nunc vulputate morbi elit convallis. Consectetur etiam enim dignissim arcu elementum. Arcu orci, malesuada proin ac. Ornare odio morbi laoreet.'
              />
            </ContentReveal>
            <ContentReveal delay={0.5}>
              <Accordion
                header='Can I cancel my membership?'
                content='Iaculis id magna arcu nibh magna orci nibh. Lorem donec arcu imperdiet sodales ut non praesent tristique est. Nunc vulputate morbi elit convallis. Consectetur etiam enim dignissim arcu elementum. Arcu orci, malesuada proin ac. Ornare odio morbi laoreet.'
              />
            </ContentReveal>
            <ContentReveal delay={0.5}>
              <Accordion
                header='Can I cancel my membership?'
                content='Iaculis id magna arcu nibh magna orci nibh. Lorem donec arcu imperdiet sodales ut non praesent tristique est. Nunc vulputate morbi elit convallis. Consectetur etiam enim dignissim arcu elementum. Arcu orci, malesuada proin ac. Ornare odio morbi laoreet.'
              />
            </ContentReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
