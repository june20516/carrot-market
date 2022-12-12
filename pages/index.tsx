import { NextPage } from 'next';
import Layout from '../components/Layout/index';
import ListItem from './items/components/listItem';

const Home: NextPage = () => {
  return (
    <Layout title="Home" canGoBack={true} hasTabBar={true}>
      <div className="divide-y">
        {Array.from(Array(10).keys()).map(i => {
          return (
            <ListItem
              key={i}
              id={i.toString()}
              image="image"
              name="New Iphone 20 Pro"
              option="Blackhole Black"
              price="$23,000"
              loveCount={1}
              commentCount={1}
            />
          );
        })}
      </div>
      <button className="w-12 aspect-square flex justify-center items-center fixed bottom-16 right-5 z-10 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-xl">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </Layout>
  );
};

export default Home;
