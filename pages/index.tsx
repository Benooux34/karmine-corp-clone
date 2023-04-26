import Head from 'next/head'
// FONT
import { Inter } from '@next/font/google'
// COMPONENTS
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Karmine Corp - Clone</title>
        <meta name="description" content="Antunes Benoit - Karmine Corp Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kcorp-logo.png" />
      </Head>
      <main className={`${inter.className}`}>
        <Header />
        <Hero />
      </main>
    </>
  )
}
