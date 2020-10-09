const locationCollection = [
    {
        name: "Bahamas",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEFlhvihRPFfGUx-vuvBuO_OlrXdf4pyO2LA&usqp=CAU",
        geo: "Salt Water"
    },
    {
        name: "Cuba",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNfw9c3Cbu3n8j5C3U64SvC3JF9yxZWkFVWg&usqp=CAU",
        geo: "Salt Water",
    },
    {
        name: "Aruba",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRf2SSENOGPuMvxkVpKqHZ1QQwJELZLFOzx2A&usqp=CAU",
        geo: "Salt Water",
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}

export const addLocation = (locationObj) => {
    locationCollection.push(locationObj)
}