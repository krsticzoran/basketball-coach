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
      <div className={classes.story}>
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
              Neque ornare pellentesque mus in nisi, mi, ac. Morbi volutpat
              velit id adipiscing mollis. Quisque bibendum vehicula eget ac
              fringilla non nec. Sed vitae faucibus tristique nisl, tincidunt
              nec consequat ullamcorper. Eu volutpat lacus lacus porttitor sed
              nunc. <br /> <br />
              Sed nunc vel massa eget egestas. Non sapien cursus risus lorem.
              Adipiscing eu a penatibus ac viverra cras diam feugiat ornare.
              Gravida nibh at bibendum cras massa. Vitae proin convallis enim
              nunc libero. Lacus aenean vestibulum egestas nec velit sed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
