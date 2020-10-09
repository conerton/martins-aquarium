const quoteCollection = [
    {
        location: "Bahamas",
        text: "Try the Bahama Mama!",
        author: "Mike Love"
    },
    {
        location: "Cuba",
        text: "Try the cigars!",
        author: "Dennis Wilson",
    },
    {
        location: "Aruba",
        text: "Ryhmes with Cuba!",
        author: "Carl Passions",
    }
]

export const useQuote = () => {
    return quoteCollection.slice()
}

export const addQuote = (quoteObj) => {
    quoteCollection.push(quoteObj)
}