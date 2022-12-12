import { NextPage } from 'next';

const LiveDetail: NextPage = () => {
  return (
    <div className="py-14 px-4 relative">
      <div className="fixed top-14 h-[32vh] w-full max-w-lg mx-auto inset-0 px-4 bg-white">
        <div className="w-full bg-slate-400 aspect-video rounded-md" />
        <h3 className="my-3 text-2xl font-medium text-gray-700">Let's Show</h3>
      </div>
      <div className="py-2.5 mt-[32.5vh]">
        <h1 className="py-2 text-4xl font-bold">Galaxy S50</h1>
        <p className="py-0.5 text-3xl">$140</p>
        <p className="text-base py-1.5">
          My money&apos;s in that office, right? If she start giving me some bullshit about it ain&apos;t there, and we
          got to go someplace else and get it, I&apos;m gonna shoot you in the head then and there. Then I&apos;m gonna
          shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me
          when I&apos;m talking to you, motherfucker. You listen: we go in there, and that ni**a Winston or anybody else
          is in there, you the first motherfucker to get shot. You understand?
        </p>
      </div>
      <div className="flex space-x-2 mb-4">
        <button className="w-full h-12 bg-purple-500 rounded-md text-white text-xl hover:bg-purple-600 active:ring-2 ring-purple-600 ring-offset-2">
          Talk to seller
        </button>
        <button className="w-1/12 rounded-md flex justify-center items-center text-2xl text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:text-red-600">
          <svg
            className="h-6 w-6 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <div className="h-[33.5vh]">
        <div className="space-y-3 py-2 bg-purple-100 h-full overflow-y-scroll">
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
        </div>
        <div className="w-full mx-auto mx-w-md inset-x-0 px-5">
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
    </div>
  );
};

export default LiveDetail;
