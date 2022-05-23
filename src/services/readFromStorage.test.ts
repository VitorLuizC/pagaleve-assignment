import readFromStorage from './readFromStorage';

describe('readFromStorage | service | unit tests', () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  describe('when there are no stored value', () => {
    it("returns 'null'", () => {
      expect(readFromStorage<unknown>('value', window.localStorage)).toBe(null);
    });
  });

  describe('when there are a stored value', () => {
    it('throws an error', () => {
      window.localStorage.setItem('value', '{"name": "Naruto Uzumaki"}');

      expect(
        readFromStorage<{ name: string }>('value', window.localStorage),
      ).toEqual({ name: 'Naruto Uzumaki' });
    });
  });

  describe("when there are a stored value and it isn't serializable", () => {
    it('throws an error', () => {
      window.localStorage.setItem('value', 'saidnoasdjosioas+21382138');

      expect(() => {
        readFromStorage<unknown>('value', window.localStorage);
      }).toThrowError(new Error("Coudn't read data from storage"));
    });
  });
});
