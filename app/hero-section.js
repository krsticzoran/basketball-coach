import Image from 'next/image'
import bgImage from '../public/bg1.webp'
import Button from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section>
      <div>
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
  )
}
