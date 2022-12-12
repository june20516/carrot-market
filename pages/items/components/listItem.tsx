import Link from 'next/link';

interface Item {
  id: string;
  name: string;
  option: string;
  image: string;
  price: string;
  loveCount: number;
  commentCount: number;
}
const ListItem = function ({ id, name, option, image, price, loveCount, commentCount }: Item) {
  return (
    <Link key={id} className="grid gap-1 grid-cols-10 p-5 cursor-pointer" href={`/items/${id}`}>
      <div className="col-span-2">
        <span className="flex justify-center items-center w-full aspect-square bg-slate-400 text-white rounded-md">
          {image}
        </span>
      </div>
      <div className="col-span-6 flex flex-col mx-4">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-gray-400">{option}</div>
        <div className="font-medium text-lg mt-auto">{price}</div>
      </div>
      <div className="col-span-2 flex items-end justify-end space-x-3 text-gray-500">
        <div className="flex justify-between items-center space-x-1">
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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
          <span>{loveCount}</span>
        </div>
        <div className="flex justify-between items-center space-x-1">
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
          <span>{commentCount}</span>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
