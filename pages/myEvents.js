import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'
import { useRouter } from 'next/router'
import NavBar from '../components/commons/NavBar'
import Footer from '../components/commons/Footer'



// import nftick contract address 
import {
    contractAddress
} from '../utils/config'

// import smart contract abi 
import NFTick from '../utils/NFTick.json'

export default function MyAssets() {
    const [events, setEvents] = useState([])
    const [loadingState, setLoadingState] = useState('not-loaded')
    const router = useRouter()
    useEffect(() => {
        loadEvents()
    }, [])

    async function loadEvents() {
        const web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true,
        })

        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        const nftickContract = new ethers.Contract(contractAddress, NFTick.abi, signer)
        const data = await nftickContract.fetchAllMyEvents()

        const items = await Promise.all(data.map(async i => {
            // not too sure about nftickContract.tokenURI(i.tokenId), would need to check it out to see if it works
            const tokenURI = await nftickContract.tokenURI(i.tokenId)
            // nftick _data should be token uri 
            const meta = await axios.get(tokenURI)
            const tokenName = ethers.utils.parseBytes32String(i._tokenName)
            let price = ethers.utils.formatUnits(i.currentPrice.toString(), 'ether')
            let item = {
                totalTokens: i.totalTokens.toNumber(),
                tokenName,
                tokenId: i.tokenId.toNumber(),
                creator: i.creator,
                owner: i.owner,
                price,
                image: meta.data.image,
                tokenURI
            }
            return item
        }))
        setEvents(items)
        setLoadingState('loaded')
    }

    if (loadingState === 'loaded' && !events.length) return (<h1 className="py-10 px-20 text-3xl">
        No Events Created</h1>)
    return (
        <div>
            <NavBar />
            <div className='flex justify-center'>
                <div className='p-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                        {
                            events.map((event, i) => (
                                <div key={i} className='border shadow rounded-xl overflow-hidden'>
                                    <img src={event.image} className="rounded" />
                                    <div className='p-4 bg-black'>
                                        <p className='text-2xl font-bold text-white'>
                                            Price - {event.price} Eth
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}