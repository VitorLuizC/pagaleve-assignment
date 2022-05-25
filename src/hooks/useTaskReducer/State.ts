type State<Result> = {
  error: Error | null;
  result: Result | null;
  loading: boolean;
  loadingTasks: number;
  wasStartedAtLeastOnce: boolean;
};

export default State;
