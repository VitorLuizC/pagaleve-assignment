import type { Contact } from '../models';
import readFromStorage from './readFromStorage';

/** The params required by {@link fetchContactList}. */
type Params = {
  signal?: AbortSignal;
};

async function fetchContactList({ signal }: Params = {}): Promise<Contact[]> {
  // TODO: Replace this mock to a the actual API call.

  const time = 1000 * Math.random();

  let id: number;

  return new Promise<Contact[]>((resolve, reject) => {
    id = window.setTimeout(() => {
      const contacts = readFromStorage<Contact[]>(
        'contacts',
        window.localStorage,
      );

      resolve(contacts ?? []);
    }, time);

    signal?.addEventListener('abort', () => {
      window.clearTimeout(id);

      reject(new window.DOMException('AbortError', 'AbortError'));
    });
  });
}

export default fetchContactList;
