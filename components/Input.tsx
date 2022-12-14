import React from 'react';
import { klassName } from '../libs/utils';

interface InputProps {
  name: string;
  type: 'text' | 'number' | 'price';
  value?: string | number;
  label?: string;
  klass?: string;
  disabled?: boolean;
  [key: string]: any;
}

interface TextInputProps extends InputProps {
  value?: string;
}

interface NumberInputProps extends InputProps {
  arrow?: boolean;
}

interface PriceInputProps extends InputProps {
  currency: string;
  symbol?: string;
  arrow?: boolean;
}

const Input = function ({
  name,
  type,
  value,
  label,
  klass,
  disabled,
  arrow = true,
  symbol,
  currency,
  ...rest
}: TextInputProps | NumberInputProps | PriceInputProps) {
  let typedInput: JSX.Element;
  switch (type) {
    case 'text': {
      typedInput = <TextInput name={name} type="text" label={label} klass={klass} disabled={disabled} {...rest} />;
      break;
    }
    case 'number': {
      typedInput = (
        <NumberInput
          name={name}
          type="number"
          label={label}
          klass={klass}
          disabled={disabled}
          arrow={arrow}
          {...rest}
        />
      );
      break;
    }
    case 'price': {
      typedInput = (
        <PriceInput
          name={name}
          type="price"
          label={label}
          klass={klass}
          disabled={disabled}
          arrow={arrow}
          currency={currency}
          symbol={symbol}
          {...rest}
        />
      );
      break;
    }
  }
  return (
    <>
      {label ? (
        <label htmlFor={name} className="block mb-1 text-sm text-gray-600">
          {label}
        </label>
      ) : null}
      {typedInput}
    </>
  );
};

const TextInput = function ({ name, type, value, label, klass, disabled, ...rest }: TextInputProps) {
  return (
    <div className="flex items-center">
      <input
        type="text"
        id={name}
        name={name}
        className={klassName(
          'appearance-none pl-5 pr-14 w-full border border-gray-300 placeholder:text-gray-400 shadow-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400',
          klass || ''
        )}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
};
const NumberInput = function ({ name, type, value, label, klass, disabled, arrow, ...rest }: NumberInputProps) {
  return (
    <div className="flex items-center">
      <input
        type="number"
        id={name}
        name={name}
        className={klassName(
          'appearance-none pl-5 pr-14 w-full border border-gray-300 placeholder:text-gray-400 shadow-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400',
          arrow ? '' : 'arrow-none',
          klass || ''
        )}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
};
const PriceInput = function ({
  name,
  type,
  value,
  label,
  klass,
  disabled,
  arrow,
  symbol,
  currency,
  ...rest
}: PriceInputProps) {
  return (
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
        {...rest}
      />
      <span className="absolute right-0 pr-3 text-gray-400 pointer-events-none">{currency}</span>
    </div>
  );
};

export default Input;
