import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Elevator from '../components/Elevator'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <Elevator level={10}/>
      </main>
    </div>
  )
}

export default Home
