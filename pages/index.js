import styles from '../styles/Home.module.css'
import Head from 'next/head' //head meta-tags
import Image from 'next/image' //image optimization
import cityImage from '../public/assets/images/city.jpg' //image
export default function Home() {
  return (
  <>
  <Head>
    <title>Home</title>
    <meta name="keywords" content='Roupas, Calçados, Meias'></meta>
  </Head>
  <div>
    <h1 className={styles.title}>Oi</h1>
    <Image src={cityImage} width="300px" height="400px" alt="Cidade a noite"/>
  </div>
  </>
  )
}