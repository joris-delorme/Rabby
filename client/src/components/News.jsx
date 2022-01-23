import React from 'react';
import { useState } from 'react';

import ScrollContainer from 'react-indiana-drag-scroll'

import { Fade } from 'react-reveal';
import openArticle from '../../images/open.png'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const News = () => {

    const { data: cryproNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: 6 });

    if (!cryproNews?.value) return (<p>Loading...</p>)



    console.log(cryproNews);

    return (
        <section className='mt-20'>
            <Fade bottom cascade >
                <h1 className='text-white block font-black text-5xl px-10 text-center w-full'>Get the last news about the crypto<br />currency in real time </h1>
            </Fade>
            <div className={`lg:p-20 p-3 flex-col`}>
                <div className="mr-5">
                    {cryproNews.value.slice(0, 3).map((news, key) => (
                        <article key={key} className="flex justify-between max-w-[100vw] bg-[#fff] items-center rounded-[10px] mb-5">
                            <div className="overflow-hidden h-full w-[220px]">
                                <img className='h-full w-fit rounded-[10px]' src={news?.image?.thumbnail?.contentUrl && news?.image?.thumbnail?.contentUrl} alt="" />
                            </div>
                            <div className="py-10">
                                <h4 className=' lg:px-10 max-w-[420px] font-bold font-[30px] min-w-[300px] sm:min-w-[450px] mb-2'>{news?.name.length > 80 ? `${news?.name.substring(0, 80)}...` : news?.name}</h4>
                                <p className=' lg:px-10 max-w-[420px]' style={{fontSize: 15 + 'px'}}>{news?.description.length > 100 ? `${news?.description.substring(0, 100)}...` : news?.description}</p>
                            </div>
                            <a href={news?.url} target="_blank" className="p-5 transition-delay-300 hover:opacity-50"><img src={openArticle} alt="open button" className='w-[60px]' /></a>
                        </article>
                    ))}
                </div>

                <div className="flex flex-col justify-between">
                    {cryproNews.value.slice(3, 5).map((news, key) => (
                        <article key={key} className="bg-[#fff] items-center rounded-[10px] mb-5">
                            <div className="py-10">
                                <h4 className='text-center px-10 max-w-[420px] font-bold font-[30px] min-w-[300px] sm:min-w-[450px] mb-2'>{news?.name.length > 80 ? `${news?.name.substring(0, 80)}...` : news?.name}</h4>
                                <p className='text-center px-10 max-w-[420px]'>{news?.description.length > 100 ? `${news?.description.substring(0, 100)}...` : news?.description}</p>
                            </div>
                            <a href={news?.url} target="_blank" className="p-5 w-full transition delay-300 hover:opacity-50"><img src={openArticle} alt="open button" className='mx-auto w-[60px]' /></a>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default News;
