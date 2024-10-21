'use server'

import { Resend } from 'resend'

export async function sendingEmail(prevState, formData) {
  const collectedData = {
    name: formData.get('name'),
    surname: formData.get('surname'),
    email: formData.get('email'),
    tel: formData.get('tel'),
    message: formData.get('message'),
  }
  if (!collectedData.name.trim()) {
    return { message: 'Name is required.' }
  }
  if (!collectedData.surname.trim()) {
    return { message: 'Surname is required.' }
  }
  if (!collectedData.email.trim() || !collectedData.email.includes('@')) {
    return { message: 'Email is required and must contain an "@" symbol.' }
  }
  if (!collectedData.tel.trim() || !/^\d{9,}$/.test(collectedData.tel.trim())) {
    return {
      message:
        'Telephone number is required and must contain at least 9 digits.',
    }
  }
  if (
    !collectedData.message.trim() ||
    collectedData.message.trim().length < 15
  ) {
    return {
      message: 'Message is required and must contain at least 15 characters.',
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    console.log('Attempting to send email...')
    const { data } = await resend.emails.send({
      // put veirifed domain
      from: 'PRO BASKETBALL COACH <basketball@resend.dev>',
      // put web adrees of Sinisa
      to: 'savovicsinisa@gmail.com',
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
