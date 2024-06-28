import classes from '@/styles/pages/about.module.scss'
import Image from 'next/image'
import trainingSession from '../../public/session.jpeg'

export default function About() {
  return (
    <div className={classes.about}>
      <div className={classes.hero}>
        <h1>about Siniša</h1>
      </div>
      <div className={classes.images}>
        <Image src={trainingSession} alt='training session' />
        <Image src={trainingSession} alt='training session' />
        <Image src={trainingSession} alt='training session' />
      </div>
    </div>
  )
}
