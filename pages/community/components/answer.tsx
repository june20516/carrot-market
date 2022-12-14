import User from '../../../types/user';

interface AnswerProps {
  id: string;
  user: User;
  answer: string;
  time: string;
}

const Answer = function ({ id, user, answer, time }: AnswerProps) {
  return (
    <div className="border-t border-gray-200">
      <div className="flex items-start space-x-2 p-2 pl-0">
        <div className="bg-slate-300 w-10 aspect-square rounded-full" />
        <div className="flex flex-col">
          <span className="font-medium text-gray-800">{user.name}</span>
          <span className="text-xs text-gray-400">{time}</span>
          <p className="text-gray-700">{answer}</p>
        </div>
      </div>
    </div>
  );
};
export default Answer;
