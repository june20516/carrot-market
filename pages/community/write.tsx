import type { NextPage } from 'next';
import Layout from '../../components/Layout';

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
        <textarea
          className="mt-1 shadow-sm w-full focus:ring-purple-500 rounded-md border-gray-300 focus:border-purple-500 "
          rows={4}
          placeholder="Ask a question!"
        />
        <button className="mt-2 w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none ">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Write;
