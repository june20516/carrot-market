interface BubbleProps {
  children: React.ReactNode;
  userImage: string;
  userId: string;
  isMe?: boolean;
  time?: string;
}

const Bubble = function ({ children, userId, userImage, isMe = false, time }: BubbleProps) {
  return (
    <div className={`flex space-x-2 items-center ${isMe ? 'flex-row-reverse space-x-reverse' : ''}`}>
      <div className="w-10 aspect-square rounded-full bg-slate-400" />
      <div className={`${isMe ? 'bg-purple-600 text-white' : 'bg-slate-200 text-gray-700 '} py-2.5 px-6 rounded-full`}>
        {children}
      </div>
    </div>
  );
};

export default Bubble;
