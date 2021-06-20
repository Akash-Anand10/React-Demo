export const ADD_TICKET = "sectionActions/ADD_TICKET";
export const REMOVE_TICKET = "sectionActions/REMOVE_TICKET";

type addOrRemoveTicketPayload = {
  sectionId: string,
  ticketDetails: {
    id: string,
    title?: string
  }
}

export const addTicket = (payload: addOrRemoveTicketPayload) => {
  return {
    type: ADD_TICKET,
    payload
  }
}

export const removeTicket = (payload: addOrRemoveTicketPayload) => {
  return {
    type: REMOVE_TICKET,
    payload
  }
}