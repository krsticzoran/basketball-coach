import Head from 'next/head'
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
  title: 'Basketball Coach Siniša Savović',
  description:
    'Siniša Savović, a seasoned basketball coach, has trained numerous renowned players, including NBA MVP Nikola Jokić. Offering tailored individual training sessions.',
  image: 'https://basketball.coach.zkrstic.com/jokic.jpeg',
  url: 'https://basketball.coach.zkrstic.com/',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:image' content={metadata.image} />
        <meta property='og:url' content={metadata.url} />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body className={`${robotoCondensed.variable} ${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
