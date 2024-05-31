import classes from '@/styles/pages/book-a-session.module.scss'
import style from '@/styles/components/ui/button.module.scss'
import Image from 'next/image'
import trainingSession from '../../public/session.jpeg'

export default function Contact() {
  return (
    <>
      <div className={classes.contact}>
        <div className={classes.data}>
          <div className='subtitle'>
            <div className='line'></div>
            <div className='text'>Book a Session</div>
          </div>
          <h1>Take the First Step to Success</h1>
          <p>
            Submit your details below, and Coach Siniša Savović will contact you
            shortly to create a personalized plan for your success.
          </p>
          <form>
            <input type='text' name='name' placeholder='First Name' required />
            <input
              type='text'
              name='surname'
              placeholder='Last Name'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              className={classes[`full-width`]}
              required
            />
            <input
              type='tel'
              name='tel'
              placeholder='Phone Number'
              className={classes[`full-width`]}
              required
            />
            <textarea
              placeholder='Message'
              name='message'
              className={classes[`full-width`]}
              required
            ></textarea>
            <button
              type='submit'
              className={`${classes[`full-width`]} ${style.button}`}
            >
              Submit
            </button>
          </form>
        </div>
        <div className={classes['image-container']}>
          <Image src={trainingSession} />
        </div>
      </div>
    </>
  )
}
