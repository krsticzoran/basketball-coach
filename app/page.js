import Image from 'next/image'
import bgImage from '../public/jokic3.jpeg'
import Button from '@/components/ui/button'
import classes from '@/styles/pages/home.module.scss'

export default function Home() {
  return (
    <main>
      <section className={classes.hero}>
        <div className={classes.text}>
          <h1>Ready to Train like an MVP? </h1>
          <h5>
            <span> Work with a coach who trained Jokic to success!</span>
            <span>Train with Sinisa Savovic now</span>
          </h5>
          <Button href='/contact/' color='dark'>
            Book Your Session
          </Button>
        </div>
        <div>
          <Image src={bgImage} priority alt='Nikola Jokic' />
        </div>
      </section>
    </main>
  )
}
