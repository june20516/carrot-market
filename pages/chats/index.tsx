import { NextPage } from 'next';
import Layout from 'components/Layout';
import ListItem from './components/listItem';

const Chats: NextPage = () => {
  return (
    <Layout title="Chats" hasTabBar={true} canGoBack={true}>
      <div className="px-5 divide-y">
        {Array.from(Array(10).keys()).map(i => {
          return (
            <ListItem
              key={i}
              id={i.toString()}
              userName="Steve Jebs"
              lastMessage="Yep! Let's see tommorw 2 pm!"
              unreadCount={1}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Chats;
