import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import NewsCard from '../NewsCard/NewsCard';

export default function CategoryNews() {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([])
    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data);
            
        }
        else if (id == "1") {
            const filterdNews = data.filter((news) => news.others.is_today_pick === true);
            setCategoryNews(filterdNews);
        }
        else {
            const filterdNews = data.filter((news) => news.category_id == id);
            setCategoryNews(filterdNews);
        }
    }, [data, id])
    return (
        <div>
            <h2 className='mb-6'>Total <span className='text-secondary'>{categoryNews.length}</span> news found</h2>
            <div>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    )
}
