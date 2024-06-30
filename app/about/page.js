import classes from '@/styles/pages/about.module.scss'
import Image from 'next/image'
import trainingSession from '../../public/session.jpeg'
import Button from '@/components/ui/button'

export default function About() {
  return (
    <div className={classes.about}>
      <div className={classes.hero}>
        <h1>
          about <span>Siniša</span>
        </h1>
      </div>
      <div className={`${classes['images-three']} ${classes.images}`}>
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
      <div className={`${classes['images-two']} ${classes.images}`}>
        <Image src={trainingSession} alt='training session' />
        <Image src={trainingSession} alt='training session' />
      </div>
      <div className={classes.story}>
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
              Risus velit mollis netus sollicitudin at duis adipiscing ac. Amet
              porttitor consectetur nunc, sit placerat dictum. Ut faucibus
              pharetra sed habitant duis convallis quam quis non. Lectus
              fringilla nunc sed faucibus. Integer sapien, id tempor magna
              integer sit orci. Vel montes, ante integer diam nisl placerat
              auctor vitae felis. Aliquet vitae lacus, consectetur fusce nunc
              placerat mi. <br /> <br />
              Lectus vitae tellus vel ac sagittis integer. Integer mi tristique
              gravida purus amet tincidunt magna etiam. Viverra in tristique
              varius duis egestas bibendum. A mattis ultrices egestas maecenas
              in at euismod. Ipsum, ac in consectetur felis mauris.
            </p>
          </div>
        </div>
      </div>
      <div className={`${classes['images-three']} ${classes.images}`}>
        <Image src={trainingSession} alt='training session' />
        <Image src={trainingSession} alt='training session' />
        <Image src={trainingSession} alt='training session' />
      </div>
      <div className={classes.session}>
        <div className={classes.content}>
          <h2>
            <span> BOOK A SESSION </span>
            and start your <br /> journey today!
          </h2>

          <Button href='/contact/'>get started</Button>
        </div>
      </div>
    </div>
  )
}
