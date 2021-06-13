// In this reducer will combine all rducers
import { combineReducers, createStore } from "redux";
import boardReducer from "./boardReducer";
import sectionReducer from "./sectionReducer";

const rootReducer = combineReducers({
    sections: boardReducer,
    tickets: sectionReducer
})
const store = createStore(rootReducer);
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
