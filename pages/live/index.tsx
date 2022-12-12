import { NextPage } from 'next';

const Live: NextPage = () => {
  return (
    <div className="py-14 px-4 space-y-5 divide-y-2">
      {Array.from(Array(10)).map(i => {
        return (
          <div className="pt-4">
            <div className="w-full bg-slate-400 aspect-video rounded-md" />
            <h3 className="mt-3 text-lg font-medium text-gray-700">Let's Show</h3>
          </div>
        );
      })}
      <button className="w-12 aspect-square flex justify-center items-center fixed bottom-5 right-5 z-10 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-xl border-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Live;
