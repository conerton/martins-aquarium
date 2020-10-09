import { Tip } from "./Tip.js"
import { useTip } from "./TipDataProvider.js"

export const TipList = () => {

    const contentElement = document.querySelector(".tipList")

    const thinker = useTip()

    let tipHTMLRepresentations = ""

    for (const help of helper) {
    tipHTMLRepresentations += Tip(help)
    }

    contentElement.innerHTML += `
    <aside class="tipList">
    <h3> Helpful Tips </h3>
    <div class="tips"> ${tipHTMLRepresentations} </div>
    </aside>
    `
}