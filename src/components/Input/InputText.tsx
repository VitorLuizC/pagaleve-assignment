import type { InputHTMLAttributes, ReactElement } from 'react';
import type MergeAndOverwrite from '../../types/MergeAndOverwrite';
import type InputProps from './InputProps';

type DefaultInputProps = InputHTMLAttributes<HTMLInputElement>;

type Props = MergeAndOverwrite<DefaultInputProps, InputProps>;

function InputText(props: Props): ReactElement {
  const {
    type = 'text',
    hintId,
    errorId,
    labelId,
    invalid,
    disabled,
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
