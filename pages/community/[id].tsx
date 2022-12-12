import type { NextPage } from 'next';
import Layout from '../../components/Layout';

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout title="Community Detail" hasTabBar={true} canGoBack={true}>
      <div className="px-5">
        <div className="py-4 flex space-x-5 border-b mb-3">
          <div className="bg-slate-300 w-12 aspect-square rounded-full items-center" />
          <div className="flex flex-col justify-center">
            <p className="font-medium">Steve Jebs</p>
            <button className="text-sm text-gray-400 hover:text-gray-600">View profile &rarr;</button>
          </div>
        </div>
        <div className="border-b border-gray-200">
          <span className="inline-flex items-center py-0.5 px-2 text-xs font-medium text-gray-500 bg-gray-100 rounded-full">
            동네질문
          </span>
          <span className="flex cursor-pointer py-3 text-gray-700">
            <span className="text-purple-700 text-lg font-medium">Q.</span> What is the best mandu restaurant?
          </span>
        </div>
        <div className="py-3 flex justify-start text-sm text-gray-600 border-b border-gray-200 w-full space-x-3">
          <span className="flex items-center space-x-1 cursor-pointer">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>궁금해요 1</span>
          </span>
          <span className="flex items-center space-x-1 cursor-pointer">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>답변 1</span>
          </span>
        </div>
        {Array.from(Array(10).keys()).map(() => {
          return (
            <div className="border-t border-gray-200">
              <div className="flex items-start space-x-2 p-2 pl-0">
                <div className="bg-slate-300 w-10 aspect-square rounded-full" />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-800">Steve Jebs</span>
                  <span className="text-xs text-gray-400">2시간 전</span>
                  <p className="text-gray-700">The best mandu restaurant is the one next to my house.</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="mt-4">
          <textarea
            name="description"
            id="description"
            rows={4}
            className="appearance-none pl-5 pr-14 w-full border border-gray-300 placeholder:text-gray-400 shadow-sm rounded-md focus:outline-none focus-ring1 focus:ring-purple-400 focus:border-purple-400 resize-none"
          />
          <button className="appearance-none w-full h-10 my-5 border border-transparent bg-purple-500 text-white focus:bg-purple-600 focus:outline-none hover:bg-opacity-90 rounded-md shadow-sm text-sm font-medium transition-colors">
            Reply
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
