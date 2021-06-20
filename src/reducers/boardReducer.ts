import { AnyAction } from "redux";
import {
  MOVE_SECTION,
  MOVE_TICKET_WITHIN_SAME_SECTION,
  MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER,
  ADD_SECTION,
  REMOVE_SECTION,
  ADD_TICKET_TO_SECTION,
  REMOVE_TICKET_FROM_SECTION
} from "../actions/boardActions";
import { data } from "../components/models/initData";

const initialData = data;
type stateType = typeof initialData.sections;

function boardReducer(
  state = initialData.sections,
  action: AnyAction
): stateType {
  switch (action.type) {
    case MOVE_SECTION:
      const newSections = [...state.allIds];
      newSections.splice(action.payload.from, 1);
      newSections.splice(
        action.payload.to,
        0,
        state.allIds[action.payload.from]
      );
      return {
        ...state,
        allIds: newSections,
      };

    case MOVE_TICKET_WITHIN_SAME_SECTION:
      const section = { ...state.byId[action.payload.fromSectionId] };
      const sectionTickets = section.tickets;
      const ticketToMove = sectionTickets[action.payload.fromIndex];
      sectionTickets.splice(action.payload.fromIndex, 1);
      sectionTickets.splice(action.payload.toIndex, 0, ticketToMove);
      return {
        ...state,
        byId: {
          ...state.byId,
          [section.id]: section,
        },
      };

    case MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER:
      const sourceSection = { ...state.byId[action.payload.fromSectionId] };
      const destinationSection = { ...state.byId[action.payload.toSectionId] };
      const sourceTickets = sourceSection.tickets;
      const destinationTickets = destinationSection.tickets;
      const ticketToMove2 = sourceTickets[action.payload.fromIndex];
      sourceTickets.splice(action.payload.fromIndex, 1);
      destinationTickets.splice(action.payload.toIndex, 0, ticketToMove2);
      return {
        ...state,
        byId: {
          ...state.byId,
          [sourceSection.id]: sourceSection,
          [destinationSection.id]: destinationSection,
        },
      };

    case ADD_SECTION:
      const newSection = {
        id: action.payload.sectionId,
        title: action.payload.sectionTitle,
        tickets: [],
      };

      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.sectionId]: newSection,
        },
        allIds: [...state.allIds, action.payload.sectionId],
      };

    case REMOVE_SECTION:
      const sectionIdsAfterDelete = state.allIds.filter(
        (sectionId) => sectionId !== action.payload.sectionId
      );
      const sectionsAfterDelete = state.byId;
      delete sectionsAfterDelete[action.payload.sectionId];
      return {
        ...state,
        byId: sectionsAfterDelete,
        allIds: sectionIdsAfterDelete,
      };

    case ADD_TICKET_TO_SECTION:
      const sectionAfterAdd = { ...state.byId[action.payload.sectionId] };
      sectionAfterAdd.tickets = [
        ...sectionAfterAdd.tickets,
        action.payload.ticketDetails.id as string,
      ];
      const r = {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.sectionId]: sectionAfterAdd,
        },
      };
      return r;

    case REMOVE_TICKET_FROM_SECTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default boardReducer;
