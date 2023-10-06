import Footer from '@/components/Layouts/Footer/Footer'
import Navbar from '@/components/Layouts/Navbar/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div>
<Navbar/>
<Component {...pageProps} />
<Footer/>
    </div>
  ) 
}
