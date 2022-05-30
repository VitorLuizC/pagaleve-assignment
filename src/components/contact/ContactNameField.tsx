import { useField } from 'formik';
import type { ReactElement } from 'react';
import { InputText, InputWrapper } from '../input';

type Props = {
  name: string;
};

function ContactNameField(props: Props): ReactElement {
  const { name } = props;

  const [inputProps, { error }] = useField<string>(name);

  return (
    <InputWrapper error={error} label="Name">
      {(props) => (
        <InputText
          {...props}
          {...inputProps}
          autoComplete="name"
          placeholder="John Doe"
        />
      )}
    </InputWrapper>
  );
}

export default ContactNameField;
