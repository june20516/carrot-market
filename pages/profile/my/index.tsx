import { NextPage } from 'next';
import Link from 'next/link';
import Layout from 'components/Layout';
import ProfileBar from 'components/profileBar';
import Review from 'components/review';

const MyProfile: NextPage = () => {
  return (
    <Layout title="My profile" canGoBack={true} hasTabBar={true}>
      <div className="py-3 px-4">
        <div>
          <ProfileBar userId="1" userName="Steve Jebs" linkDisable={true} />
        </div>
        <div className="flex justify-around items-center pb-3">
          <div className="space-y-2">
            <Link
              className="w-16 aspect-square bg-purple-600 text-white flex justify-center items-center rounded-full"
              href="/profile/my/sold"
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
            </Link>
            <span className="flex justify-center text-sm text-gray-500">판매내역</span>
          </div>
          <div className="space-y-2">
            <Link
              className="w-16 aspect-square bg-purple-600 text-white flex justify-center items-center rounded-full"
              href="/profile/my/bought"
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                ></path>
              </svg>
            </Link>
            <span className="flex justify-center text-sm text-gray-500">구매내역</span>
          </div>
          <div className="space-y-2">
            <Link
              className="w-16 aspect-square bg-purple-600 text-white flex justify-center items-center rounded-full"
              href="/profile/my/interested"
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </Link>
            <span className="flex justify-center text-sm text-gray-500">관심목록</span>
          </div>
        </div>
        <div className="pt-2 space-y-4 divide-y h-[68vh] overflow-y-scroll">
          {Array.from(Array(5).keys()).map(i => {
            return (
              <Review user={{ userId: i.toString(), userName: 'Steve Jebs' }} score={i + 1}>
                <p>
                  Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit
                  while I&apos;m in a transitional period so I don&apos;t wanna kill you, I wanna help you. But I
                  can&apos;t give you this case, it don&apos;t belong to me. Besides, I&apos;ve already been through too
                  much shit this morning over this case to hand it over to your dumb ass.
                </p>
              </Review>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default MyProfile;
