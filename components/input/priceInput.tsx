import { klassName } from 'libs/client/utils';
import { PriceInputProps } from './props';

const PriceInput = function ({ name, label, klass, disabled, symbol, currency, arrow, register }: PriceInputProps) {
  return (
    <>
      {label ? (
        <label htmlFor={name} className="block mb-1 text-sm text-gray-600">
          {label}
        </label>
      ) : null}
      <div className="flex items-center relative">
        <span className="absolute ml-2 text-sm text-gray-400 pointer-events-none">{symbol}</span>
        <input
          type="number"
          id={name}
          className={klassName(
            'appearance-none pl-5 pr-14 w-full border border-gray-300 placeholder:text-gray-400 shadow-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400',
            arrow ? '' : 'arrow-none',
            klass || ''
          )}
          placeholder="0.00"
          disabled={disabled}
          {...register}
        />
        <span className="absolute right-0 pr-3 text-gray-400 pointer-events-none">{currency}</span>
      </div>
    </>
  );
};

export default PriceInput;
