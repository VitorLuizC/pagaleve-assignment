import type { InputHTMLAttributes, ReactElement } from 'react';
import type InputProps from './InputProps';

type BrowserInputProps = InputHTMLAttributes<HTMLInputElement>;

export type Props = Partial<BrowserInputProps & InputProps>;

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
      className={className?.concat(' InputText') ?? 'InputText'}
      disabled={disabled}
      aria-invalid={invalid}
      aria-disabled={disabled}
      aria-labelledby={labelId}
      aria-describedby={hintId}
      aria-errormessage={errorId}
    />
  );
}

export default InputText;
