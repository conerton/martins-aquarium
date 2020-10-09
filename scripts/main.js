import { useFish } from "./Fish/FishDataProvider.js"
import { FishList } from "./Fish/FishList.js"

import { useLocation } from "./Travel/Location/LocationDataProvider.js"
import { LocationList } from "./Travel/Location/LocationList.js"

import { useQuote } from "./Travel/Quotes/QuoteDataProvider.js"
import { QuoteList } from "./Travel/Quotes/QuoteList.js"

import { useTip } from "./Travel/Tips/TipDataProvider.js"
import { TipList } from "./Travel/Tips/TipList.js"

FishList()

QuoteList()

LocationList();

TipList()







// console.log(allTheFish)

// for (const fish of allTheFish) {
//     console.log(fish)
// }

