import { act, renderHook } from '@testing-library/react';
import ActionType from './ActionType';
import getInitialState from './getInitialState';
import useTaskReducer from './useTaskReducer';

describe('useTaskReducer | hooks | integration tests', () => {
  it('returns task state and dispatch function', () => {
    const { result } = renderHook(useTaskReducer);

    expect(result.current[0]).toEqual(getInitialState());

    act(() => {
      result.current[1]({ type: ActionType.STARTED });
    });

    expect(result.current[0]).toEqual({
      ...getInitialState(),
      loading: true,
      loadingTasks: 1,
      wasStartedAtLeastOnce: true,
    });
  });
});
