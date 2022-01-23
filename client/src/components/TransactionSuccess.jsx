import React, { useState } from 'react';
import Confetti from 'react-confetti'
import { Fade } from 'react-reveal';


const TransactionSuccess = ({ handler }) => {

    const { width, height } = window;

    const [isClose, setIsClose] = useState(false)

    const close = () => {
        setIsClose(true)
        setTimeout(() => {
            handler()
        }, 3500);
    }

    return (
        <div className={`fixed z-[99] bg-[rgba(0,0,0,0.8)] items-center top-0 left-0 w-full h-[100vh] flex align-item-center transition duration-350 ease-out justify-center ${isClose && " opacity-0 "}`}>
            <div className="fixed top-0 left-0">
                <Confetti
                    width={width}
                    height={height}
                />
            </div>
            <Fade top>
                <div className="flex z-[99]  flex-col px-20 py-10 bg-[#14223A] h-fit justify-center items-center rounded-[20px]">

                    <svg id="successAnimation" class="animated mb-5" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                        <path id="successAnimationResult" fill="#D8D8D8" d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z" />
                        <circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#979797" stroke-width="2" stroke-linecap="round" fill="transparent" />
                        <polyline id="successAnimationCheck" stroke="#979797" stroke-width="2" points="23 34 34 43 47 27" fill="transparent" />
                    </svg>

                    <Fade cascade>
                    <h3 className="font-black text-center text-3xl text-white mb-10">Your ethereum are send<br />white success</h3>

                    <button
                        onClick={() => close()}
                        className="py-3 px-5 success-transaction-gradient font-black text-white"
                    >
                        Show gif transaction
                    </button>
                    </Fade>
                </div>
            </Fade>

        </div>
    )
};

export default TransactionSuccess;