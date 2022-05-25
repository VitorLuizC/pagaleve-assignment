import ActionType from './ActionType';
import getInitialState from './getInitialState';
import reducer from './reducer';

describe('reducer | function | unit tests', () => {
  const state = getInitialState();

  describe('when dispatches "started" action', () => {
    it('increments loading tasks', () => {
      expect(reducer(state, { type: ActionType.STARTED })).toEqual(
        expect.objectContaining({
          loadingTasks: state.loadingTasks + 1,
        }),
      );
    });

    it('save that it was started at least once', () => {
      expect(reducer(state, { type: ActionType.STARTED })).toEqual(
        expect.objectContaining({
          wasStartedAtLeastOnce: true,
        }),
      );
    });
  });

  describe('when dispatches "completed" action', () => {
    const result = { name: 'Vitor' };

    it('cleanup the error', () => {
      const state = getInitialState();

      state.error = new Error('Oops!');

      expect(reducer(state, { type: ActionType.COMPLETED, result })).toEqual(
        expect.objectContaining({
          error: null,
        }),
      );
    });

    it('save the task result', () => {
      expect(reducer(state, { type: ActionType.COMPLETED, result })).toEqual(
        expect.objectContaining({
          result,
        }),
      );
    });
  });

  describe('when dispatches "failed" action', () => {
    const error = new Error('Oops!');

    it('cleanup the result', () => {
      const state = getInitialState();

      state.result = { name: 'Vitor' };

      expect(reducer(state, { type: ActionType.FAILED, error })).toEqual(
        expect.objectContaining({
          result: null,
        }),
      );
    });

    it('save the task error', () => {
      expect(reducer(state, { type: ActionType.FAILED, error })).toEqual(
        expect.objectContaining({
          error,
        }),
      );
    });
  });

  describe('when dispatches "finished" action', () => {
    it('decrements the loading tasks', () => {
      const state = getInitialState();

      state.loadingTasks = 1;

      expect(reducer(state, { type: ActionType.FINISHED })).toEqual(
        expect.objectContaining({
          loadingTasks: 0,
        }),
      );
    });

    it('set loading to false if there is no more loading tasks', () => {
      const state = getInitialState();

      state.loadingTasks = 2;

      expect(reducer(state, { type: ActionType.FINISHED })).toEqual(
        expect.objectContaining({
          loading: true,
        }),
      );

      state.loadingTasks = 1;

      expect(reducer(state, { type: ActionType.FINISHED })).toEqual(
        expect.objectContaining({
          loading: false,
        }),
      );
    });
  });

  describe('when dispatches unknown action', () => {
    it('throws an error', () => {
      // @ts-expect-error
      expect(() => reducer(state, { type: 'ANYTHING' })).toThrowError();
    });
  });
});
