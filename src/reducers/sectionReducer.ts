import { AnyAction } from "redux";
import { ADD_TICKET, REMOVE_TICKET } from "../actions/sectionActions";
import { data } from "../components/models/initData";

const initialData = data;
type stateType = typeof initialData.tickets;
function sectionReducer(state = initialData.tickets, action: AnyAction): stateType {
  

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

      case REMOVE_TICKET:
        const ticketIdsAfterRemove: string[] = state.allIds.filter(ticketId => ticketId !== action.payload.ticketDetails.id)
        const ticketsAfterRemove = state.byId
        delete ticketsAfterRemove[action.payload.ticketDetails.id]
        return{
          ...state,
          allIds: ticketIdsAfterRemove,
          byId: ticketsAfterRemove
        }

    default:
      return state;
  }
};

export default sectionReducer;