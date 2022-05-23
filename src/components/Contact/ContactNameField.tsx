import { useField } from 'formik';
import type { ReactElement } from 'react';
import { InputText, InputWrapper } from '../Input';

type Props = {
  name: string;
};

function ContactNameField(props: Props): ReactElement {
  const { name } = props;

  const [inputProps, { error }] = useField<string>(name);

  return (
    <InputWrapper error={error} label="Name">
      {(props) => <InputText {...props} {...inputProps} autoComplete="name" />}
    </InputWrapper>
  );
}

export default ContactNameField;
