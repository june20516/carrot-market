import Link from 'next/link';

interface ProfileBarProps {
  userId: string;
  userName: string;
  userImage?: string;
  linkDisable?: boolean;
}

const ProfileBar = function ({ userId, userName, userImage, linkDisable }: ProfileBarProps) {
  return (
    <div className="py-4 flex space-x-5 border-b mb-3">
      <div className="bg-slate-300 w-12 aspect-square rounded-full items-center">{userImage}</div>
      <div className="flex flex-col justify-center">
        <p className="font-medium">{userName}</p>
        {linkDisable ? null : (
          <Link className="text-sm text-gray-400 hover:text-gray-600" href={`/profile/${userId}`}>
            View profile &rarr;
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProfileBar;
