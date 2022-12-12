import { NextPage } from 'next';
import { useRouter } from 'next/router';

const BackButton: NextPage = () => {
  const router = useRouter();
  return (
    <button className="text-sm absolute left-2" onClick={() => router.back()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
    </button>
  );
};

export default BackButton;
