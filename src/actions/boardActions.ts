import { Dispatch } from "redux";

export const MOVE_SECTION = "boardActions/MOVE_SECTION";
export const ADD_SECTION = "boardActions/ADD_SECTION";
export const REMOVE_SECTION = "boardActions/REMOVE_SECTION";
export const RENAME_SECTION = "boardActions/RENAME_SECTION";

export const FETCH_INITIAL_DATA = "boardActions/FETCH_INITIAL_DATA";

export const MOVE_TICKET_WITHIN_SAME_SECTION =
  "boardActions/MOVE_TICKET_WITHIN_SAME_SECTION";
export const MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER =
  "boardActions/MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER";
export const ADD_TICKET_TO_SECTION = "boardActions/ADD_TICKET";
export const REMOVE_TICKET_FROM_SECTION = "boardActions/REMOVE_TICKET";
export const EDIT_TICKET_TITLE = "boardActions/EDIT_TICKET_TITLE";
export const SET_IS_DATA_LOADED = "boardActions/SET_IS_DATA_LOADED";
export const SET_MODAL_DETAILS = "boardActions/SET_MODAL_DETAILS";

export const loadInitalData =
  () => async (dispatch: Dispatch<any>, getState: any) => {
    const data = await (
      await fetch(
        `https://run.mocky.io/v3/6a02e464-e993-4523-9ced-2445a693ed6f`
      )
    ).json();
    console.log("data from api", data);
    dispatch({
      type: FETCH_INITIAL_DATA,
      payload: data,
    });
    return dispatch(
      setIsDataLoaded({
        isDataLoaded: true,
      })
    );
    // return dispatch({
    //   type: SET_IS_DATA_LOADED,
    //   payload: {
    //     isDataLoaded: true
    //   },
    // })
  };

export type moveTicketPayload = {
  ticketId: string;
  fromIndex: number;
  toIndex: number;
  fromSectionId: string;
  toSectionId: string;
};

export const moveTicketWithinSameSection = (payload: moveTicketPayload) => {
  return {
    type: MOVE_TICKET_WITHIN_SAME_SECTION,
    payload,
  };
};

export const moveTicketFromOneSectionToAnother = (
  payload: moveTicketPayload
) => {
  return {
    type: MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER,
    payload,
  };
};

type addOrRemoveTicketToSectionPayload = {
  sectionId: string;
  ticketDetails?: {
    id: string;
    title?: string;
  };
};

export const addTicketToSection = (
  payload: addOrRemoveTicketToSectionPayload
) => {
  return {
    type: ADD_TICKET_TO_SECTION,
    payload,
  };
};

export const removeTicketFromSection = (
  payload: addOrRemoveTicketToSectionPayload
) => {
  return {
    type: REMOVE_TICKET_FROM_SECTION,
    payload,
  };
};
type editTicketTitlePayload = {
  id: string;
  title?: string;
};
export const editTicketTitle = (payload: editTicketTitlePayload) => {
  return {
    type: EDIT_TICKET_TITLE,
    payload: payload,
  };
};

type moveSectionPayload = {
  to: number;
  from: number;
  sectionId: string;
};

export const moveSection = (payload: moveSectionPayload) => {
  return {
    type: MOVE_SECTION,
    payload: payload,
  };
};

export type addSectionPayload = {
  sectionId: string;
  sectionTitle: string;
};

export const addSection = (payload: addSectionPayload) => {
  return {
    type: ADD_SECTION,
    payload: payload,
  };
};

type removeSectionPayload = {
  sectionId: string;
};

export const removeSection = (payload: removeSectionPayload) => {
  return {
    type: REMOVE_SECTION,
    payload: payload,
  };
};

type renameSectionPayload = {
  sectionId: string;
  sectionTitle: string;
};

export const renameSection =
  (payload: renameSectionPayload) => async (dispatch: any) => {
    const data = await (
      await fetch(
        `https://run.mocky.io/v3/6a02e464-e993-4523-9ced-2445a693ed6f`
      )
    ).json();
    console.log(data);
    return dispatch({
      type: FETCH_INITIAL_DATA,
      payload: data,
    });
  };

type setIsDataLoadedPayload = {
  isDataLoaded: boolean;
};
export const setIsDataLoaded = (payload: setIsDataLoadedPayload) => {
  return {
    type: SET_IS_DATA_LOADED,
    payload: payload,
  };
};

type modalDetailsTaskPayload = {
  isModalOpen: boolean;
  modalType: "DELETE_TASK" | "DELETE_SECTION" | "";
  modalProps: {
    modalText: string;
    sectionId: string;
    ticketDetails?: {
      id: string;
      title?: string;
    };
  };
};

export const setModalDetails = (payload: modalDetailsTaskPayload) => {
  return {
    type: SET_MODAL_DETAILS,
    payload: payload,
  };
};
