import { Fish } from "./Fish.js"
import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"

// export const FishList = () => {

// const contentElement = document.querySelector(".fishTravel")

// const fishes = mostHolyFish()

// // const fishes = regularFish()

// let fishHTMLRepresentations = ""

// for (const fish of fishes) {
//     fishHTMLRepresentations += Fish(fish)
// }

// contentElement.innerHTML += `
// <section class="fishList">
// <h3> All of Martin's Fish </h3>
// <div class="fishContainer"> ${fishHTMLRepresentations} </div>
// </section>
// `
// }

// const soldierFishes = soldierFish()

// let fishHTMLRepresentations = ""

// for (const fish of fishes) {
//     fishHTMLRepresentations += Fish(fish)
// }

// contentElement.innerHTML += `
// <section class="fishList">
// <h3> All of Martin's Fish </h3>
// <div class="fishContainer"> ${fishHTMLRepresentations} </div>
// </section>
// `





const buildFishContainerHTML = (arrayOfFish) => {
  // debugger

  // Generate all of the HTML for all of the fish
  let fishHTMLRepresentations = ""
  for (const fish of arrayOfFish) {

    /*
      Invoke the Fish component function
      and pass the current fish object as an argument.
      Each time, add the return value to the
      fishHTMLRepresentations variable with `+=`
    */

    // debugger
    fishHTMLRepresentations += Fish(fish)

  }

  return fishHTMLRepresentations
}


export const FishList = () => {
  const contentElement = document.querySelector(".fishTravel")


  // Building HTML for holy fish
  const holyFishes = mostHolyFish()
  console.log(holyFishes)

  const holyFishHTML = buildFishContainerHTML(holyFishes)
  console.log(holyFishHTML)

  // Building HTML for soldier fish
  const soldierFishes = soldierFish()
  const soldierFishHTML = buildFishContainerHTML(soldierFishes)

  // Building HTML for non holy and non soldier fish
  const regularFishes = nonHolyFish()
  const regularFishHTML = buildFishContainerHTML(regularFishes)

  // debugger

  // Add a section, and all of the fish to the DOM
  contentElement.innerHTML += `
  <section class="fishList">
    <h3>Fish List</h3>
    <div class="fishGroup">
      ${holyFishHTML}
      ${soldierFishHTML}
      ${regularFishHTML}
    </div>
  </section>
`
}
