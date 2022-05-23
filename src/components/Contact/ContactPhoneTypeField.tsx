import { useField } from 'formik';
import type { ReactElement } from 'react';
import type ContactPhoneType from '../../models/ContactPhoneType';
import { InputPhoneType, InputWrapper } from '../Input';

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
