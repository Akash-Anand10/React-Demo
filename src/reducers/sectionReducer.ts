import { AnyAction } from "redux";
import { ADD_TICKET } from "../actions/sectionActions";
import { data } from "../components/models/initData";

const initialData = data;

function sectionReducer(state = initialData.tickets, action: AnyAction) {
  type stateType = typeof state;

  switch (action.type) {
    case ADD_TICKET:
      const ticketsAfterAdd: string[] = [...state.allIds, action.payload.ticketDetails.id]
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.ticketDetails.id]: {
            id: action.payload.ticketDetails.id,
            content: action.payload.ticketDetails.title
          }
        },
        allIds: ticketsAfterAdd
      } as stateType;

    default:
      return state;
  }
};

export default sectionReducer;