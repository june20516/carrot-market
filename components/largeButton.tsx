import { klassName } from 'libs/client/utils';

interface ButtonProps {
  children: React.ReactNode;
  klass?: string;
  onClick?: React.MouseEventHandler;
  [key: string]: any;
}

const LargeButton = function ({ children, klass, onClick = () => {}, ...rest }: ButtonProps) {
  return (
    <button
      className={klassName(
        'appearance-none w-full h-10 my-1 border border-transparent bg-purple-500 text-white focus:bg-purple-600 focus:outline-none hover:bg-opacity-90 rounded-md shadow-sm text-sm font-medium transition-colors',
        klass || ''
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default LargeButton;
