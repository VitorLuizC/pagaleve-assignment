import sleep from './sleep';

describe('sleep | service | unit tests', () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  it('waits the received amout of time', async () => {
    const now = Date.now();

    await sleep({ time: 1000 });

    expect(Date.now() - now).toBeGreaterThanOrEqual(1000);
  });

  describe('when the service is aborted', () => {
    it('throws the DOMException "AbortError"', () => {
      const controller = new window.AbortController();

      const promise = sleep({
        time: 200,
        signal: controller.signal,
      });

      controller.abort();

      return expect(promise).rejects.toEqual(
        new window.DOMException('The service was aborted.', 'AbortError'),
      );
    });
  });
});
