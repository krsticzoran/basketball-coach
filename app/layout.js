import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Inter, Roboto_Condensed } from 'next/font/google'
import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
})

export const metadata = {
  title: 'Basketball Coach Siniša Savović ',
  description:
    'Siniša Savović, a seasoned basketball coach, has trained numerous renowned players, including NBA MVP Nikola Jokić. Offering tailored individual training sessions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${robotoCondensed.variable} ${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
