import type { ChangeEvent, ReactElement } from 'react';
import InputProps from './InputProps';

type Props = InputProps & {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function InputPhoneNumber(props: Props): ReactElement {
  const { id, value, hintId, errorId, labelId, invalid, disabled, onChange } =
    props;

  return (
    <input
      id={id}
      type="tel"
      value={value}
      onChange={onChange}
      disabled={disabled}
      inputMode="tel"
      aria-invalid={invalid}
      autoComplete="tel"
      aria-disabled={disabled}
      aria-labelledby={labelId}
      aria-describedby={hintId}
      aria-errormessage={errorId}
    />
  );
}

export default InputPhoneNumber;
