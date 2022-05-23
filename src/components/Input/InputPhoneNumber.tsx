import type { ReactElement } from 'react';
import InputText, { Props as InputTextProps } from './InputText';

type Props = Omit<InputTextProps, 'type' | 'inputMode' | 'autoComplete'>;

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