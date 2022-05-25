import ActionType from './ActionType';
import type State from './State';
import type Action from './Action';

function reducer<Result>(state: State<Result>, action: Action<Result>): State<Result> {
  switch (action.type) {
    case ActionType.STARTED:
      return {
        ...state,
        loading: true,
        loadingTasks: state.loadingTasks + 1,
        wasStartedAtLeastOnce: true,
      };
    case ActionType.COMPLETED:
      return {
        ...state,
        error: null,
        result: action.result,
      };
    case ActionType.FAILED:
      return {
        ...state,
        error: action.error,
        result: null,
      };
    case ActionType.FINISHED:
      return {
        ...state,
        loading: state.loadingTasks > 1,
        loadingTasks: state.loadingTasks - 1,
      };
    default:
      throw new Error('Unhandled action type');
  }
}

export default reducer;
