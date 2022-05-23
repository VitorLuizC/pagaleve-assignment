import type { ChangeEvent, ReactElement } from 'react';
import { ContactPhoneType } from '../../models';
import type InputProps from './InputProps';

export type InputPhoneTypeOnChange = (
  event: ChangeEvent<
    HTMLSelectElement & {
      value: ContactPhoneType;
    }
  >,
) => void;

type Props = InputProps & {
  value: ContactPhoneType;
  onChange: InputPhoneTypeOnChange;
};

function InputPhoneType(props: Props): ReactElement {
  const { id, value, hintId, errorId, labelId, invalid, disabled, onChange } =
    props;

  return (
    <select
      id={id}
      value={value}
      disabled={disabled}
      onChange={onChange}
      aria-invalid={invalid}
      aria-disabled={disabled}
      aria-labelledby={labelId}
      aria-describedby={hintId}
      aria-errormessage={errorId}
    >
      <option value={ContactPhoneType.HOME}>Home</option>
      <option value={ContactPhoneType.WORK}>Work</option>
      <option value={ContactPhoneType.OTHER}>Other</option>
      <option value={ContactPhoneType.MOBILE}>Mobile</option>
    </select>
  );
}

export default InputPhoneType;
