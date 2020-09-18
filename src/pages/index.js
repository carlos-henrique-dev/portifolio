import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos Henrique Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{color: "#fff"}}>Olá, Mundo</h1>

    </div>
  )
}
