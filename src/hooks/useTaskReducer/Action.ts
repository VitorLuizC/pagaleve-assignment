import type ActionType from './ActionType';

type Action<Result> =
  | { type: ActionType.FAILED; error: Error }
  | { type: ActionType.STARTED }
  | { type: ActionType.FINISHED }
  | { type: ActionType.COMPLETED; result: Result };

export default Action;
