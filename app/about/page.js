import classes from '@/styles/pages/about.module.scss'
import Image from 'next/image'
import trainingSession from '../../public/book-a-session.jpg'
import Button from '@/components/ui/button'
import ContentReveal from '@/components/ui/content-reveal'
import about1 from '../../public/about1.jpg'
import about2 from '../../public/about2.jpg'
import about3 from '../../public/about3.jpg'
import about4 from '../../public/about4.jpg'
import about5 from '../../public/about5.jpg'
import about6 from '../../public/about6.jpg'
import about7 from '../../public/about7.jpg'
import about8 from '../../public/about8.jpg'

export default function About() {
  return (
    <div className={classes.about}>
      <div className={classes.hero}>
        <h1>
          about <span>Siniša</span>
        </h1>
      </div>
      <div className={`${classes['images-three']} ${classes.images}`}>
        <Image src={about1} alt='training session' />
        <Image src={about2} alt='training session' />
        <Image src={about3} alt='training session' />
      </div>
      <div className={classes.story} id='individual'>
        <div className={classes.content}>
          <div className={classes.heading}>
            <div className='subtitle'>
              <div className='line'></div>
              <div className='text'>my story</div>
              <div className='line'></div>
            </div>
            <h2>Siniša's Coaching Journey</h2>
          </div>
          <div className={classes.text}>
            <p>
              Siniša is a deeply passionate basketball coach with a lifelong
              commitment to the sport. He has a proven track record of success,
              particularly in working with young athletes, helping them grow
              into future champions. One of his greatest achievements is
              coaching Nikola Jokić, the NBA MVP, during his formative years.
              Siniša's dedication to developing young talent is evident in the
              many other players he has mentored who have gone on to have
              successful careers. <br /> <br />
              As a FIBA-licensed coach, Siniša brings a wealth of knowledge and
              professionalism to every training session. His ability to inspire,
              guide, and elevate his players has earned him recognition across
              Europe. With a focus on nurturing both the physical and mental
              aspects of the game, Siniša ensures that his players are
              well-prepared for the challenges ahead, both on and off the
              court."
            </p>
          </div>
        </div>
      </div>
      <div className={`${classes['images-two']} ${classes.images}`}>
        <Image src={about4} alt='training session' />
        <Image src={about5} alt='training session' />
      </div>
      <div className={classes.story} id='group'>
        <div className={classes.content}>
          <div className={classes.heading}>
            <div className='subtitle'>
              <div className='line'></div>
              <div className='text'>My misson</div>
              <div className='line'></div>
            </div>
            <h2>ATTAIN MAXIMUM PERFORMANCE</h2>
          </div>
          <div className={classes.text}>
            <p>
              Throughout his career, Siniša has been actively involved in over
              15 basketball camps across Europe, working alongside renowned
              coaches like Željko Obradović and Ranko Žeravica. His experience
              in collaborating with such legendary figures, as well as his own
              expertise, has been instrumental in shaping these camps into
              success stories. Siniša's passion for developing young players
              shines through in every team environment he leads, always striving
              to unlock the full potential of each athlete. <br /> <br />
              In addition to his camp experience, Siniša has served as head
              coach for various teams, including the Vojvodina youth national
              team and the senior team of KK Vrbas, among others. Throughout his
              career, he has consistently led his teams to success, maintaining
              an impressive winning record of over 80%. His leadership,
              strategic mindset, and ability to collaborate with top-level
              coaching staff have consistently brought out the best in his
              players, earning him widespread respect in the basketball
              community.
            </p>
          </div>
        </div>
      </div>
      <div className={`${classes['images-three']} ${classes.images}`}>
        <Image src={about7} alt='training session' />
        <Image src={about6} alt='training session' />
        <Image src={about8} alt='training session' />
      </div>
      <div className={classes.session}>
        <div className={classes.content}>
          <h2>
            <span> BOOK A SESSION </span>
            and start your <br /> journey today!
          </h2>

          <Button href='/book-a-session/'>get started</Button>
        </div>
      </div>
    </div>
  )
}
