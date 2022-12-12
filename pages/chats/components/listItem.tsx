import { NextPage } from 'next';
import Link from 'next/link';

interface Chat {
  id: string;
  userName: string;
  lastMessage: string;
  userImage?: string;
  unreadCount: number;
}
const ListItem = function ({ id, userName, lastMessage, userImage, unreadCount }: Chat) {
  return (
    <Link className="py-3 flex justify-between space-x-5 items-center cursor-pointer" href={`/chats/${id}`}>
      <div className="bg-slate-300 w-16 aspect-square rounded-full items-center" />
      <div className="flex flex-col justify-center w-full">
        <p className="font-medium">{userName}</p>
        <p className="text-sm text-gray-400">{lastMessage}</p>
      </div>
      <span className="flex justify-center items-center h-4 px-3 aspect-square bg-purple-600 text-white text-xs rounded-2xl">
        {unreadCount}
      </span>
    </Link>
  );
};

export default ListItem;
