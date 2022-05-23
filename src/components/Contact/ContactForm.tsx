import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import ContactPhone from '../../models/ContactPhone';
import ContactPhoneType from '../../models/ContactPhoneType';
import {
  InputWrapper,
  InputPhoneType,
  InputPhoneNumber,
  InputPhoneTypeOnChange,
} from '../Input';

type Props = {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
};

function ContactForm(props: Props): ReactElement {
  const { onSubmit } = props;

  const [phoneNumbers, setPhoneNumbers] = useState<ContactPhone[]>([
    {
      id: Math.round(Math.random() * Number.MAX_VALUE).toString(32),
      type: ContactPhoneType.HOME,
      number: '',
    },
  ]);

  const handlePhoneType = (index: number): InputPhoneTypeOnChange => {
    return (event) => {
      setPhoneNumbers((phoneNumbers) => {
        return phoneNumbers.map((phoneNumber, i) => {
          if (i === index) {
            return {
              ...phoneNumber,
              type: event.target.value,
            };
          }

          return phoneNumber;
        });
      });
    };
  };

  const handlePhoneNumber = (index: number) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setPhoneNumbers((phoneNumbers) => {
        return phoneNumbers.map((phoneNumber, i) => {
          if (i === index) {
            return {
              ...phoneNumber,
              number: event.target.value,
            };
          }

          return phoneNumber;
        });
      });
    };
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>Phone Numbers</legend>

        {phoneNumbers.map((phoneNumber, index) => (
          <fieldset key={phoneNumber.id}>
            <InputWrapper label="Phone Type">
              {(props) => (
                <InputPhoneType
                  {...props}
                  value={phoneNumber.type}
                  onChange={handlePhoneType(index)}
                />
              )}
            </InputWrapper>

            <InputWrapper label="Phone Number">
              {(props) => (
                <InputPhoneNumber
                  {...props}
                  value={phoneNumber.number}
                  onChange={handlePhoneNumber(index)}
                />
              )}
            </InputWrapper>

            <button type="button">🗑️ Remove</button>
          </fieldset>
        ))}
        <button type="button">➕ Add Phone Number</button>
      </fieldset>
    </form>
  );
}

export default ContactForm;
