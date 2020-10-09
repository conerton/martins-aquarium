import { Fish } from "./Fish.js"
import { useFish } from "./FishDataProvider.js"

export const FishList = () => {

const contentElement = document.querySelector(".fishTravel")

const fishes = useFish()

let fishHTMLRepresentations = ""

for (const fish of fishes) {
    fishHTMLRepresentations += Fish(fish)
}

contentElement.innerHTML += `
<section class="fishList">
<h3> All of Martin's Fish </h3>
<div class="fishContainer"> ${fishHTMLRepresentations} </div>
</section>
`
}