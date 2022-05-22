import type { ChangeEvent, ReactElement } from 'react';
import type InputProps from './InputProps';
import InputText from './InputText';

type Props = InputProps & {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function InputPhoneNumber(props: Props): ReactElement {
  return (
    <InputText
      {...props}
      type="tel"
      className="InputPhoneNumber"
      inputMode="tel"
      autoComplete="tel"
    />
  );
}

export default InputPhoneNumber;
