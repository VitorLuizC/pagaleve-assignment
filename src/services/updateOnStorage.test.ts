import readFromStorage from './readFromStorage';
import updateOnStorage from './updateOnStorage';

describe('updateOnStorage | service | unit test', () => {
  afterEach(() => window.localStorage.clear());

  it('updates the value in the storage', () => {
    const contacts = [
      {
        id: '1',
        name: 'Zabuza Momochi',
        emails: [],
        phones: [],
      },
    ];

    const contact = {
      id: '2',
      name: 'Kakashi Hatake',
      emails: [],
      phones: [],
    };

    window.localStorage.setItem('value', JSON.stringify(contacts));

    const update = jest.fn((contacts) => [contact, ...contacts]);

    updateOnStorage('value', window.localStorage, update);

    expect(update).toHaveBeenCalledWith(contacts);

    expect(readFromStorage('value', window.localStorage)).toEqual([
      contact,
      ...contacts,
    ]);
  });

  it('throws an error when the update function returns undefined', () => {
    const update = () => undefined;

    expect(() =>
      updateOnStorage('value', window.localStorage, update),
    ).toThrowError(new Error("Couldn't save data on the storage."));
  });
});
