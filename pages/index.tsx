import type { NextPage } from 'next'
import Head from 'next/head'
// component imports
import Banner from '../components/Banner'
// style imports
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const handleOnBannerButtonClick = () => {
    console.log("Clicked");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoissuer</title>
        <meta name="description" content="Application for locating coffee shops based on your location" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="view stores nearby" handleOnClick={handleOnBannerButtonClick} />
      </main>
    </div>
  )
}

export default Home
