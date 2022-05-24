import createContact from './createContact';
import { readFromStorage } from '../Storage';

describe('createContact | service | integration tests', () => {
  afterEach(() => window.localStorage.clear());

  it('saves the new contact in the storage', async () => {
    const contacts = [
      {
        id: '1',
        name: 'Uzumaki Naruto',
        emails: [],
        phones: [],
      },
    ];

    window.localStorage.setItem('contacts', JSON.stringify(contacts));

    const contact = {
      id: '1',
      name: 'Uchiha Sasuke',
      emails: [],
      phones: [],
    };

    await createContact({ contact });

    const persisted = readFromStorage('contacts', window.localStorage);

    expect(persisted).toEqual([...contacts, contact]);
  });

  it('returns the new contact', async () => {
    const contact = {
      id: '1',
      name: 'Uchiha Sasuke',
      emails: [],
      phones: [],
    };

    expect(await createContact({ contact })).toEqual(contact);
  });
});
