'use client'

import { useState, useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'

import classes from '@/styles/pages/book-a-session.module.scss'

import Image from 'next/image'
import FormSubmitButton from '@/components/ui/form-submit'
import trainingSession from '../../public/book-a-session.jpg'
import { sendingEmail } from '@/lib/action'
import ContentReveal from '@/components/ui/content-reveal'
import ImageCoverReveal from '@/components/ui/image-cover-reveal'

const initialState = {
  message: '',
}

export default function Contact() {
  const [state, formAction] = useFormState(sendingEmail, initialState)
  const [message, setMessage] = useState(state.message)
  const formRef = useRef(null)

  const handleFocus = () => {
    setMessage('')
  }

  useEffect(() => {
    setMessage(state.message)
    if (state.message === 'Your message has been sent successfully.') {
      formRef.current.reset()
    }
  }, [state])

  return (
    <div className={classes.contact}>
      <ContentReveal delay={0.5}>
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

          <form action={formAction} ref={formRef}>
            <input
              type='text'
              name='name'
              placeholder='First Name'
              required
              onFocus={handleFocus}
            />
            <input
              type='text'
              name='surname'
              placeholder='Last Name'
              required
              onFocus={handleFocus}
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              className={classes[`full-width`]}
              required
              onFocus={handleFocus}
            />
            <input
              type='tel'
              name='tel'
              placeholder='Phone Number'
              className={classes[`full-width`]}
              required
              onFocus={handleFocus}
            />
            <textarea
              placeholder='Message'
              name='message'
              className={classes[`full-width`]}
              required
              onFocus={handleFocus}
            ></textarea>
            <FormSubmitButton />
          </form>
          <p
            style={{
              color: message?.includes('sent successfully') ? 'green' : 'red',
              paddingTop: '2rem',
              fontWeight: 'bold',
            }}
          >
            {message}
          </p>
        </div>
      </ContentReveal>

      <div className={classes['image-container']}>
        <ImageCoverReveal delay={0.5}>
          <Image src={trainingSession} alt='training session' />
        </ImageCoverReveal>
      </div>
    </div>
  )
}
