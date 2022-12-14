import Link from 'next/link';
import Item from '../../../types/Item';

const CardItem = function ({ id, name, price }: Item) {
  return (
    <Link href={`/items/${id}`}>
      <div className="w-full aspect-square bg-slate-300 mb-3" />
      <h3 className="text-gray-600">{name}</h3>
      <p className="text-gray-900 font-medium">{price}</p>
    </Link>
  );
};

interface CardItemListProps {
  itemList: Item[];
}

const CardItemList = function ({ itemList }: CardItemListProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Array.from(itemList).map((item, i) => (
        <CardItem key={i} {...item} />
      ))}
    </div>
  );
};

export default CardItemList;
