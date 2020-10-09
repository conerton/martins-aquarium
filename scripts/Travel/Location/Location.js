export const Location = (locationObj) => {
        return `
        <div class="travel__locations">
            <div class="travel">
                <p class="location__name">${locationObj.name}</p>
                <p class="location__image"> <img src="${locationObj.image}" alt="Location Image"> </p>
                <p class="location__geo">${locationObj.geo}</p>
            </div>
         </div>
        `
}