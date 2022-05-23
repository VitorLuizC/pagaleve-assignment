import { useField } from 'formik';
import type { ReactElement } from 'react';
import { InputText, InputWrapper } from '../Input';

type Props = {
  name: string;
};

function ContactEmailAddressField(props: Props): ReactElement {
  const { name } = props;

  const [inputProps, { error }] = useField<string>(name);

  return (
    <InputWrapper error={error} label="Email Address">
      {(props) => (
        <InputText
          {...props}
          {...inputProps}
          type="email"
          inputMode="email"
          autoComplete="email"
        />
      )}
    </InputWrapper>
  );
}

export default ContactEmailAddressField;
