export const ADD_TICKET = "sectionActions/ADD_TICKET";

type addOrRemoveTicketPayload = {
  sectionId: string,
  ticketDetails: {
    id: string,
    title: string
  }
}

export const addTicket = (payload: addOrRemoveTicketPayload) => {
  return {
    type: ADD_TICKET,
    payload
  }
}