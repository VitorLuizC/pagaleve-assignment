import { useField } from 'formik';
import type { ReactElement } from 'react';
import { InputPhoneType, InputWrapper } from '../input';
import type { ContactPhoneType } from '../../models/contact';

type Props = {
  name: string;
};

function ContactPhoneTypeField(props: Props): ReactElement {
  const { name } = props;

  const [inputProps, { error }] = useField<ContactPhoneType>(name);

  return (
    <InputWrapper error={error} label="Phone Type">
      {(props) => <InputPhoneType {...props} {...inputProps} />}
    </InputWrapper>
  );
}

export default ContactPhoneTypeField;
