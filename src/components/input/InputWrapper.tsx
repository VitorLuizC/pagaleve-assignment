import { ReactElement, ReactNode, useId } from 'react';
import type InputProps from './InputProps';

type Props = {
  hint?: ReactNode;
  error?: ReactNode;
  label?: ReactNode;
  disabled?: boolean;
  children: ReactNode | ((props: InputProps) => ReactNode);
};

function InputWrapper(props: Props): ReactElement {
  const { hint, error, label, disabled = false, children } = props;

  const id = useId();

  const invalid = Boolean(error && !disabled);

  const hintId = hint ? `InputWrapper__hint-${id}` : undefined;

  const errorId = invalid ? `InputWrapper__error-${id}` : undefined;

  const inputId = `InputWrapper__input-${id}`;

  const labelId = label ? `InputWrapper__label-${id}` : undefined;

  return (
    <div className="InputWrapper">
      {labelId && (
        <label id={labelId} htmlFor={inputId} className="InputWrapper__label">
          {label}
        </label>
      )}

      {hintId && (
        <p id={hintId} className="InputWrapper__hint">
          {hint}
        </p>
      )}

      <div className="InputWrapper__input">
        {typeof children !== 'function'
          ? children
          : children({
              hintId,
              errorId,
              invalid,
              labelId,
              disabled,
              id: inputId,
            })}
      </div>

      {errorId && (
        <p id={errorId} className="InputWrapper__error" aria-live="assertive">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputWrapper;
