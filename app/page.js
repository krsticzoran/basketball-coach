import Image from 'next/image'
import bgImage from '../public/background.jpg'

export default function Home() {
  return (
    <main style={{ display: 'flex' }}>
      <div style={{ width: '50%' }} className='pb-25'>
        Some text will go here
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
