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
        diet: "Algae, small invertebrates",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgRgmcpWxf-mv2uNrse-pzyvoZkpu3o5PDrg&usqp=CAU"

    },
    {
        name: "Squidward",
        species: "Decapodiformes",
        length: "24 inches",
        location: "Golf of Mexico",
        diet: "fish, crustaceans (like shrimp), crabs and even other squids.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPvxLkjM5l0hj2AuuGNFkofryQ7EbtC9uw1Q&usqp=CAU"

    },
    {
        name: "Patrick",
        species: "Asteroidea",
        length: "8 inches",
        location: "Atlantic Ocean",
        diet: "clams and oysters, arthropods, small fish and gastropod molluscs",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6LfTRz9IlpThQfEATS9mwQHmzfw3APGsB6g&usqp=CAU"

    }
]

    export const useFish = () => {
        return fishCollection.slice()
    }

    // export const addFish = (fishObject) => {
    //     fishCollection.push(fishObject)
    // }

    export const mostHolyFish = () => {
        // 3, 6, 9, 12, etc... fish
        
        const holyFish = []
    
        for (const fish of fishCollection) {
            if (fish.length % 3 === 0 ) {
                holyFish.push(fish)
            }
        }
    
        return holyFish
    }
    
    export const soldierFish = () => {
        // 5, 10, 15, 20, 25, etc... fish
        return soldiers
    }
    
    export const nonHolyFish = () => {
        // Any fish not a multiple of 3 or 5
        return regularFish
    }