import { klassName } from '../../libs/utils';
import { NumberInputProps } from './props';

const NumberInput = function ({ name, label, klass, disabled, arrow, register }: NumberInputProps) {
  return (
    <>
      {label ? (
        <label htmlFor={name} className="block mb-1 text-sm text-gray-600">
          {label}
        </label>
      ) : null}
      <div className="flex items-center">
        <input
          type="number"
          id={name}
          className={klassName(
            'appearance-none pl-5 pr-14 w-full border border-gray-300 placeholder:text-gray-400 shadow-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400',
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

export default NumberInput;
