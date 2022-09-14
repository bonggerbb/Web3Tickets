import React, { memo } from 'react'
import BlurImage from './BlurImage'

function CarouselCard({ event }) {
    return (
        <div className='group mx-4 bg-sec-2 rounded-3xl cursor-pointer'>
            <div className='relative h-[200px] w-[100%] rounded-3xl'>
                <BlurImage
                    src={event?.url}
                    alt="event-ticket-nft"
                    className='rounded-3xl transition-all duration-500 group-hover:scale-[1.2]'
                    objectFit='cover'
                    layout='fill'
                />
                <small
                    className='absolute bottom-0 transition-all duration-500 opacity-0 py-2 px-4 bg-sec-2 text-white rounded-2xl left-2/4 -translate-x-2/4 group-hover:opacity-100 group-hover:bottom-2'>
                    Attend
                </small>
            </div>
            <div className='p-4'>
                <h1 className='text-sm md:text-base font-base'>{event?.tittle}</h1>
                <p className='text-xs'>{event?.date}</p>
            </div>
        </div>
    )
}

export default memo(CarouselCard)