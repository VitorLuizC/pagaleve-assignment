import type State from './State';

function getInitialState<Result>(): State<Result> {
  return {
    error: null,
    result: null,
    loading: false,
    loadingTasks: 0,
    wasStartedAtLeastOnce: false,
  };
}

export default getInitialState;
