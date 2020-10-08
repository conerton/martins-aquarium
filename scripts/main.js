import { useFish } from "./FishDataProvider.js"
import { FishList } from "./FishList.js"

const allTheFish = useFish()

FishList()

// console.log(allTheFish)

for (const fish of allTheFish) {
    console.log(fish)
}

