import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Card from '../components/card'
import styles from '../styles/Home.module.css'
import coffeStoresData from './stores.json'

export default function Home({ allData }) {
  
  const handleOnBannerClick = () => {
    console.log("button clicked")
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText='Find stores nearby' handleOnBannerClick={handleOnBannerClick}></Banner>
      </main>
      <div className='grid mx-auto gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
        {
        allData.map(data => {
          return (
            <Card key={data.id} coffesoreInfo={data}></Card>
          )
        })
      }
      </div>
    </div>
  )
}
export async function getStaticProps() {
    return {
      props: {
        allData: coffeStoresData
      }
    }
}