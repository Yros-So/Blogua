export const getCommentsData = async () => {
    return [
        {
            _id: "10",
            user: {
                _id: "a",
                name: "Ibrahima So",
            },
            desc: "it was a nice spot, Thank you!",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2024-11-30T17:22:05.092+0000",
        },
        {
            _id: "11",
            user: {
                _id: "b",
                name: "Paul M. Vence",
            },
            desc: "a reply for Ibra",
            post: "1",
            parent: "10",
            replyOnUser: "a",
            createdAt: "2024-12-30T17:22:05.092+0000",
        },
    ]
}