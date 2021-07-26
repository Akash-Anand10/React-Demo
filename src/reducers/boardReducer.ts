import {
  FETCH_INITIAL_DATA,
  MOVE_SECTION,
  MOVE_TICKET_WITHIN_SAME_SECTION,
  MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER,
  ADD_SECTION,
  REMOVE_SECTION,
  ADD_TICKET_TO_SECTION,
  REMOVE_TICKET_FROM_SECTION,
  RENAME_SECTION,
} from "../actions/boardActions";
import { Data } from "../models/initData";
import produce from "immer";

let initialData: Data = {
  sections: {
    byId: {},
    allIds: [],
  },
  tickets: {
    byId: {},
    allIds: [],
  },
};
type stateType = typeof initialData;

const board = produce((draft: stateType, action) => {
  switch (action.type) {
    case FETCH_INITIAL_DATA:
      draft.sections = action.payload.sections;
      draft.tickets = action.payload.tickets;
      console.log("draft", draft)
      break;

    case MOVE_SECTION:
      draft.sections.allIds.splice(action.payload.from, 1);
      draft.sections.allIds.splice(
        action.payload.to,
        0,
        action.payload.sectionId
      );
      break;

    case MOVE_TICKET_WITHIN_SAME_SECTION:
      draft.sections.byId[action.payload.fromSectionId].tickets.splice(
        action.payload.fromIndex,
        1
      );
      draft.sections.byId[action.payload.fromSectionId].tickets.splice(
        action.payload.fromIndex,
        0,
        action.payload.ticketId
      );
      break;

    case MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER:
      draft.sections.byId[action.payload.fromSectionId].tickets.splice(
        action.payload.fromIndex,
        1
      );
      draft.sections.byId[action.payload.toSectionId].tickets.splice(
        action.payload.toIndex,
        0,
        action.payload.ticketId
      );
      break;

    case ADD_SECTION:
      draft.sections.byId[action.payload.sectionId] = {
        id: action.payload.sectionId,
        title: action.payload.sectionTitle,
        tickets: [],
      };
      draft.sections.allIds.push(action.payload.sectionId);
      break;

    case REMOVE_SECTION:
      draft.sections.allIds = draft.sections.allIds.filter(
        (sectionId) => sectionId !== action.payload.sectionId
      );
      delete draft.sections.byId[action.payload.sectionId];
      break;

    case ADD_TICKET_TO_SECTION:
      draft.sections.byId[action.payload.sectionId].tickets.push(
        action.payload.ticketDetails.id
      );
      draft.tickets.allIds.push(action.payload.ticketDetails.id);
      draft.tickets.byId[action.payload.ticketDetails.id] = {
        id: action.payload.ticketDetails.id,
        content: action.payload.ticketDetails?.title,
      };
      break;

    case REMOVE_TICKET_FROM_SECTION:
      draft.sections.byId[action.payload.sectionId].tickets =
        draft.sections.byId[action.payload.sectionId].tickets.filter(
          (ticketId) => ticketId !== action.payload.ticketDetails.id
        );
      delete draft.tickets.byId[action.payload.ticketDetails.id];
      draft.tickets.allIds = draft.tickets.allIds.filter(
        (ticketId) => ticketId !== action.payload.ticketDetails.id
      );
      break;

    case RENAME_SECTION:
      break;
  }
}, initialData);

export default board;
