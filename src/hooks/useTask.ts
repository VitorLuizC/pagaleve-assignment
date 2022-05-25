import { useLayoutEffect } from 'react';
import useTaskLazy from './useTaskLazy';

type TaskParams = {
  signal?: AbortSignal;
};

type Task<Result> = (params?: TaskParams) => Promise<Result>;

function useTask<Result>(task: Task<Result>) {
  const { wasStartedAtLeastOnce, executeTask, ...state } = useTaskLazy(task);

  useLayoutEffect(() => {
    executeTask()
  }, [executeTask]);

  if (wasStartedAtLeastOnce) {
    return {
      ...state,
      executeTask,
    };
  }

  return {
    ...state,
    executeTask,
    loading: true,
    loadingTasks: 1, 
  };
}

export default useTask;
