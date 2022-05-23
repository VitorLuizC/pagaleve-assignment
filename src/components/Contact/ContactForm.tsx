import { Formik, FormikHelpers } from 'formik';
import { ReactElement, useCallback, useId, useMemo } from 'react';
import Contact from '../../models/Contact';
import ContactPhoneType from '../../models/ContactPhoneType';
import ContactEmailListField from './ContactEmailListField';
import ContactNameField from './ContactNameField';
import ContactPhoneListField from './ContactPhoneListField';

type Props = {
  contact?: Contact;
};

function ContactForm(props: Props): ReactElement {
  const { contact } = props;

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
    (values: Contact, helpers: FormikHelpers<Contact>) => {
      console.log(JSON.stringify(values, null, 2));

      helpers.resetForm({ values: initialValues });
    },
    [initialValues],
  );

  return (
    <Formik<Contact> initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
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
