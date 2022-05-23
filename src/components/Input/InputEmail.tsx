import type { ReactElement } from 'react';
import InputText, { Props as InputTextProps } from './InputText';

type Props = Omit<InputTextProps, 'type' | 'inputMode' | 'autoComplete'>;

function InputEmail(props: Props): ReactElement {
  return (
    <InputText
      {...props}
      type="email"
      className="InputEmail"
      inputMode="email"
      autoComplete="email"
    />
  );
}

export default InputEmail;
