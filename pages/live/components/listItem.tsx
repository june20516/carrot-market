import { NextPage } from 'next';
import Link from 'next/link';

interface Live {
  id: string;
  title: string;
  preview: string;
}
const ListItem = function ({ id, title, preview }: Live) {
  return (
    <div key={id} className="pt-4">
      <Link href={`/live/${id}`}>
        <div className="w-full bg-slate-400 aspect-video rounded-md flex items-center justify-center">
          <span className="text-white font-medium">{preview}</span>
        </div>
        <h3 className="mt-3 text-lg font-medium text-gray-700">{title}</h3>
      </Link>
    </div>
  );
};

export default ListItem;
