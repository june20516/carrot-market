import type { NextPage } from 'next';
import PriceInput from '../../components/input/priceInput';
import TextInput from '../../components/input/textInput';
import LargeButton from '../../components/largeButton';
import Layout from '../../components/Layout';
import TextArea from '../../components/textArea';

const Upload: NextPage = () => {
  return (
    <Layout title="Start Live" canGoBack={true} hasTabBar={true}>
      <div className="py-2 px-5 space-y-3">
        <div className="pt-3">
          <TextInput type="text" name="title" label="Title" />
        </div>
        <div>
          <TextInput type="text" name="item" label="Item name" />
        </div>
        <div>
          <PriceInput type="price" name="price" label="Price" currency="USD" symbol={'$'} arrow={false} />
        </div>
        <TextArea label="Description" name="description" />
        <LargeButton>Start Live</LargeButton>
      </div>
    </Layout>
  );
};

export default Upload;
