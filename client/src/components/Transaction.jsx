import React, { useContext } from "react";

import { TransactionContext } from '../context/TransactionContext'

import useFetch from "../hooks/useFetch";
import ShortAddress from "../utils/ShortAddress";

const TransactionCard = ({addressFrom, addressTo, timestamp, keyword, message, amount, url}) => {

    const giftURL = useFetch({keyword})

    return (
        <div className="text-white p-5 rounded-[10px] flex flex-col items-center white-glassmorphism">
            <div className="flex w-full justify-between mb-5">
                <p>{timestamp}</p>
                <p className="font-bold">{`${amount} ETH`}</p>
            </div>
            <div className="flex w-full justify-between mb-5">
                <a href={`https://ropsten.etherscan.io/address/${addressFrom}`}><p className="font-bold">From : </p><ShortAddress address={addressFrom}/></a>
                <a href={`https://ropsten.etherscan.io/address/${addressTo}`}><p className="font-bold">To : </p><ShortAddress address={addressTo}/></a>
            </div>

            <div className="w-[200px] h-[200px] rounded-[10px] overflow-hidden flex justify-center">
                <img src={giftURL ? giftURL : "https://media0.giphy.com/media/14uQ3cOFteDaU/giphy.gif?cid=ecf05e47znhto2gvi7ubh7xv96pebg5j5zq7pdixiun5m50z&rid=giphy.gif&ct=g"} alt="gif" className="h-full max-w-fit"  />
            </div>

            <p className="mt-5">{message && `Message : ${message}`}</p>
        </div>

    );
};

const Transaction = () => {

    const { transactions, currentAccount } = useContext(TransactionContext);

    console.log(transactions);

    return (
        <section className="w-[100vw]">
            <h2 className="text-center text-white text-5xl font-black">All your transaction, enjoy !</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:p-20 p-3 gap-5">
                {[...transactions].reverse().map((transaction, key) => (
                    <TransactionCard key={key} {...transaction} />
                ))}
            </div>
        </section>
    );
};

export default Transaction;