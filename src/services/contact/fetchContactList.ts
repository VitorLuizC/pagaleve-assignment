import type { Contact } from '../../models/contact';
import { readFromStorage } from '../storage';
import { sleep } from '../async';

/** The params required by {@link fetchContactList}. */
type Params = {
  signal?: AbortSignal;
};

async function fetchContactList(params: Params = {}): Promise<Contact[]> {
  const { signal } = params;

  // TODO: Replace this mock to a the actual API call.
  await sleep({
    signal,
    time: 1000 * Math.random(),
  });

  const contacts = readFromStorage<Contact[]>('contacts', window.localStorage);

  return contacts ?? [];
}

export default fetchContactList;
