import classes from '@/styles/pages/book-a-session.module.scss'

export default function Contact() {
  return (
    <div className={classes.contact}>
      <div className={classes.data}>
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
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div></div>
    </div>
  )
}
