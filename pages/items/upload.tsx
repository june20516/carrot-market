import type { NextPage } from 'next';
import Layout from '../../components/Layout';

const Upload: NextPage = () => {
  return (
    <Layout title="Upload Item" hasTabBar={true} canGoBack={true}>
      <div className="pt-5 px-5">
        <div>
          <label
            className="h-36 flex justify-center items-center cursor-pointer text-gray-500 border-2 border-dashed border-gray-300 rounded-md hover:border-purple-300 hover:text-purple-500"
            htmlFor="product_img"
          >
            <svg className="h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input type="file" id="product_img" name="product_img" className="hidden" />
          </label>
        </div>
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
          Upload product
        </button>
      </div>
    </Layout>
  );
};

export default Upload;
