import { NextPage } from 'next';
import Layout from '../../components/Layout';

const Chats: NextPage = () => {
  return (
    <Layout title="Chats" hasTabBar={true} canGoBack={true}>
      <div className="px-5 divide-y">
        {Array.from(Array(10)).map(i => {
          return (
            <div key={i} className="py-3 flex justify-between space-x-5 items-center cursor-pointer">
              <div className="bg-slate-300 w-16 aspect-square rounded-full items-center" />
              <div className="flex flex-col justify-center w-full">
                <p className="font-medium">Steve Jebs</p>
                <p className="text-sm text-gray-400">Yep! Let's see tommorw 2 pm!</p>
              </div>
              <span className="flex justify-center items-center h-4 px-3 aspect-square bg-purple-600 text-white text-xs rounded-2xl">
                1
              </span>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Chats;
