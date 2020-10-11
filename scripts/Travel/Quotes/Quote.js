export const Quote = (quoteObj) => {
    return `
    <div class="travel__quotes">
        <div class="travel">
            <p class="quote__location">${quoteObj.location}</p>
            <p class="quote__text"> ${quoteObj.text} </p>
            <p class="quote__author">${quoteObj.author}</p>
         </div>
     </div>
    `
}