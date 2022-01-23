import React, { useContext } from "react";

///import { useWindowSize } from 'react-use'
import Fade from 'react-reveal'

import ethLogo from '../../images/eth.png'
import logoCard from '../../images/logoCard.png'

import ShortAddress from "../utils/ShortAddress";
import { TransactionContext } from "../context/TransactionContext";
import TransactionSuccess from "../components/TransactionSuccess"


const Input = ({ type = 'text', name, placeholder, value, handleChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            step="0.0001"
            value={value}
            onChange={(e) => handleChange(e, name)}
            className="my-2 w-full rounded-[10px] p-4 outline-none bg-[#0B111C] text-white border-none text-sm"
        />
    )
}


const SendCrypto = () => {

    const { connectWallet, currentAccount, handleChange, sendTransaction, closeSuccessPage, transactionSuccess } = useContext(TransactionContext)

    return (
        <div className="lg:p-5 w-[100vw] flex items-center justify-around lg:flex-row flex-col lg:items-start">
            {transactionSuccess &&
                (
                    <TransactionSuccess handler={closeSuccessPage} />
                )
            }

            <Fade cascade>
            <div className="p-10 lg:sticky top-40">
                <div>
                    <h1 className="w-full text-center lg:text-left whitespace-nowrap mb-5 bg-transparent text-gradient sm:text-5xl text-4xl font-black uppercase">Send crypto, <br /> across the world</h1>
                </div>

                <p className="text-white text-xl text-center lg:text-left font-bold mb-10">Explore the crypto world. Buy and sell<br /> cryptocurrencies easily on Rabby.</p>

                <div>
                    <button
                        onClick={connectWallet}
                        className="gradient-button w-fit mx-auto lg:mx-0 font-bold rounded-[15px] p-4"
                    >
                        <span className="gradient-button-span">Connect Wallet</span>
                    </button>
                </div>

            </div>
            </Fade>

            <div className="p-10" >
                <Fade bottom>
                    <div className="rounded-[20px] mx-auto p-5 mb-20 eth-card min-h-[170px] sm:min-h-[250px] max-w-[400px] sm:max-w-[500px] flex flex-col justify-between">
                        <div className="flex w-full justify-between  mb-30">
                            <img src={ethLogo} alt="etherum logo" className="w-16" />
                            <img src={logoCard} alt="Rabby logo" className="h-[28px] mt-[15px]" />
                        </div>
                        <div>
                            <p className="text-white">{currentAccount ? <ShortAddress address={currentAccount} /> : "Adress"}</p>
                            <p className="text-white font-bold text-xl">Ethereum</p>
                        </div>
                    </div>

                    <div className="blue-glassmorphism p-10 rounded-[15px] sm:max-w-[500px] blue-glassmorphism">
                        <Input name="addressTo" placeholder="Address To..." handleChange={handleChange} />
                        <Input name="amount" placeholder="Amount (ETH)..." type="number" handleChange={handleChange} />
                        <Input name="keyword" placeholder="Keyword (Gif)..." handleChange={handleChange} />
                        <Input name="message" placeholder="Enter Message..." handleChange={handleChange} />
                        <div className="h-[1px] w-[90%] bg-white my-10 mx-auto"></div>
                        <button
                            type="button"
                            onClick={sendTransaction}
                            className="w-full py-4 text-white transition duration-300 hover:bg-white hover:text-black  font-bold border rounded-[10px]"
                        >
                            Send Now
                        </button>
                    </div>
                </Fade>

            </div>
        </div>
    );
}

export default SendCrypto