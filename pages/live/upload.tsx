import type { NextPage } from 'next';

const Upload: NextPage = () => {
  return (
    <div className="py-16 px-5">
      <div className="pt-6">
        <label htmlFor="name" className="block mb-1 text-sm text-gray-600">
          Name
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="name"
            className="appearance-none pl-5 pr-14 w-full border border-gray-300 placeholder:text-gray-400 shadow-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400"
          />
        </div>
      </div>
      <div className="py-6">
        <label htmlFor="price" className="block mb-1 text-sm text-gray-600">
          Price
        </label>
        <div className="flex items-center relative">
          <span className="absolute ml-2 text-sm text-gray-400 pointer-events-none">$</span>
          <input
            type="text"
            id="price"
            className="appearance-none pl-5 pr-14 w-full border border-gray-300 placeholder:text-gray-400 shadow-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400"
            placeholder="0.00"
          />
          <span className="absolute right-0 pr-3 text-gray-400 pointer-events-none">USD</span>
        </div>
      </div>
      <div>
        <label htmlFor="description" className="block mb-1 text-sm text-gray-600">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          rows={4}
          className="appearance-none pl-5 pr-14 w-full border border-gray-300 placeholder:text-gray-400 shadow-sm rounded-md focus:outline-none focus-ring1 focus:ring-purple-400 focus:border-purple-400 resize-none"
        />
      </div>
      <button className="appearance-none w-full h-10 my-5 border border-transparent bg-purple-500 text-white focus:bg-purple-600 focus:outline-none hover:bg-opacity-90 rounded-md shadow-sm text-sm font-medium transition-colors">
        Start Live
      </button>
    </div>
  );
};

export default Upload;
