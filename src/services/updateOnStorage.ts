import readFromStorage from './readFromStorage';

function updateOnStorage<T>(
  key: string,
  storage: Storage,
  update: (value: T | null) => T | null,
): void {
  try {
    const data = update(readFromStorage(key, storage));

    const json = JSON.stringify(data);

    // It only returns 'undefined' when data is undefined.
    if (json === undefined) {
      throw new Error("Cannot serialize 'undefined'.");
    }

    storage.setItem(key, json);
  } catch (cause) {
    throw new Error("Couldn't save data on the storage.", {
      cause: cause as Error,
    });
  }
}

export default updateOnStorage;
