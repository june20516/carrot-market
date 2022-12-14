import type { NextPage } from 'next';
import LargeButton from '../../components/largeButton';
import Layout from '../../components/Layout';
import TextArea from '../../components/textArea';

const Write: NextPage = () => {
  return (
    <Layout title="Write" canGoBack={true} hasTabBar={true}>
      <form className="px-4 py-4">
        <div className="text-gray-500 mb-2 space-x-2">
          <label htmlFor="category font-medium text-sm">Category : </label>
          <select
            id="cateogry"
            className="appearance-none border-gray-200 focus:ring-0 bg-gray-200 border-none rounded-full text-xs py-1 pr-8"
          >
            {['동네생활', '도움요청', '자랑'].map(cate => {
              return <option>{cate}</option>;
            })}
          </select>
        </div>
        <TextArea name="question" placeholder="Ask a question!" />
        <LargeButton>Submit</LargeButton>
      </form>
    </Layout>
  );
};

export default Write;
