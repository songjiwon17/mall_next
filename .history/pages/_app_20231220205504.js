import Container from '@/components/Container';
import Header from '@/components/Header';
import { ThemeContext, ThemeProvider } from '@/lib/ThemeContext';
import '@/styles/global.css';
import Head from 'next/head';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Codeitmall</title>
      <Link rel="icon" href="/images/delivery.png"/>
    </Head>
    <ThemeProvider>
      <Header/>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
    </>
    
   );
}