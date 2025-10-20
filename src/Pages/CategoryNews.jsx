import { set } from 'date-fns/fp';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    // console.log(id)
    const data = useLoaderData();
    // console.log(id,data)
    const [categoryNews,setCategoryNews] = useState([]);


    useEffect(()=>{
        if(id == "0"){
            setCategoryNews(data);
            return;
        }else if(id == "1"){
             const filterNews = data.filter(news=> news.others.is_today_pick == true);
             setCategoryNews(filterNews);
             
        }else{
            const filterNews = data.filter(news=> news.category_id == id)
            // console.log(filterNews);
            setCategoryNews(filterNews)
        }
    },[data,id])

    return (
        <div className='mb-5'>
            <p className='font-bold'> Total <span className='text-red-600'>{categoryNews.length} </span>news found</p>
            <div className='grid grid-cols-1 gap-5 mt-5'>
                {
                    categoryNews.map(news =>
                        <NewsCard key={news.id}  news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;