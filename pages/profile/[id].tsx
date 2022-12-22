import { NextPage } from 'next';
import { useState } from 'react';
import Layout from 'components/Layout';
import ProfileBar from 'components/profileBar';
import { klassName } from 'libs/client/utils';
import ListItem from '../items/components/listItem';
import Review from './components/review';

const Profile: NextPage = id => {
  const [tab, setTab] = useState<'sold' | 'review'>('sold');

  const onClickSold = () => setTab('sold');
  const onClickReview = () => setTab('review');

  return (
    <Layout title="Profile" canGoBack={true} hasTabBar={true}>
      <div className="pt-3 px-4">
        <div>
          <ProfileBar userId={id.toString()} userName="Steve Jebs" linkDisable={true} />
        </div>
        <div className="flex justify-around items-center py-5 border-b shadow-sm">
          <div className="space-y-2">
            <button
              className={klassName(
                'w-16 aspect-square flex justify-center items-center rounded-full',
                tab === 'sold' ? 'bg-purple-600 text-white' : 'bg-gray-100 hover:text-purple-500'
              )}
              onClick={onClickSold}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </button>
            <span className="flex justify-center text-sm text-gray-500">판매내역</span>
          </div>
          <div className="space-y-2">
            <button
              className={klassName(
                'w-16 aspect-square flex justify-center items-center rounded-full',
                tab === 'review' ? 'bg-purple-600 text-white' : 'bg-gray-100 hover:text-purple-500'
              )}
              onClick={onClickReview}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>
            </button>
            <span className="flex justify-center text-sm text-gray-500">리뷰</span>
          </div>
        </div>
        {tab === 'sold' ? (
          <div className="divide-y h-[68vh] overflow-y-scroll">
            {Array.from(Array(10).keys()).map(i => {
              return (
                <ListItem
                  key={i}
                  id={i.toString()}
                  image="image"
                  name="Apple Iphone24 Pro"
                  option="Blackhole Black"
                  price="$ 230,000"
                  commentCount={1}
                  loveCount={1}
                />
              );
            })}
          </div>
        ) : (
          <div className="pt-2 space-y-4 divide-y h-[68vh] overflow-y-scroll">
            {Array.from(Array(5).keys()).map(i => {
              return (
                <Review user={{ userId: i.toString(), userName: 'Steve Jebs' }} score={i + 1}>
                  <p>
                    Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit
                    while I&apos;m in a transitional period so I don&apos;t wanna kill you, I wanna help you. But I
                    can&apos;t give you this case, it don&apos;t belong to me. Besides, I&apos;ve already been through
                    too much shit this morning over this case to hand it over to your dumb ass.
                  </p>
                </Review>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
