import { ChangeEvent, FormEvent, ReactElement, useId, useState } from 'react';
import Contact from '../../models/Contact';
import ContactPhoneType from '../../models/ContactPhoneType';
import {
  InputWrapper,
  InputPhoneType,
  InputPhoneNumber,
  InputPhoneTypeOnChange,
  InputEmail,
} from '../Input';
import InputText from '../Input/InputText';

type Props = {
  contact?: Contact;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
};

function ContactForm(props: Props): ReactElement {
  const { contact, onSubmit } = props;

  const id = useId();

  const [state, setState] = useState(
    contact ?? {
      id: `ContactForm-${id}`,
      name: '',
      emails: [
        {
          id: `ContactForm-email-${id}`,
          label: '',
          address: '',
        },
      ],
      phones: [
        {
          id: `ContactForm-phone-${id}`,
          type: ContactPhoneType.HOME,
          number: '',
        },
      ],
    },
  );

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({
      ...state,
      name: event.target.value,
    }));
  };

  const handleChangeEmailLabel = (index: number) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setState((state) => ({
        ...state,
        emails: state.emails.map((email, i) => {
          if (index !== i) {
            return {
              ...email,
              label: event.target.value.trim() ?? null,
            };
          }

          return email;
        }),
      }));
    };
  };

  const handleChangeEmailAddress = (index: number) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setState((state) => ({
        ...state,
        emails: state.emails.map((email, i) => {
          if (index !== i) {
            return {
              ...email,
              address: event.target.value,
            };
          }

          return email;
        }),
      }));
    };
  };

  const handleChangePhoneType = (index: number): InputPhoneTypeOnChange => {
    return (event) => {
      setState((state) => ({
        ...state,
        phones: state.phones.map((phone, i) => {
          if (index !== i) {
            return {
              ...phone,
              type: event.target.value,
            };
          }

          return phone;
        }),
      }));
    };
  };

  const handleChangePhoneNumber = (index: number) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setState((state) => ({
        ...state,
        phones: state.phones.map((phone, i) => {
          if (i === index) {
            return {
              ...phone,
              number: event.target.value,
            };
          }

          return phone;
        }),
      }));
    };
  };

  return (
    <form onSubmit={onSubmit}>
      <InputWrapper label="Name">
        {(props) => (
          <InputText
            {...props}
            value={state.name}
            onChange={handleChangeName}
          />
        )}
      </InputWrapper>

      <fieldset>
        <legend>Email Addresses</legend>

        {state.emails.map((email, index) => (
          <div key={email.id}>
            <InputWrapper label="Email Label">
              {(props) => (
                <InputText
                  {...props}
                  value={email.label ?? ''}
                  onChange={handleChangeEmailLabel(index)}
                />
              )}
            </InputWrapper>

            <InputWrapper label="Email Address">
              {(props) => (
                <InputEmail
                  {...props}
                  value={email.address}
                  onChange={handleChangeEmailAddress(index)}
                />
              )}
            </InputWrapper>

            <button type="button">🗑️ Remove Email Address</button>
          </div>
        ))}

        <button type="button">➕ Add Email Address</button>
      </fieldset>

      <fieldset>
        <legend>Phone Numbers</legend>

        {state.phones.map((phone, index) => (
          <div key={phone.id}>
            <InputWrapper label="Phone Type">
              {(props) => (
                <InputPhoneType
                  {...props}
                  value={phone.type}
                  onChange={handleChangePhoneType(index)}
                />
              )}
            </InputWrapper>

            <InputWrapper label="Phone Number">
              {(props) => (
                <InputPhoneNumber
                  {...props}
                  value={phone.number}
                  onChange={handleChangePhoneNumber(index)}
                />
              )}
            </InputWrapper>

            <button type="button">🗑️ Remove Phone Number</button>
          </div>
        ))}

        <button type="button">➕ Add Phone Number</button>
      </fieldset>
    </form>
  );
}

export default ContactForm;
