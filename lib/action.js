'use server'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function sendingEmail(formData) {
  const collectedData = {
    name: formData.get('name'),
    surname: formData.get('surname'),
    email: formData.get('email'),
    tel: formData.get('tel'),
    message: formData.get('message'),
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
    console.log('Email sent successfully:', data)
  } catch (error) {
    console.error('Error sending email:', error.message)
  }
}
