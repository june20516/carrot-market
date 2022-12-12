import type { NextPage } from 'next';
import Layout from '../../components/Layout';

const Community: NextPage = () => {
  return (
    <Layout title="Community" canGoBack={true} hasTabBar={true}>
      <div className="pt-6 px-5 space-y-6">
        {Array.from(Array(10).keys()).map(i => {
          return (
            <div key={i} className="flex flex-col items-start shadow-xs">
              <span className="flex items-center py-0.5 px-2 text-xs font-medium text-gray-500 bg-gray-100 rounded-full">
                동네질문
              </span>
              <span className="cursor-pointer py-3 text-gray-700">
                <span className="text-purple-700 text-lg font-medium">Q.</span> What is the best mandu restaurant?
              </span>
              <div className="py-3 w-full flex items-center justify-between text-sm text-gray-500 border-b border-gray-200 ">
                <span>니꼬</span>
                <span>18시간 전</span>
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
            </div>
          );
        })}
        <button className="w-12 aspect-square flex justify-center items-center fixed bottom-5 right-5 z-10 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-xl">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Community;
