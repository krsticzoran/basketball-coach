import Image from 'next/image'
import bgImage from '../public/bg1.webp'
import Button from '@/components/ui/button'

export default function Home() {
  const divStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <main style={divStyle}>
      <div>
        <h1>Ready to Train like an MVP? </h1>
        <h5>
          <span> Work with a coach who trained Jokic to success!</span>
          <span>Train with Sinisa Savovic now</span>
        </h5>
        <Button name='Book Your Session' href='/contact/' color='dark' />
      </div>
      <div>
        <Image src={bgImage} />
      </div>
    </main>
  )
}
