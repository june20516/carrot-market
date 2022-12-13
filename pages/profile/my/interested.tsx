import { NextPage } from 'next';
import Layout from '../../../components/Layout';
import ListItem from '../../items/components/listItem';

const Interested: NextPage = () => {
  return (
    <Layout title="Items Interested" canGoBack={true} hasTabBar={true}>
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
    </Layout>
  );
};

export default Interested;
