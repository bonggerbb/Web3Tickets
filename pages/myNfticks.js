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
    const [nfticks, setNFTicks] = useState([])
    const [loadingState, setLoadingState] = useState('not-loaded')
    const router = useRouter()
    useEffect(() => {
        loadNFTicks()
    }, [])

    async function loadNFTicks() {
        const web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true,
        })

        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        const nftickContract = new ethers.Contract(contractAddress, NFTick.abi, signer)
        const data = await nftickContract.fetchAllMyNfticks()

        const items = await Promise.all(data.map(async i => {
            // not too sure about nftickContract.tokenURI(i.tokenId), would need to check it out to see if it works
            const tokenURI = await nftickContract.tokenURI(i.tokenId)
            const meta = await axios.get(tokenURI)
            const tokenName = ethers.utils.parseBytes32String(i.tokenName)
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
        setNFTicks(items)
        setLoadingState('loaded')
    }
    function listNFTick(nftick) {
        console.log('nft:', nftick)
        router.push('/resell-nft?id=${nft.tokenId}&tokenURI=${nft.tokenURI}')
    }
    if (loadingState === 'loaded' && !nfticks.length) return (<h1 className="py-10 px-20 text-3xl">
        No NFTicks owned</h1>)
    return (
        <div>
            <NavBar />
            <div className='flex justify-center'>
                <div className='p-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                        {
                            nfticks.map((nftick, i) => (
                                <div key={i} className='border shadow rounded-xl overflow-hidden'>
                                    <img src={nftick.image} className="rounded" />
                                    <div className='p-4 bg-black'>
                                        <p className='text-2xl font-bold text-white'>
                                            Price - {nftick.price} Eth
                                        </p>
                                        <button className='mt-4 w-full bg-red-500 text-white font-bold py-2 px-12 rounded'
                                            onClick={() => listNFTick(nftick)}>List This NFTick</button>
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