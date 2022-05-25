import { useCallback, useLayoutEffect, useState } from 'react';

function getAbortController(): AbortController | null {
  if (!window.AbortController) {
    return null;
  }

  return new window.AbortController();
}

export type UseAbortControllerResult = {
  abort: () => void;
  signal?: AbortSignal;
};

function useAbortController(): UseAbortControllerResult {
  const [controller, setController] = useState(getAbortController);

  const abort = useCallback(() => setController(getAbortController), []);

  useLayoutEffect(() => () => controller?.abort(), [controller]);

  return {
    abort,
    signal: controller?.signal,
  };
}

export default useAbortController;
