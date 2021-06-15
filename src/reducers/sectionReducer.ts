import { MOVE_TICKET_WITHIN_SAME_SECTION, MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER, moveTicketWithinSameSection } from "../actions/sectionActions";
import { data } from "../components/models/initData";

const initialData = data;

function sectionReducer(state = initialData.tickets, action: ReturnType<typeof moveTicketWithinSameSection>) {
    switch (action.type) {
        case MOVE_TICKET_WITHIN_SAME_SECTION:
            // const newTickets = [...state[action.payload.fromSection]];
            // newSections.splice(action.payload.from, 1)
            // newSections.splice(action.payload.to, 0, state.allIds[action.payload.from]);
            return {
                ...state,

            }
        case MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER:
            return {
                ...state,
            }

        default:
            return state;
    }
};

export default sectionReducer;