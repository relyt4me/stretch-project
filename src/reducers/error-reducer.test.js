import errorReducer from './error-reducer'

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = errorReducer(undefined, {});

    expect(result).toEqual(expected)
  });

  it('should return the correct state if action is ERRORED', () => {
    const initialState = 'No drinks found';
    const action = {
      type: 'ERRORED',
      error: 'No drinks with that ingredient. Please try a different search!'
    }

    const newState = 'No drinks with that ingredient. Please try a different search!';

    const result = errorReducer(initialState, action)

    expect(result).toEqual(newState)
  })
})