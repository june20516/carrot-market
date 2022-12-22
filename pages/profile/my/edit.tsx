import { NextPage } from 'next';
import PhoneNumberInput from 'components/input/phoneNumberInput';
import TextInput from 'components/input/textInput';

const EditProfile: NextPage = () => {
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="relative px-4">
        <div className="w-24 aspect-square rounded-full bg-slate-400 ring-4 ring-purple-500" />
        <label
          htmlFor="profile_image"
          className="absolute right-0 -mt-8 bg-purple-500 text-white rounded-full p-2 text-sm cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          <input type="file" id="profile_image" className="hidden" accept="image/*" />
        </label>
      </div>
      <div className="w-full mt-10">
        <form className="p-3">
          <TextInput type="email" name="email" label="Email" />
          <PhoneNumberInput type="phoneNumber" name="phoneNumber" label="Phone Number" />
          <button className="appearance-none w-full h-10 my-5 border border-transparent bg-purple-500 text-white focus:bg-purple-600 focus:outline-none hover:bg-opacity-90 rounded-md shadow-sm text-sm font-medium transition-colors">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
