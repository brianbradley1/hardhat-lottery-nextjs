// imports instead of require
// nodejs != emcascript / javascript
// backend js bit diff to front end js

import Head from "next/head"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
//import ManualHeader from "../components/ManualHeader"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Decentralized Lottery</title>
                <meta name="description" content="Decentralized Lottery Dapp" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Decentralized Lottery</h1>
            {/* <ManualHeader /> */}
            <Header />
            <LotteryEntrance />
            <main className={styles.main}></main>
            <footer className={styles.footer}></footer>
        </div>
    )
}
