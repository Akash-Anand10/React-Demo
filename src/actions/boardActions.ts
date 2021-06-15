export const MOVE_SECTION = "boardActions/MOVE_SECTION"
export const MOVE_TICKET_WITHIN_SAME_SECTION = "boardActions/MOVE_TICKET_WITHIN_SAME_SECTION";
export const MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER = "boardActions/MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER";

export type moveTicketPayload = {
    fromIndex: number,
    toIndex: number,
    fromSectionId: string,
    toSectionId: string
}

export const moveTicketWithinSameSection = (payload: moveTicketPayload) => {
    return{
        type: MOVE_TICKET_WITHIN_SAME_SECTION,
        payload
    }
}

export const moveTicketFromOneSectionToAnother = (payload: moveTicketPayload) => {
    return{
        type: MOVE_TICKET_WITHIN_SAME_SECTION,
        payload
    }
}

type moveSectionPayload = {
    to: number
    from: number
}

export const moveSection = (payload: moveSectionPayload) => {
    return{
        type: MOVE_SECTION,
        payload: payload
    }
}