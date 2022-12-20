import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  name: string;
  type: 'text' | 'number' | 'price' | 'email' | 'phoneNumber';
  value?: string | number;
  label?: string;
  klass?: string;
  register: UseFormRegisterReturn;
  disabled?: boolean;
  [key: string]: any;
}

export interface TextInputProps extends InputProps {
  type: 'text' | 'email';
  value?: string;
}

export interface NumberInputProps extends InputProps {
  value?: number;
  arrow?: boolean;
}

export interface PriceInputProps extends InputProps {
  value?: number;
  currency: string;
  symbol?: string;
  arrow?: boolean;
}
