import { NextPage } from 'next';

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
          <label htmlFor="email" className="text-sm pb-1 text-gray-400">
            Email Address
          </label>
          <div className="flex">
            <input
              id="email"
              type="email"
              name="email"
              className="appearance-none px-3 w-full border border-gray-300 placeholder:text-gray-400 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
              required
            />
          </div>
          <label htmlFor="phone" className="text-sm pb-1 text-gray-400">
            Phone Number
          </label>
          <div className="flex focus-within:ring-2 focus-within:ring-purple-400  rounded-md group">
            <span className="flex items-center justify-center p-2 border border-r-0 border-gray-300 group-focus-within:border-purple-400 shadow-sm rounded-l-md bg-gray-100 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id="phone"
              type="number"
              name="phone"
              className="outline-none px-3 w-full border border-gray-300 placeholder:text-gray-400 shadow-sm rounded-r-md border-l-0 arrow-none focus:border-purple-400 focus:ring-transparent"
              required
            />
          </div>
          <button className="appearance-none w-full h-10 my-5 border border-transparent bg-purple-500 text-white focus:bg-purple-600 focus:outline-none hover:bg-opacity-90 rounded-md shadow-sm text-sm font-medium transition-colors">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
