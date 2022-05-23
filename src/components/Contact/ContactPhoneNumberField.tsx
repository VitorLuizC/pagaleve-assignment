import { useField } from 'formik';
import type { ReactElement } from 'react';
import { InputPhoneNumber, InputWrapper } from '../Input';

type Props = {
  name: string;
};

function ContactPhoneNumberField(props: Props): ReactElement {
  const { name } = props;

  const [inputProps, { error }] = useField<string>(name);

  return (
    <InputWrapper error={error} label="Phone Number">
      {(props) => <InputPhoneNumber {...props} {...inputProps} />}
    </InputWrapper>
  );
}

export default ContactPhoneNumberField;
