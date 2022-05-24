import type { Contact } from '../../models/Contact';
import { sleep } from '../Async';
import { updateOnStorage } from '../Storage';

/** Parameters required by {@link createContact} service. */
type Params = {
  signal?: AbortSignal;
  contact: Contact;
};

async function createContact(params: Params): Promise<Contact> {
  const { signal, contact } = params;

  await sleep({
    signal,
    time: 1000 * Math.random(),
  });

  updateOnStorage<Contact[]>('contacts', window.localStorage, (contacts) => {
    return (contacts ?? []).concat(contact);
  });

  return contact;
}

export default createContact;
