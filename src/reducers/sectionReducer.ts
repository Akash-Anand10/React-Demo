// import { AnyAction } from "redux";
// import { Data } from "../components/models/initData";

// let initialData: Data = {
//   sections: {
//     byId: {},
//     allIds: [],
//   },
//   tickets: {
//     byId: {},
//     allIds: [],
//   },
// };
// type stateType = typeof initialData.tickets;
// function sectionReducer(
//   state = initialData.tickets,
//   action: AnyAction
// ): stateType {
//   switch (action.type) {
//     case FETCH_INITIAL_DATA:
//       return {
//         ...state,
//         ...action.payload,
//       };

//     case ADD_TICKET:
//       const ticketsAfterAdd: string[] = [
//         ...state.allIds,
//         action.payload.ticketDetails.id,
//       ];
//       return {
//         ...state,
//         byId: {
//           ...state.byId,
//           [action.payload.ticketDetails.id]: {
//             id: action.payload.ticketDetails.id,
//             content: action.payload.ticketDetails.title,
//           },
//         },
//         allIds: ticketsAfterAdd,
//       } as stateType;

//     case REMOVE_TICKET:
//       const ticketIdsAfterRemove: string[] = state.allIds.filter(
//         (ticketId) => ticketId !== action.payload.ticketDetails.id
//       );
//       const ticketsAfterRemove = state.byId;
//       delete ticketsAfterRemove[action.payload.ticketDetails.id];
//       return {
//         ...state,
//         allIds: ticketIdsAfterRemove,
//         byId: ticketsAfterRemove,
//       };

//     default:
//       return state;
//   }
// }

// export default sectionReducer;

export {}