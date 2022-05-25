import { Dispatch, useMemo, useReducer } from 'react';

import type State from './State';
import type Action from './Action';
import reducer from './reducer';
import getInitialState from './getInitialState';

export type UseTaskReducerResult<Result> = readonly [
  state: State<Result>,
  dispatch: Dispatch<Action<Result>>,
];

function useTaskReducer<Result>(): UseTaskReducerResult<Result> {
  const initialState = useMemo(getInitialState, []);

  return useReducer(reducer, initialState) as UseTaskReducerResult<Result>;
}

export default useTaskReducer;
