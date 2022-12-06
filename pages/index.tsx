import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-200 py-20 px-10 grid gap-10">
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <span className="inline-block font-bold text-lg pb-2">Select Item</span>
        <div className="flex justify-between text-slate-400 pt-2">
          <span> Gray Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between text-slate-400 pt-2">
          <span>Tooly Table</span>
          <span className="font-semibold">$80</span>
        </div>
        <div className=" border-b-2 border-dashed pt-2" />
        <div className="flex justify-between text-black font-bold pt-2">
          <span>Total</span>
          <span>$99</span>
        </div>
        <div className="mx-auto max-w-lg min-w-min p-3 text-center bg-blue-500 rounded-xl text-white">Checkout</div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
    </div>
  );
};

export default Home;
