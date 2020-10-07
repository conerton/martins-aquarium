/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Misses",
        species: "Tetraodontidae",
        length: "24 inches",
        location: "Indian Ocean",
        food: "Algae, small invertebrates",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgRgmcpWxf-mv2uNrse-pzyvoZkpu3o5PDrg&usqp=CAU"

    },
    {
        name: "Squidward",
        species: "Decapodiformes",
        length: "24 inches",
        location: "Golf of Mexico",
        food: "fish, crustaceans (like shrimp), crabs and even other squids.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPvxLkjM5l0hj2AuuGNFkofryQ7EbtC9uw1Q&usqp=CAU"

    },
    {
        name: "Patrick",
        species: "Asteroidea",
        length: "8 inches",
        location: "Atlantic Ocean",
        food: "clams and oysters, arthropods, small fish and gastropod molluscs",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6LfTRz9IlpThQfEATS9mwQHmzfw3APGsB6g&usqp=CAU"

    }
]

    export const useFish = () => {
        return fishCollection.slice()
    }