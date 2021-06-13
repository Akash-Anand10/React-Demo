import { MOVE_SECTION } from "../actions/boardActions";
import { data } from "../components/models/initData";

const initialState = data.sections;

function boardReducer(state = initialState, action: { type: string }) {
    switch (action.type) {
        case MOVE_SECTION:
            return {
                ...state,
            }

        default:
            return state;
    }
};

export default boardReducer;