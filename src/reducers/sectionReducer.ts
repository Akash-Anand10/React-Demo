import { MOVE_TICKET } from "../actions/sectionActions";
import { data } from "../components/models/initData";

const initialState = data.tickets;

function sectionReducer(state = initialState, action: { type: string }) {
    switch (action.type) {
        case MOVE_TICKET:
            return {
                ...state,
            }

        default:
            return state;
    }
};

export default sectionReducer;