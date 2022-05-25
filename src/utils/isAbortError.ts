export type AbortError = DOMException & {
  name: 'AbortError';
};

function isAbortError(error: unknown): error is AbortError {
  if (error instanceof window.DOMException) {
    return error.name === 'AbortError';
  }

  return false;
}

export default isAbortError;
