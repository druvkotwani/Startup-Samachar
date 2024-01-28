import EachCard from "../components/Card";

export default function Home() {
  return (

    <div className="min-h-screen flex flex-col mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 py-4 ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <EachCard />
        </div>
      </div>
    </div>
  );
}
