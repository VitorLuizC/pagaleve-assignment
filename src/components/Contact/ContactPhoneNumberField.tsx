import { useField } from 'formik';
import type { ReactElement } from 'react';
import { InputText, InputWrapper } from '../Input';

type Props = {
  name: string;
};

function ContactPhoneNumberField(props: Props): ReactElement {
  const { name } = props;

  const [inputProps, { error }] = useField<string>(name);

  return (
    <InputWrapper error={error} label="Phone Number">
      {(props) => (
        <InputText
          {...props}
          {...inputProps}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
        />
      )}
    </InputWrapper>
  );
}

export default ContactPhoneNumberField;
