'use server'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function sendingEmail(prevState, formData) {
  const collectedData = {
    name: formData.get('name'),
    surname: formData.get('surname'),
    email: formData.get('email'),
    tel: formData.get('tel'),
    message: formData.get('message'),
  }
  if (collectedData.name.trim() === '') {
    return {
      message: 'Invalid input.',
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    console.log('Attempting to send email...')
    const { data } = await resend.emails.send({
      /*put a website address instead of a generic one*!!!*/
      from: 'PRO BASKETBALL COACH <onboarding@resend.dev>',
      to: 'zorankrstic81@gmail.com',
      subject: 'Hello',
      html: `<p>name: ${collectedData.name} ${collectedData.surname}</p>
      
      <p>tel: ${collectedData.tel}</p>
      <p>email: ${collectedData.email}</p>
    
      <p>message: ${collectedData.message}</p>
      `,
    })
    if (data == null) {
      throw new Error('Message is not sent. Please try later.')
    }

    return {
      message: 'Your message has been sent successfully.',
    }
  } catch (error) {
    return {
      message: error.message,
    }
  }
}
