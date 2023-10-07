import Footer from '@/components/Layouts/Footer/Footer'
import Navbar from '@/components/Layouts/Navbar/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "@/components/ui/toaster"

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div>
        <Toaster />
<Navbar/>
<Component {...pageProps} />
<Footer/>
    </div>
  ) 
}
