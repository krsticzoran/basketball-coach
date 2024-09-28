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
import gym from '../public/gym.jpg'
import Accordion from '@/components/ui/accordion'
import ContentReveal from '@/components/ui/content-reveal'
import Link from 'next/link'

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
              <Link href='/about#individual'>
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
                    developing elite players like Nikola Jokić, while guiding
                    top basketball talents across Europe to achieve success at
                    both national and international levels.
                  </p>
                </div>
              </Link>
            </ContentReveal>
            <ContentReveal height={'0px'} minHeight={'40vh'} delay={0.5}>
              <Link href='/about#group'>
                <div className={classes[`service-two`]}>
                  <div className={classes[`service-img`]}>
                    <Image src={services2} alt='services' />
                  </div>
                  <div className={classes[`services-text`]}>
                    <Image src={camp} alt='services' />
                    <h4>Basketball camp</h4>
                  </div>
                  <p>
                    In his accomplished career, Siniša has participated in over
                    15 basketball camps across Europe, gaining valuable
                    experience experience working alongside legendary coaches
                    such as Željko Obradović and Ranko Žeravica.
                  </p>
                </div>
              </Link>
            </ContentReveal>
            <ContentReveal height={'0px'} minHeight={'40vh'} delay={0.5}>
              <Link href='/about#group'>
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
              </Link>
            </ContentReveal>
          </div>
        </div>
      </section>
      <section className={classes.full}>
        <ContentReveal height={'0px'} minHeight={'40vh'} delay={0.5}>
          <div className={classes[`left-block`]}>
            <div className='subtitle'>
              <div className='line'></div>
              <div className='text'>location & facility</div>
            </div>
            <h2>Comprehensive Basketball Training in Sombor</h2>
            <p>
              Our training facility in Sombor is fully equipped to support the
              holistic development of basketball players. With a dedicated gym
              for strength and conditioning, a professional basketball court,
              and access to experienced massage therapists, we provide all the
              necessary resources to enhance your athletic performance. Whether
              you're refining your skills on the court or focusing on recovery,
              our environment ensures you have everything you need to succeed.
            </p>
          </div>
        </ContentReveal>
        <ContentReveal height={'0px'} minHeight={'40vh'} delay={0.5}>
          <div className={classes[`img-block`]}>
            <Image src={gym} alt='services' />
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
                header='Where is Sombor?'
                content="Sombor is a city located in the northern part of Serbia, near the borders with Hungary and Croatia. It is approximately a two-hour drive from Belgrade's Nikola Tesla Airport.
"
              />
            </ContentReveal>
            <ContentReveal delay={0.5}>
              <Accordion
                header='Is it possible to have a training session at another location?'
                content='Yes, Siniša has conducted many individual training sessions across Europe, and sessions can be arranged at other locations upon request.'
              />
            </ContentReveal>
            <ContentReveal delay={0.5}>
              <Accordion
                header='What age groups does Siniša work with?'
                content='Siniša works with players of all age groups, from young beginners to professional athletes, customizing the training to meet their specific needs.'
              />
            </ContentReveal>
            <ContentReveal delay={0.5}>
              <Accordion
                header='Do I need to bring my own equipment for the training sessions?'
                content="No, the facility is fully outfitted with all the necessary equipment for basketball training. However, if you prefer, you're welcome to bring your own gear."
              />
            </ContentReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
