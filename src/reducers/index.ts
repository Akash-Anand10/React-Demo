// In this reducer will combine all rducers
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import boardReducer from "./boardReducer";
import sectionReducer from "./sectionReducer";

const rootReducer = combineReducers({
  sections: boardReducer,
  tickets: sectionReducer
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type ThunkDispatch = typeof store.dispatch
