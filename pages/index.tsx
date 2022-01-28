import type { GetStaticProps, NextPage } from 'next'
// import Link from "next/link";
import Image from "next/image";
import Head from 'next/head'
// image imports
import heroImage from "../public/static/hero-image.png";
// component imports
import Banner from '../components/Banner'
// style imports
import styles from '../styles/Home.module.css'
import coffeeStores from '../data/coffee-stores.json'
import Card from '../components/Card';

interface CoffeeStore {
  id: string;
  name: string;
  imgUrl: string;
  websiteUrl: string;
  address: string;
  neighborhood: string;
}

export const getStaticProps = async () => {
  return { props: { coffeeStores } }
}


const Home: NextPage = (props) => {
  console.log(props);
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
        <div className={styles.heroImage}>
          <Image src={heroImage} alt="hero image" width={700} height={400} />
        </div>
        <div className={styles.cardLayout}>
          {coffeeStores.map((store) => <Card key={store.id} name={store.name} imgUrl={store.imgUrl} link={`/coffee-store/${store.id}`} className={styles.card} />)}
        </div>
      </main>

    </div>
  )
}

export default Home
