import { FieldArray, useField } from 'formik';
import type { ReactElement } from 'react';
import ContactEmail from '../../models/ContactEmail';
import { InputWrapper } from '../Input';
import ContactEmailAddressField from './ContactEmailAddressField';
import ContactEmailLabelField from './ContactEmailLabelField';

type Props = {
  name: string;
};

function ContactEmailListField(props: Props): ReactElement {
  const { name } = props;

  const [inputProps, { error }] = useField<ContactEmail[]>(name);

  const handleAdd = (push: (value: ContactEmail) => void) => () => {
    push({
      id: `ContactEmailsField-${inputProps.value.length}`,
      label: null,
      address: '',
    });
  };

  return (
    <InputWrapper error={error} label="Email Addresses">
      <FieldArray name={name}>
        {({ push, handleRemove }) => (
          <>
            {inputProps.value.map((email, index) => (
              <div key={email.id}>
                <ContactEmailLabelField name={`${name}.${index}.label`} />

                <ContactEmailAddressField name={`${name}.${index}.address`} />

                <button type="button" onClick={handleRemove(index)}>
                  🗑️ Remove Email Address
                </button>
              </div>
            ))}

            <button type="button" onClick={handleAdd(push)}>
              ➕ Add Email Address
            </button>
          </>
        )}
      </FieldArray>
    </InputWrapper>
  );
}

export default ContactEmailListField;
