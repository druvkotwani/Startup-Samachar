import NavbarComponent from "./components/Navbar/Navbar";
import { useState, useEffect, useMemo } from 'react'
import Card from './components/Card/Card'
import SkeletonComponent from './components/Skeleton/Skeleton'
import { Link } from "@nextui-org/react";
import PromotedCard from "./components/Promoted/PromotedCard";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { firestore } from "./firebase";
export default function App() {

  const options = [
    {
      heading: "Startup Samachar delivers instant access to Indian startup news and articles.",
      imgSrc: "/promoted1.webp",
    },
    {
      heading: "Enjoying our project? Drop a star on our GitHub repo to show your support! This will help others to discover the project. 🌟",
      imgSrc: "/promoted2.webp",
    },
    {
      heading: "Could you please consider dropping a star on our GitHub repository? 👻 ",
      imgSrc: "/promoted3.webp",
    },
    {
      heading: "Could you drop a star on the GitHub repo? It helps a lot! 👋 ",
      imgSrc: "/promoted4.webp",
    },
    {
      heading: "Can you please share this project with your friends and family? ✨  ",
      imgSrc: "/promoted4.webp",
    }
  ];


  const getRandomIndex = () => Math.floor(Math.random() * options.length);
  const random = useMemo(() => getRandomIndex(), []);


  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const getContacts = async () => {
      try {
        const dataCollection = collection(firestore, "startup-samachar");
        const unsubscribe = onSnapshot(dataCollection, (snapshot) => {
          const dataList = snapshot.docs.map((doc) => doc.data());
          setNews(dataList);
          setLoading(false); // Set loading to false once data is fetched
        });
        // Return a cleanup function to unsubscribe from the snapshot listener when the component unmounts
        return () => unsubscribe();
      } catch (error) {
        console.log(error);
        setLoading(false); // Set loading to false in case of an error

      }
    };

    getContacts();
  }, []);


  return (
    <>
      <NavbarComponent />
      <div className="container mx-auto max-w-7xl pt-16 mt-4 px-6 flex-grow ">
        <div className="min-h-screen flex flex-col mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 gap-6 py-4 ">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              <PromotedCard option={options[random]} />

              {
                loading ? <>
                  {Array.from({ length: 12 }).map((_, index) => {
                    return <SkeletonComponent key={index} />
                  })}
                </>
                  :
                  news.map((function (item, index) {
                    return <Card key={index} heading={item.title} source={item.source} imgSrc={item.imgSrc} href={item.href} />
                  }))
              }


              {/* <EachCard src='inc42' heading='BNP Paribas On Block Deal Spree, Sells Shares Of Paytm & Policybazaar' by='Team Inc42' img='https://inc42.com/wp-content/uploads/2024/01/bn-zomato-featured--490x367.png' /> */}
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full flex items-center justify-center py-3 SourceCodePro border-t">
        <span className="text-default-600 ">Made with ❤️ by</span>
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://dhruvkotwani.me"
          title="dhruvkotwani"
        >
          <span>{" "}</span>
          <span className="text-primary">Dhruv Kotwani</span>
        </Link>
      </footer>
    </>
  )
}