import type { NextPage } from 'next';
import FloatingButton from 'components/floatingButton';
import Layout from 'components/Layout';
import ListItem from './components/listItem';

const Community: NextPage = () => {
  return (
    <Layout title="Community" canGoBack={true} hasTabBar={true}>
      <div className="pt-6 px-5 space-y-6 relative">
        {Array.from(Array(10).keys()).map(i => {
          return (
            <ListItem
              key={i}
              id={i.toString()}
              tag="동네질문"
              content="What is the best mandu restaurant?"
              userName="니꼬"
              time="18시간 전"
              emphathyCount={1}
              answerCount={1}
            />
          );
        })}
        <FloatingButton href={'/community/write'}>
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
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Community;
