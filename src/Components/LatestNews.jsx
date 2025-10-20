import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-2 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>latest</p>
            <Marquee pauseOnHover='ture'>
             <p className='font-semibold mx-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             <p className='font-semibold mx-4'>Lorem ipsum dolor sit amet consectetur.</p>
             <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sint nihil, nisi maxime repellat amet?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;