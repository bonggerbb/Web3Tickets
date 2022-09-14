import React, { memo } from 'react'
import NavBar from '../commons/NavBar'
import Footer from '../commons/Footer'
import { SearchRounded, CloseRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import CarouselWrapper from '../commons/CarouselWrapper';
import BlurImage from '../commons/BlurImage';
import CarouselCard from '../commons/CarouselCard';
import ExploreFilter from '../commons/ExploreFilter';

const events = [
    {
        url: '/img/nft.jpg',
        tittle: 'An upcoming Event',
        date: '12/34/2024'
    },
    {
        url: '/img/nft.jpg',
        tittle: 'An upcoming Event',
        date: '12/34/2024'
    },
    {
        url: '/img/nft.jpg',
        tittle: 'An upcoming Event',
        date: '12/34/2024'
    },
    {
        url: '/img/nft.jpg',
        tittle: 'An upcoming Event',
        date: '12/34/2024'
    },
    {
        url: '/img/nft.jpg',
        tittle: 'An upcoming Event',
        date: '12/34/2024'
    },
    {
        url: '/img/nft.jpg',
        tittle: 'An upcoming Event',
        date: '12/34/2024'
    },
    {
        url: '/img/nft.jpg',
        tittle: 'An upcoming Event',
        date: '12/34/2024'
    },
]

function LandingScreen() {

    const onSearchChange = () => {

    }
    return (
        <div className='flex h-auto flex-col'>
            <NavBar />
            <main className='flex-1 w-full max-w-app-fit mx-auto p-4 text-white bg-sec-1'>
                <section className='flex flex-col'>
                    <h1 className='text-lg text-center font-bold'>A NFT market place for Events, Meetings and Parties</h1>
                    <div className='relative self-center w-full max-w-[500px]'>
                        <SearchRounded className='absolute left-2 top-5 text-gray-500 ' />
                        <input
                            className='py-5 px-10 w-full outline-none rounded-3xl text-black'
                            placeholder='Search For An Event'
                            type="text" />
                        <IconButton className='absolute right-2 top-[16px] cursor-pointer'>
                            <CloseRounded className=' text-sm text-gray-500 ' />
                        </IconButton>

                    </div>
                </section>
                {/* <section>
                    <ExploreFilter />
                </section> */}
                <section className='mt-5 mx-auto'>
                    <h2 className='font-bold mb-4 text-2xl'>Popular Events</h2>
                    <CarouselWrapper>
                        {
                            events.map((event, index) => (
                                <CarouselCard key={index} event={event} />
                            ))
                        }
                    </CarouselWrapper>
                </section>
                <section className='mt-5 mx-auto'>
                    <h2 className='font-bold mb-4 text-2xl'>Upcoming Events</h2>
                    <CarouselWrapper>
                        {
                            events.map((event, index) => (
                                <CarouselCard key={index} event={event} />
                            ))
                        }
                    </CarouselWrapper>
                </section>
                <section className='mt-5 mx-auto'>
                    <h2 className='font-bold mb-4 text-2xl'>New Events</h2>
                    <CarouselWrapper>
                        {
                            events.map((event, index) => (
                                <CarouselCard key={index} event={event} />
                            ))
                        }
                    </CarouselWrapper>
                </section>
                <section className='mt-5 mx-auto'>
                    <h2 className='font-bold mb-4 text-2xl'>Online Events</h2>
                    <CarouselWrapper>
                        {
                            events.map((event, index) => (
                                <CarouselCard key={index} event={event} />
                            ))
                        }
                    </CarouselWrapper>
                </section>
                <section className='mt-5 mx-auto'>
                    <h2 className='font-bold mb-4 text-2xl'>physical Events</h2>
                    <CarouselWrapper>
                        {
                            events.map((event, index) => (
                                <CarouselCard key={index} event={event} />
                            ))
                        }
                    </CarouselWrapper>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default memo(LandingScreen)