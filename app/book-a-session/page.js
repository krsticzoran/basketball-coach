import classes from '@/styles/pages/book-a-session.module.scss'
import style from '@/styles/components/ui/button.module.scss'
import Image from 'next/image'
import trainingSession from '../../public/book-a-session.jpeg'

export default function Contact() {
  return (
    <div className={classes.contact}>
      <div className={classes.data}>
        <div className='subtitle'>
          <div className='line'></div>
          <div className='text'>about</div>
        </div>
        <form>
          <input type='text' name='name' placeholder='First Name' required />
          <input type='text' name='surname' placeholder='Last Name' required />
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
            maxLength={5000}
            className={classes[`full-width`]}
          />
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
  )
}
