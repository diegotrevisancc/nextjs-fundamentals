import styles from '../styles/Home.module.css'
import Head from 'next/head' //head meta-tags
export default function Home() {
  return (
  <>
  <Head>
    <title>Home</title>
    <meta name="keywords" content='Roupas, Calçados, Meias'></meta>
  </Head>
    <h1 className={styles.title}>Oi</h1>
  </>
  )
}