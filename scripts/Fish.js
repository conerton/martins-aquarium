export const Fish = (fishObj) => {
    return `
    <div class="fish">
                        <div class="fish__image"><img
                                src="${fishObj.image}"
                                alt=""></div>
                                    <div class="fishGroup">
                                        <p class="fish__name">Name: ${fishObj.name}</p>
                                        <p class="fish__species">Species: ${fishObj.species}</p>
                                        <p class="fish__length">Length: ${fishObj.length}</p>
                                        <p class="fish__location">Location: ${fishObj.location}</p>
                                        <p class="fish__diet">Diet: ${fishObj.diet}</p>
                                    </div>
                    </div>
    `
}