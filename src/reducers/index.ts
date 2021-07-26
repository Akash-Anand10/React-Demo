// In this reducer will combine all rducers
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import board from "./boardReducer";

const rootReducer = combineReducers({
  board: board
})

const stateLogger = () => (next: (arg0: any) => void) => (action: any) => {
  console.log(action, "logger");
  next(action);
};

const middlewares = [thunk, stateLogger]
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type ThunkDispatch = typeof store.dispatch
