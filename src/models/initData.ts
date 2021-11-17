export type Data = {
  "sections": {
    "byId": {
      [index: string]: {
        "id": string,
        "title": string,
        "tickets": string[]
      };
    },
    "allIds": string[]
  },
  "tickets": {
    "byId": {
      [index: string]: {
        "id": string,
        "content": string
      }
    },
    "allIds": string[]
  },
  isDataLoaded: boolean,
  modalDetails: {
    isModalOpen: boolean,
    modalType: ('DELETE_TASK' | 'DELETE_SECTION' | '')
    modalProps: {
      modalText: string,
      sectionId: string,
      ticketDetails?: {
        id: string;
        title?: string;
    };
    }
  }
}
// export const data: Data = {
//   "sections": {
//     "byId": {
//       "sec1": {
//         "id": "sec1",
//         "title": "Done",
//         "tickets": ["tic1", "tic2", "tic3"]
//       },
//       "sec2": {
//         "id": "sec2",
//         "title": "Do Today",
//         "tickets": ["tic4", "tic5", "tic6"]
//       },
//       "sec3": {
//         "id": "sec3",
//         "title": "To Do",
//         "tickets": ["tic7", "tic8", "tic9"]
//       },
//       "sec4": {
//         "id": "sec4",
//         "title": "Later",
//         "tickets": ["tic10"]
//       }
//     },
//     "allIds": ["sec1", "sec2", "sec3", "sec4"]
//   },
//   "tickets": {
//     "byId": {
//       "tic1": {
//         "id": "tic1",
//         "content": "task 1"
//       },
//       "tic2": {
//         "id": "tic2",
//         "content": "task 2"
//       },
//       "tic3": {
//         "id": "tic3",
//         "content": "task 3"
//       },
//       "tic4": {
//         "id": "tic4",
//         "content": "task 4"
//       },
//       "tic5": {
//         "id": "tic5",
//         "content": "task 5"
//       },
//       "tic6": {
//         "id": "tic6",
//         "content": "task 6"
//       },
//       "tic7": {
//         "id": "tic7",
//         "content": "task 7"
//       },
//       "tic8": {
//         "id": "tic8",
//         "content": "task 8"
//       },
//       "tic9": {
//         "id": "tic9",
//         "content": "task 9"
//       },
//       "tic10": {
//         "id": "tic10",
//         "content": "task 10"
//       }

//     },
//     "allIds": ["tic1", "tic2", "tic3", "tic4", "tic5", "tic6", "tic7", "tic8", "tic9", "tic10"]
//   }
// }