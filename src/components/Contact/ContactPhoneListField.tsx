import { FieldArray, useField } from 'formik';
import type { ReactElement } from 'react';
import { ContactPhone, ContactPhoneType } from '../../models/Contact';
import { InputWrapper } from '../Input';
import ContactPhoneNumberField from './ContactPhoneNumberField';
import ContactPhoneTypeField from './ContactPhoneTypeField';

type Props = {
  name: string;
};

function ContactPhoneListField(props: Props): ReactElement {
  const { name } = props;

  const [inputProps, { error }] = useField<ContactPhone[]>(name);

  const handleAdd = (push: (value: ContactPhone) => void) => () => {
    push({
      id: `ContactPhonesField-${inputProps.value.length}`,
      type: ContactPhoneType.MOBILE,
      number: '',
    });
  };

  return (
    <InputWrapper error={error} label="Phone Numbers">
      <FieldArray name={name}>
        {({ push, handleRemove }) => (
          <>
            {inputProps.value.map((phone, index) => (
              <div key={phone.id}>
                <ContactPhoneTypeField name={`${name}.${index}.type`} />

                <ContactPhoneNumberField name={`${name}.${index}.number`} />

                <button type="button" onClick={handleRemove(index)}>
                  🗑️ Remove Phone Number
                </button>
              </div>
            ))}

            <button type="button" onClick={handleAdd(push)}>
              ➕ Add Phone Number
            </button>
          </>
        )}
      </FieldArray>
    </InputWrapper>
  );
}

export default ContactPhoneListField;
