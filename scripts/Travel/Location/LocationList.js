import { Location } from "./Location.js"
import { useLocation } from "./LocationDataProvider.js"

export const LocationList = () => {

    const contentElement = document.querySelector(".fishTravel")

    const places = useLocation()

    let locationHTMLRepresentations = ""

    for (const place of places) {
    locationHTMLRepresentations += Location(place)
    }

    contentElement.innerHTML += `
    <section class="travel">
    <h3> Places of Harvest </h3>
    <div class="travel__locations"> ${locationHTMLRepresentations} </div>
    </section>
    `
}
