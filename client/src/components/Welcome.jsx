import React from 'react';

import { Fade } from 'react-reveal';

const Welcome = () => {
  return (
            <Fade bottom cascade>

            <div className="text-white mb-5 px-10 max-w-[820px] mx-auto mt-20">
                <Fade bottom cascade>
                    <h1 className='sm:text-5xl text-[40px] font-black text-center mb-5 sm:mb-10'>We centralize a decentralized world to make crypto currency easier</h1>
                </Fade>
                <Fade bottom cascade>
                <p className='text-center mb-10 max-w-[500px] mx-auto'>The last crypto currency news in real time, send crypto white gif genrate by AI, view your transaction with gif and message and more...</p>
                </Fade>
                <Fade bottom cascade>
                <div className="flex justify-center flex-col items-center sm:flex-row">
                    <button className='py-3 px-5 rounded-[10px] border-[1px] transition duration-300 font-bold sm:mb-0  sm:mr-5 mb-5 hover:bg-white hover:text-black'>Start to send crypto</button>
                    <button className="py-3 px-5 rounded-[10px] bg-[#9A4AFF] transition duration-300 hover:opacity-70 font-bold">Joint us on Disscord</button>
                </div>
                </Fade>
            </div>
</Fade>
  );
};

export default Welcome;
