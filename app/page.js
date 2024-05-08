import Image from 'next/image'
import bgImage from '../public/background.jpg'

export default function Home() {
  return (
    <main style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <h1>Ready to Train like an MVP? </h1>
        <h5>
          <span> Work with a coach who trained Jokic to success!</span>
          <span>Train with Sinisa Savovic now</span>
        </h5>
        <button>Book Your Session</button>
      </div>
      <Image
        src={bgImage}
        width={800}
        height={800}
        style={{
          objectFit: 'cover',
          zIndex: 1,
        }}
      />
    </main>
  )
}
