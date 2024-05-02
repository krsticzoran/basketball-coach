import Link from 'next/link'

export default function Home() {
  return (
    <div className='container'>
      <Link href='/' style={{ color: 'red' }}>
        Hello World!!!
      </Link>
    </div>
  )
}
