import isAbortError from './isAbortError';

describe('isAbortError | util | unit tests', () => {
  it('returns true when error is an AbortError', () => {
    const error = new window.DOMException('Oops! It hung up', 'AbortError');

    expect(isAbortError(error)).toBe(true);
    expect(isAbortError(new window.DOMException('Other', 'Other'))).toBe(false);
    expect(isAbortError(new Error('AbortError'))).toBe(false);
    expect(isAbortError('AbortError')).toBe(false);
  });
});
