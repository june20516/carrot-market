import type { NextPage } from 'next';
import LargeButton from '../../components/largeButton';
import Layout from '../../components/Layout';
import ProfileBar from '../../components/profileBar';
import TextArea from '../../components/textArea';
import User from '../../types/user';
import Answer from './components/answer';

const CommunityPostDetail: NextPage = () => {
  const answers: { id: string; user: User; answer: string; time: string }[] = Array.from(Array(10).keys()).map(i => {
    return {
      id: i.toString(),
      user: { id: i.toString(), name: 'Steve Jebs' },
      answer: 'The best mandu restaurant is the one next to my house.',
      time: '2시간 전',
    };
  });
  return (
    <Layout title="Community Detail" hasTabBar={true} canGoBack={true}>
      <div className="px-5">
        <ProfileBar userId="1" userName="Steve Jebs" />
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
        {answers.map(answer => {
          return <Answer id={answer.id} user={answer.user} answer={answer.answer} time={answer.time} />;
        })}
        <div className="mt-4">
          <TextArea name="answer" />
          <LargeButton>Reply</LargeButton>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
