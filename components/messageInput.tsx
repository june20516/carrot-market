import { klassName } from 'libs/client/utils';

interface MessageInputProps {
  klass?: string;
}

const MessageInput = function ({ klass }: MessageInputProps) {
  return (
    <div className="flex items-center bg-white">
      <input
        type="text"
        className={klassName(
          'flex items-center w-full rounded-full m-3 ml-0 border border-gray-400 focus:ring-purple-500 focus:ring-2 focus:border-transparent pl-4 pr-14',
          klass || ''
        )}
      />
      <div className="-ml-[3.25rem] bg-purple-500 rounded-full text-white text-sm py-1.5 px-2.5 hover:bg-purple-600">
        <button>&rarr;</button>
      </div>
    </div>
  );
};

export default MessageInput;
