import getInitialState from './getInitialState';

describe('getInitialState | function | unit tests', () => {
  it('returns the initial state for task', () => {
    expect(getInitialState()).toEqual({
      error: null,
      result: null,
      loading: false,
      loadingTasks: 0,
      wasStartedAtLeastOnce: false,
    });
  });
});
