import type { NextPage } from 'next';

const ChatDetail: NextPage = () => {
  return (
    <div className="pt-16 pb-28 px-5 space-y-8 relative">
      {Array.from(Array(10).keys()).map(i => {
        return (
          <>
            <div className="text-gray-700 flex items-center space-x-2">
              <div className="w-10 aspect-square rounded-full bg-slate-400" />
              <div className="bg-gray-200 py-2.5 px-6 rounded-full">Hi how much are you selling them for?</div>
            </div>
            <div className="flex justify-end space-x-2">
              <div className="bg-purple-600 py-2.5 px-6 rounded-full text-white">I want ￦20,000</div>
              <div className="w-10 aspect-square rounded-full bg-slate-400" />
            </div>
            <div className="text-gray-700 flex items-center space-x-2">
              <div className="w-10 aspect-square rounded-full bg-slate-400" />
              <div className="bg-gray-200 py-2.5 px-6 rounded-full">미쳤어</div>
            </div>
            <div className="flex justify-end space-x-2">
              <div className="bg-purple-600 py-2.5 px-6 rounded-full text-white">
                Ok, It's kidding. Let me ask again.
              </div>
              <div className="w-10 aspect-square rounded-full bg-slate-400" />
            </div>
          </>
        );
      })}
      <div className="fixed bottom-0 w-full mx-auto mx-w-md inset-x-0 px-5">
        <div className="flex items-center bg-white">
          <input
            type="text"
            className="flex items-center w-full rounded-full m-3 ml-0 border border-gray-400 focus:ring-purple-500 focus:ring-2 focus:border-transparent pl-4 pr-14"
          />
          <div className="-ml-[3.25rem] bg-purple-500 rounded-full text-white text-sm py-1.5 px-2.5 hover:bg-purple-600">
            <button>&rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
