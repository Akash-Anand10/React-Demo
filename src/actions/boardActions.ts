export const MOVE_SECTION = "boardActions/MOVE_SECTION"
export const ADD_SECTION = "boardActions/ADD_SECTION";
export const REMOVE_SECTION = "boardActions/REMOVE_SECTION";
export const RENAME_SECTION = "boardActions/RENAME_SECTION";


export const MOVE_TICKET_WITHIN_SAME_SECTION = "boardActions/MOVE_TICKET_WITHIN_SAME_SECTION";
export const MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER = "boardActions/MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER";
export const ADD_TICKET_TO_SECTION = "boardActions/ADD_TICKET";
export const REMOVE_TICKET_FROM_SECTION = "boardActions/REMOVE_TICKET";
export const EDIT_TICKET_TITLE = "boardActions/EDIT_TICKET_TITLE";


export type moveTicketPayload = {
  fromIndex: number,
  toIndex: number,
  fromSectionId: string,
  toSectionId: string
}

export const moveTicketWithinSameSection = (payload: moveTicketPayload) => {
  return {
    type: MOVE_TICKET_WITHIN_SAME_SECTION,
    payload
  }
}

export const moveTicketFromOneSectionToAnother = (payload: moveTicketPayload) => {
  return {
    type: MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER,
    payload
  }
}

type addOrRemoveTicketToSectionPayload = {
  sectionId: string,
  ticketDetails: {
    id: string,
    title?: string
  }
}

export const addTicketToSection = (payload: addOrRemoveTicketToSectionPayload) => {
  return {
    type: ADD_TICKET_TO_SECTION,
    payload
  }
}

export const removeTicketFromSection = (payload: addOrRemoveTicketToSectionPayload) => {
  return {
    type: REMOVE_TICKET_FROM_SECTION,
    payload
  }
}

export const editTicketTitle = (payload: addOrRemoveTicketToSectionPayload) => {
  return {
    type: EDIT_TICKET_TITLE,
    payload
  }
}

type moveSectionPayload = {
  to: number
  from: number
}

export const moveSection = (payload: moveSectionPayload) => {
  return {
    type: MOVE_SECTION,
    payload: payload
  }
}

export type addSectionPayload = {
  sectionId: string,
  sectionTitle: string
}

export const addSection = (payload: addSectionPayload) => {
  return {
    type: ADD_SECTION,
    payload: payload
  }
}

type removeSectionPayload = {
  sectionId: string,
}

export const removeSection = (payload: removeSectionPayload) => {
  return {
    type: REMOVE_SECTION,
    payload: payload
  }
}

type renameSectionPayload = {
  sectionId: string,
  sectionTitle: string
}

export const renameSection = (payload: renameSectionPayload) => {
  return {
    type: RENAME_SECTION,
    payload: payload
  }
}