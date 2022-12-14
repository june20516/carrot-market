import { NextPage } from 'next';
import Bubble from '../../components/bubble';
import LargeButton from '../../components/largeButton';
import Layout from '../../components/Layout';
import MessageInput from '../../components/messageInput';

const LiveDetail: NextPage = () => {
  return (
    <Layout title="Live Detail" canGoBack={true} hasTabBar={true}>
      <div className="py-4 px-4 relative">
        <div className="fixed top-16 h-[32vh] w-full max-w-lg mx-auto inset-0 px-4 bg-white">
          <div className="w-full bg-slate-400 aspect-video rounded-md" />
          <h3 className="text-2xl font-medium text-gray-700">Let's Show</h3>
        </div>
        <div className="py-2.5 mt-[30.5vh]">
          <h1 className="py-2 text-4xl font-bold">Galaxy S50</h1>
          <p className="py-0.5 text-3xl">$140</p>
          <p className="text-base py-1.5">
            My money&apos;s in that office, right? If she start giving me some bullshit about it ain&apos;t there, and
            we got to go someplace else and get it, I&apos;m gonna shoot you in the head then and there. Then I&apos;m
            gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look
            at me when I&apos;m talking to you, motherfucker. You listen: we go in there, and that ni**a Winston or
            anybody else is in there, you the first motherfucker to get shot. You understand?
          </p>
        </div>
        <div className="flex space-x-2 mb-4">
          <LargeButton klass="h-12">Talk To Seller</LargeButton>{' '}
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
        <div className="h-[35.5vh] pb-12">
          <div className="space-y-3 py-2 bg-purple-100 h-full overflow-y-scroll">
            {Array.from(Array(10).keys()).map(i => {
              return (
                <>
                  <Bubble userImage="1" userId="1">
                    Hi how much are you selling them for?
                  </Bubble>
                  <Bubble userImage="2" userId="2" isMe={true}>
                    I want ￦20,000
                  </Bubble>
                  <Bubble userImage="1" userId="1">
                    미쳤어
                  </Bubble>
                  <Bubble userImage="2" userId="2" isMe={true}>
                    Ok, It's kidding. Let me ask again.
                  </Bubble>
                </>
              );
            })}
          </div>
          <div className="w-full mx-auto mx-w-md inset-x-0 px-5">
            <MessageInput />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LiveDetail;
