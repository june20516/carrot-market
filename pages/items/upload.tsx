import type { NextPage } from 'next';
import PriceInput from 'components/input/priceInput';
import TextInput from 'components/input/textInput';
import LargeButton from 'components/largeButton';
import Layout from 'components/Layout';
import TextArea from 'components/textArea';

const Upload: NextPage = () => {
  return (
    <Layout title="Upload Item" hasTabBar={true} canGoBack={true}>
      <div className="py-2 px-5">
        <div className="pt-2">
          <label
            className="h-36 flex justify-center items-center cursor-pointer text-gray-500 border-2 border-dashed border-gray-300 rounded-md hover:border-purple-300 hover:text-purple-500"
            htmlFor="product_img"
          >
            <svg className="h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="file" id="product_img" name="product_img" className="hidden" />
          </label>
        </div>
        <div className="pt-6">
          <TextInput type="text" name="name" label="Name" />
        </div>
        <div className="py-6">
          <PriceInput type="price" name="price" label="Price" currency="USD" symbol={'$'} arrow={false} />
        </div>
        <TextArea label="Description" name="description" />
        <LargeButton>Upload Item</LargeButton>
      </div>
    </Layout>
  );
};

export default Upload;
