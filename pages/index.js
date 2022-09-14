import Head from 'next/head'
import LandingScreen from '../components/screens/LandingScreen'


// import nftick contract address 
import {
  contractAddress
} from '../utils/config'

// import smart contract abi 
import NFTick from '../utils/NFTick.json'


export default function Home() {
  return (
    <>
      <Head>
        <title>NFTick.io</title>
        <meta name="description" content="An NFT market place for Events, Meetings and parties." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingScreen />
    </>
  )
}
