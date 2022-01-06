import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div
          className="mt-5 bg-blue-500 text-white p-3
          text-center rounded-xl w-2/4 mx-auto
         "
        >
          Checkout
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
    </div>
  );
};

export default Home;
