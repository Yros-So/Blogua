export const getCommentsData = async () => {
    return [
        {
            _id: "10",
            user: {
                _id: "a",
                name: "Aicha So",
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
            desc: "a reply for Aicha",
            post: "2",
            parent: null,
            replyOnUser: null,
            createdAt: "2024-12-30T17:22:05.092+0000",
        },
        {
            _id: "12",
            user: {
                _id: "c",
                name: "Maissa. Gaye",
            },
            desc: "If it is right, you'd be University !",
            post: "3",
            parent: "10",
            replyOnUser: "b",
            createdAt: "2025-01-01T17:22:05.092+0000",
        },
        {
            _id: "13",
            user: {
                _id: "d",
                name: "Paté. Ndiaye",
            },
            desc: "Tu parle trop je ne comprend pas !",
            post: "4",
            parent: "10",
            replyOnUser: "c",
            createdAt: "2025-01-03T17:22:05.092+0000",
        },
    ]
}