import { useCallback } from 'react';
import { useAsyncTaskLazy } from 'react-async-task';
import { ContactForm } from '../components/contact';
import { Contact } from '../models/contact';
import { createContact } from '../services/contact';

function ContactsCreate() {
  const { executeAsyncTask } = useAsyncTaskLazy();

  const handleSubmit = useCallback((contact: Contact) => {
    return executeAsyncTask(async ({ signal }) => {
      return createContact({ signal, contact });
    });
  }, [executeAsyncTask]);

  return <ContactForm onSubmit={handleSubmit} />;
}

export default ContactsCreate;
