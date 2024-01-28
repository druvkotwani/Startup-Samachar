import EachCard from "../components/Card";

export default function Home() {
  return (

    <div className="min-h-screen flex flex-col mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 py-4 ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <EachCard src='inc42' heading='BNP Paribas On Block Deal Spree, Sells Shares Of Paytm & Policybazaar' by='Team Inc42' read={3} img='https://inc42.com/wp-content/uploads/2024/01/bn-zomato-featured--490x367.png' />
          <EachCard src='yourstory' heading='Binny Bansal exits Walmart-owned Flipkart to focus on his new startup' by='Debolina Biswas' read={3} img='https://images.yourstory.com/cs/wordpress/2018/11/binny-1.jpg?fm=auto&ar=2:1&mode=crop&crop=faces' />
        </div>
      </div>
    </div>
  );
}
