import { klassName } from '../../libs/client/utils';
import { NumberInputProps } from './props';

const PhoneNumberInput = function ({ name, type, value, label, klass, disabled, arrow, register }: NumberInputProps) {
  return (
    <>
      {label ? (
        <label htmlFor={name} className="block mb-1 text-sm text-gray-600">
          {label}
        </label>
      ) : null}
      <div className="flex rounded-md focus-within:outline-none focus-within:border-1 focus-within:ring-2 focus-within:ring-purple-400 focus-within:border-purple-400">
        <span className="flex items-center justify-center p-2 border border-r-0 border-gray-300 shadow-sm rounded-l-md bg-gray-100 text-gray-500 select-none text-sm">
          +82
        </span>
        <input
          type="number"
          id={name}
          className={klassName(
            'appearance-none pl-5 pr-14 w-full border border-gray-300 placeholder:text-gray-400 shadow-sm rounded-md rounded-l-none focus:border-gray-300 focus:ring-0',
            arrow ? '' : 'arrow-none',
            klass || ''
          )}
          disabled={disabled}
          {...register}
        />
      </div>
    </>
  );
};

export default PhoneNumberInput;
