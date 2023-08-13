import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import '../styles/globals.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />
}
