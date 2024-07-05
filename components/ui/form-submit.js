'use client'

import style from '@/styles/components/ui/button.module.scss'
import classes from '@/styles/pages/book-a-session.module.scss'

import { useFormStatus } from 'react-dom'

export default function FormSubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      type='submit'
      className={`${classes[`full-width`]} ${style.button}`}
      style={{ cursor: pending ? 'not-allowed' : 'pointer' }}
    >
      {pending ? 'Sending...' : 'Send'}
    </button>
  )
}
