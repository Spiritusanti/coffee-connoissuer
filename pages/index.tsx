import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoissuer</title>
        <meta name="description" content="Application for locating coffee shops based on your location" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coffee Connoissuer
        </h1>

      </main>
    </div>
  )
}

export default Home
