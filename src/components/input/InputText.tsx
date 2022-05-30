import './InputText.scss';

import type { InputHTMLAttributes, ReactElement } from 'react';
import type InputProps from './InputProps';

type BrowserInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | 'id'
  | 'value'
  | 'disabled'
  | 'aria-invalid'
  | 'aria-disabled'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'aria-errormessage'
>;

type OverwrittenInputProps = Partial<InputProps> & {
  value?: string;
};

export type Props = BrowserInputProps & OverwrittenInputProps;

function InputText(props: Props): ReactElement {
  const {
    type = 'text',
    hintId,
    errorId,
    labelId,
    invalid = false,
    disabled = false,
    className,
    ...browserProps
  } = props;

  return (
    <input
      {...browserProps}
      type={type}
      disabled={disabled}
      className={className?.concat(' InputText') ?? 'InputText'}
      aria-invalid={invalid}
      aria-disabled={disabled}
      aria-labelledby={labelId}
      aria-describedby={hintId}
      aria-errormessage={errorId}
    />
  );
}

export default InputText;
