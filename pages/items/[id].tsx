import type { NextPage } from 'next';
import LargeButton from '../../components/largeButton';
import Layout from '../../components/Layout';
import ProfileBar from '../../components/profileBar';
import Item from '../../types/Item';
import CardItemList from './components/cardItemList';

const ItemDetail: NextPage = () => {
  const relatedItems: Item[] = Array.from(Array(10).keys()).map(i => {
    return {
      id: i.toString(),
      name: 'Galaxy S60',
      option: 'Air white',
      image: 'image',
      price: '$140',
      loveCount: 100,
      commentCount: 20,
    };
  });

  return (
    <Layout title="Items Detail" hasTabBar={true} canGoBack={true}>
      <div className="p-5">
        <div>
          <div className="w-full aspect-square bg-slate-300" />
          <ProfileBar userId="1" userName="Steve Jebs" />
          <div className="py-3">
            <h1 className="py-2 text-4xl font-bold">Galaxy S50</h1>
            <p className="py-2 text-3xl">$140</p>
            <p className="text-base py-2 mb-5">
              My money&apos;s in that office, right? If she start giving me some bullshit about it ain&apos;t there, and
              we got to go someplace else and get it, I&apos;m gonna shoot you in the head then and there. Then I&apos;m
              gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey,
              look at me when I&apos;m talking to you, motherfucker. You listen: we go in there, and that ni**a Winston
              or anybody else is in there, you the first motherfucker to get shot. You understand?
            </p>
            <div className="flex space-x-2">
              <LargeButton klass="h-12">Talk To Seller</LargeButton>
              <button className="w-1/10 rounded-md flex justify-center items-center text-2xl text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:text-red-600">
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
          </div>
        </div>
        <div className="w-full border-b my-3" />
        <div className="mt-5">
          <h2 className="mb-5 text-2xl font-bold">Similar items</h2>
          <CardItemList itemList={relatedItems} />
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
