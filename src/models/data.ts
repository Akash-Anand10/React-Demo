interface Isection {
    title: string,
    tickets: string[]
}
type Data = {
    [index: string] : Isection
}
export const data: Data = {
    sec1: {
        title: "🍎 Done",
        tickets: ['id1', 'id2', 'id3']
    },
    sec2: {
        title: "😬 Do Today",
        tickets: ['id4', 'id5', 'id6']
    },
    sec3: {
        title: "To Do",
        tickets: ['id7', 'id8']
    },
    sec4: {
        title: "😪 Later",
        tickets: ['id9']
    },
}

type id = {
    content: string,
    section: string
}

export const allTickets: {[index: string]: id} = {
    id1: {
        content: "task 1",
        section: 'sec1',
    },
    id2: {
        content: "task 2",
        section: 'sec1'
    },
    id3: {
        content: "task 3",
        section: 'sec1'
    },
    id4: {
        content: "task 4",
        section: 'sec2'
    },
    id5: {
        content: "task 5",
        section: 'sec2'
    },
    id6: {
        content: "task 6",
        section: 'sec3'
    },
    id7: {
        content: "task 7",
        section: 'sec3'
    },
    id8: {
        content: "task 8",
        section: 'sec1'
    },
    id9: {
        content: "task 9",
        section: 'sec1'
    },
    id10: {
        content: "task 10",
        section: 'sec1'
    },
    id11: {
        content: "task 11",
        section: 'sec1'
    },
    id12: {
        content: "task 12",
        section: 'sec1'
    },
}

