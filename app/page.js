"use client";

import { useEffect, useState } from "react";
import EachCard from "../components/Card";
import SkeletonComponent from "../components/Skeleton";

export default function Home() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://startup-samachar-api.vercel.app/news')
      .then(res => res.json())
      .then(data => {
        // Shuffle the data array
        const shuffledData = data.sort(() => Math.random() - 0.5);
        setNews(shuffledData);
        setLoading(false)
      });
  }, [])

  return (
    <>

      <div className="min-h-screen flex flex-col mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 gap-6 py-4 ">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {
              loading ? <>
                {Array.from({ length: 12 }).map((_, index) => {
                  return <SkeletonComponent key={index} />
                })}
              </>
                :
                news.map((function (item, index) {
                  return <EachCard key={index} heading={item.title} source={item.source} imgSrc={item.imgSrc} href={item.href} />
                }))
            }

            {/* <EachCard src='inc42' heading='BNP Paribas On Block Deal Spree, Sells Shares Of Paytm & Policybazaar' by='Team Inc42' img='https://inc42.com/wp-content/uploads/2024/01/bn-zomato-featured--490x367.png' /> */}
          </div>
        </div>
      </div>
    </>
  );
}
