interface Isection {
    title: string,
    content: string[]
}
type Data = {
    [index: string] : Isection
}
export const data: Data = {
    sec1: {
        title: "🍎 Done",
        content: ['id1', 'id2', 'id3']
    },
    sec2: {
        title: "😬 Do Today",
        content: ['id2', 'id3', 'id1']
    },
    sec3: {
        title: "To Do",
        content: ['id3', 'id1']
    },
    sec4: {
        title: "😪 Later",
        content: ['id2', 'id3']
    },
}

export const sectionToTaskMap = (task: string) => {
    return d[task];
}

const d: {[index: string]: string} = {
    id1: "task 1",
    id2: "task 2",
    id3: "task 3",
    id4: "task 4"
}

