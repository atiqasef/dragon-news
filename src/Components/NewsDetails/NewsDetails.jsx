import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import RightAside from '../RightAside/RightAside'
import { useLoaderData, useParams } from 'react-router'
import NewsDetailsCard from './NewsDetailsCard';

export default function NewsDetails() {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});
    useEffect(()=>{
        const newsDetails = data.find((singleNews)=> singleNews.id==id);
        setNews(newsDetails);
    },[data,id])
    return (
        <div className='mt-5 w-10/12 mx-auto'>
            <Navbar></Navbar>
            <section className='grid grid-cols-12 gap-5'>
                <div className="news-details col-span-9">
                <NewsDetailsCard news={news}></NewsDetailsCard>
                </div>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </section>
        </div>
    )
}
