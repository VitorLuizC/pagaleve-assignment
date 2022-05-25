import resolveToError from './resolveToError.test';

describe('resolveToError | util | unit tests', () => {
  it("returns the argument when it's an Error instance", () => {
    const error = new SyntaxError('An expected error.');

    expect(resolveToError(error)).toBe(error);
  });

  it("returns new error using argument as message when it's a string", () => {
    expect(resolveToError('Ooops!')).toEqual(new Error('Ooops!'));
  });

  it('returns an unknown error when argument is not error or string', () => {
    expect(resolveToError(312974)).toEqual(new Error('Unknown error'));
    expect(resolveToError(Symbol("I can't be stringified"))).toEqual(
      new Error('Unknown error'),
    );
  });
});
