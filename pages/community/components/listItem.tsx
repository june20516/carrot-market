import { NextPage } from 'next';
import Link from 'next/link';

interface Article {
  id: string;
  tag: string;
  content: string;
  time: string;
  userName: string;
  emphathyCount: number;
  answerCount: number;
}
const ListItem = function ({ id, tag, content, userName, time, emphathyCount, answerCount }: Article) {
  return (
    <Link className="flex flex-col items-start shadow-xs" href={`/community/${id}`}>
      <span className="flex items-center py-0.5 px-2 text-xs font-medium text-gray-500 bg-gray-100 rounded-full">
        {tag}
      </span>
      <span className="cursor-pointer py-3 text-gray-700">
        <span className="text-purple-700 text-lg font-medium">Q.</span>
        {content}
      </span>
      <div className="py-3 w-full flex items-center justify-between text-sm text-gray-500 border-b border-gray-200 ">
        <span>{userName}</span>
        <span>{time}</span>
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
          <span>궁금해요 {emphathyCount}</span>
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
          <span>답변 {answerCount}</span>
        </span>
      </div>
    </Link>
  );
};

export default ListItem;
