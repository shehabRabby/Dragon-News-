import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RightAside from "../HomeLayout/RightAside";
import NewsDetailsCard from "../Components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news,setNews] = useState({});
    // console.log(data,id,news)

    useEffect(()=>{
        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails);
    },[data,id])

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-6">
        <section className="col-span-9">
          <h2 className="font-bold my-5 mb-10 text-center">Dragon News Details</h2>
          <NewsDetailsCard news ={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
