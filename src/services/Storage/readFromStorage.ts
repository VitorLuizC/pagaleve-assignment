function readFromStorage<T>(key: string, storage: Storage): null | T {
  try {
    const json = storage.getItem(key);

    if (!json) {
      return null;
    }

    return JSON.parse(json) as T;
  } catch (cause) {
    throw new Error("Coudn't read data from storage", {
      cause: cause as Error,
    });
  }
}

export default readFromStorage;
