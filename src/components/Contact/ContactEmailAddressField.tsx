import { useField } from 'formik';
import type { ReactElement } from 'react';
import { InputEmail, InputWrapper } from '../Input';

type Props = {
  name: string;
};

function ContactEmailAddressField(props: Props): ReactElement {
  const { name } = props;

  const [inputProps, { error }] = useField<string>(name);

  return (
    <InputWrapper error={error} label="Email Address">
      {(props) => <InputEmail {...props} {...inputProps} />}
    </InputWrapper>
  );
}

export default ContactEmailAddressField;
