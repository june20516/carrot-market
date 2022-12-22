import { klassName } from 'libs/client/utils';
import { TextInputProps } from './props';

const TextInput = function ({ name, type, value, label, klass, disabled, register }: TextInputProps) {
  return (
    <>
      {label ? (
        <label htmlFor={name} className="block mb-1 text-sm text-gray-600">
          {label}
        </label>
      ) : null}
      <div className="flex items-center">
        <input
          type={type}
          id={name}
          value={value}
          className={klassName(
            'appearance-none pl-5 pr-14 w-full border border-gray-300 placeholder:text-gray-400 shadow-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400',
            klass || ''
          )}
          {...register}
          disabled={disabled}
        />
      </div>
    </>
  );
};

export default TextInput;
