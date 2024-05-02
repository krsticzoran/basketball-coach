import { Inter } from 'next/font/google'
import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Basketball Coach Siniša Savović ',
  description:
    'Siniša Savović, a seasoned basketball coach, has trained numerous renowned players, including NBA MVP Nikola Jokić. Offering tailored individual training sessions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
