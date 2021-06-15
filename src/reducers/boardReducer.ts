import { Action, AnyAction, Dispatch } from "redux";
import {
    MOVE_SECTION,
    moveSection,
    MOVE_TICKET_WITHIN_SAME_SECTION,
    moveTicketWithinSameSection,
    MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER,
    moveTicketFromOneSectionToAnother
} from "../actions/boardActions";
import { moveTicketPayload } from "../actions/sectionActions";
import { data } from "../components/models/initData";

const initialData = data;

function boardReducer(state = initialData.sections, action: AnyAction) {
    switch (action.type) {
        case MOVE_SECTION:
            const newSections = [...state.allIds];
            newSections.splice(action.payload.from, 1)
            newSections.splice(action.payload.to, 0, state.allIds[action.payload.from]);
            return {
                ...state,
                allIds: newSections
            };
        case MOVE_TICKET_WITHIN_SAME_SECTION:
            const section = { ...state.byId[action.payload.fromSectionId] }
            const sectionTickets = section.tickets;
            const ticketToMove = sectionTickets[action.payload.fromIndex];
            sectionTickets.splice(action.payload.fromIndex, 1)
            sectionTickets.splice(action.payload.toIndex, 0, ticketToMove);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [section.id]: section
                }
            };

        case MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER:
            const sourceSection = { ...state.byId[action.payload.fromSectionId] }
            const destinationSection = { ...state.byId[action.payload.toSectionId] }
            const sourceTickets = sourceSection.tickets;
            const destinationTickets = destinationSection.tickets;
            const ticketToMove2 = sourceTickets[action.payload.fromIndex];
            sourceTickets.splice(action.payload.fromIndex, 1)
            destinationTickets.splice(action.payload.toIndex, 0, ticketToMove2);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [sourceSection.id]: sourceSection,
                    [destinationSection.id]: destinationSection
                }
            };

        default:
            return state;
    }
};

export default boardReducer;