import { useCallback } from 'react';
import isAbortError from '../utils/isAbortError';
import resolveToError from '../utils/resolveToError';
import useAbortController from './useAbortController';
import useTaskReducer, { ActionType } from './useTaskReducer';

type TaskParams = {
  signal?: AbortSignal;
};

type Task<Result> = (params?: TaskParams) => Promise<Result>;

function useTaskLazy<Result>(task: Task<Result>) {
  const [state, dispatch] = useTaskReducer<Result>();

  const { signal } = useAbortController();

  const executeTask = useCallback(async () => {
    dispatch({ type: ActionType.STARTED });

    try {
      const result = await task({
        signal: signal ?? undefined,
      });


      dispatch({ type: ActionType.COMPLETED, result });
    } catch (error) {
      if (isAbortError(error)) return;

      dispatch({ type: ActionType.FAILED, error: resolveToError(error) });
    } finally {
      dispatch({ type: ActionType.FINISHED });
    }
  }, [task, signal, dispatch]);

  return { ...state, executeTask };
}

export default useTaskLazy;
