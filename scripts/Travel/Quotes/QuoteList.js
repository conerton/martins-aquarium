import { Quote } from "./Quote.js"
import { useQuote } from "./QuoteDataProvider.js"

export const QuoteList = () => {

    const contentElement = document.querySelector(".fishTravel")

    const thinker = useQuote()

    let quoteHTMLRepresentations = ""

    for (const thought of thinker) {
    quoteHTMLRepresentations += Quote(thought)
    }

    contentElement.innerHTML += `
    <section class="travel">
    <h3> Quotes from the best! </h3>
    <div class="travel__quotes"> ${quoteHTMLRepresentations} </div>
    </section>
    `
}
