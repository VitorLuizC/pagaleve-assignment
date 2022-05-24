/** Parameters required by {@link sleep} service. */
type Params = {
  time: number;
  signal?: AbortSignal;
};

function sleep(params: Params): Promise<void> {
  const { time, signal } = params;

  let id: number;

  return new Promise<void>((resolve, reject) => {
    id = window.setTimeout(resolve, time);

    signal?.addEventListener('abort', () => {
      window.clearTimeout(id);

      reject(new window.DOMException('The service was aborted.', 'AbortError'));
    });
  });
}

export default sleep;
