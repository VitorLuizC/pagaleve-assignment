import './ContactForm.scss';

import { Formik, FormikHelpers } from 'formik';
import { ReactElement, useCallback, useId, useMemo } from 'react';
import { Contact, ContactPhoneType } from '../../models/contact';
import ContactEmailListField from './ContactEmailListField';
import ContactNameField from './ContactNameField';
import ContactPhoneListField from './ContactPhoneListField';

type Props = {
  contact?: Contact;
  onSubmit: (contact: Contact) => Promise<void>;
};

function ContactForm(props: Props): ReactElement {
  const { contact, onSubmit } = props;

  const id = useId();

  const initialValues = useMemo(
    () =>
      contact ?? {
        id: `ContactForm-${id}`,
        name: '',
        emails: [
          {
            id: `ContactForm-email-${id}`,
            label: null,
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
    [id, contact],
  );

  const handleSubmit = useCallback(
    (contact: Contact, helpers: FormikHelpers<Contact>) => {
      onSubmit(contact);
      helpers.resetForm({ values: initialValues });
    },
    [onSubmit, initialValues],
  );

  return (
    <Formik<Contact> initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <form className="ContactForm" onSubmit={handleSubmit}>
          <ContactNameField name="name" />

          <ContactEmailListField name="emails" />

          <ContactPhoneListField name="phones" />

          <button type="submit">💾 Save Contact</button>
        </form>
      )}
    </Formik>
  );
}

export default ContactForm;
