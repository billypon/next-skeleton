import { createStore, AnyAction } from 'redux/es/redux'
import { NextJSContext } from 'next-redux-wrapper/es6'

interface State {
}

const INITIAL_STATE: State = {
}

function reducer(state = INITIAL_STATE, action: AnyAction): State {
  switch (action.type) {
    default:
      return state
  }
}

export function initializeStore(initialState = INITIAL_STATE) {
  return createStore(reducer, initialState)
}

export interface WithReduxContext extends NextJSContext<State, AnyAction> {
}

export interface ConnectedProps extends State {
}

export function mapState(keys: string[] = [ ]): (state: State) => State {
  return (state: State) => {
    if (!keys.length) {
      return { }
    }
    const newState = { } as State
    Object.keys(state).filter(x => keys.includes(x)).forEach(x => newState[x] = state[x])
    return newState
  }
}
