import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    console.log('Attempting to send email...')
    const { data } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'zorankrstic81@gmail.com',
      subject: 'Hello',
      html: '<h1>It will work</h1>',
    })
    console.log('Email sent successfully:', data)
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error sending email:', error.message)
    return NextResponse.json({ error: error.message })
  }
}
