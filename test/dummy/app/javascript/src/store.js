import { createStore } from 'redux'
import { combineReducers } from 'redux'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const DRAWER_OPEN = 'DRAWER_OPEN'
const DRAWER_CLOSE = 'DRAWER_CLOSE'

function drawer(state = { open: true }, action) {
  switch (action.type) {
    case DRAWER_OPEN:
      return {...action.props, open: true}
    case DRAWER_CLOSE:
    return {...action.props, open: false}
    default:
      return state
  }
}

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

const rootReducer = combineReducers({
  drawer,
  counter,
})

const store = createStore(rootReducer)

export default store
