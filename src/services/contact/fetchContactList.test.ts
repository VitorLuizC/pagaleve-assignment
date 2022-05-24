import { ContactPhoneType } from '../../models/contact';
import fetchContactList from './fetchContactList';

describe('fetchContactList | service | unit tests', () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  it('returns an empty list of contacts', async () => {
    const contacts = await fetchContactList();

    expect(contacts).toEqual([]);
  });

  it('returns the stored list of contacts', async () => {
    const contacts = [
      {
        id: '1',
        name: 'Naruto Uzumaki',
        emails: [
          {
            id: '1',
            label: 'Personal',
            address: 'nuzumaki@konoha.com',
          },
        ],
        phones: [
          {
            id: '1',
            type: ContactPhoneType.HOME,
            number: '+55 (11) 9 3871-3248',
          },
        ],
      },
    ];

    window.localStorage.setItem('contacts', JSON.stringify(contacts));

    expect(await fetchContactList()).toEqual(contacts);
  });
});
