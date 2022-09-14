import Head from 'next/head'
import NavBar from '../components/commons/NavBar'
import Footer from '../components/commons/Footer'


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
                <title>How It Works</title>
                <meta name="description" content="An NFT market place for Events, Meetings and parties." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className='flex-1 w-full max-w-app-fit mx-auto p-4 text-white bg-sec-1'>
                <h1 className='text-lg text-center font-bold'>HOW IT WORKS</h1>
                <p className='text-lg text-center'>NFTick.io is an events marketplace. built using erc1155 token standards.
                    After connecting your crypto wallet, users can purchase NFTicks - NFT Tickets - to their favourite events. Whether a physical or virtual event nfticks grants holders easy and hassle free access to the events.
                    built using erc1155 token standards, nfticks provide a way to easily verify that a user actually owners an nftick reducing bad actors that may try to out smart the conventional paper ticket.
                    Polygon POS allows for fast and inexpensive transaction on the blockchain, without which NFTick.io will not be able to function.
                </p>
                <h2 className='text-lg text-center font-bold'>For Event Creators</h2>
                <p className='text-lg text-center'>Users are allowed to create their own events on the platform, by visiting - Create an NFT Event - page.
                    The user is asked to provide necessary information about the event like the; Event name, event description, price of tickets, total number of tickets  etc.
                    after which the user will be asked to pay the Event listing price, and create the event
                </p>
                <h2 className='text-lg text-center font-bold'>For Event Fans</h2>
                <p className='text-lg text-center '> Event fans can simply connect their crypto wallet to the platform and purchase nfticks of their favourite events, when the time and date of the event comes, users can simply verify ownership of their nfticks
                    and gain access to their interested events
                </p>
            </main>
            <Footer />
        </>
    )
}
