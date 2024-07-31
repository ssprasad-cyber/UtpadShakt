var category = 'computers';
const quotes = document.getElementById('quote-text');
const authors = document.getElementById('quote-author');
fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
    headers: { 'X-Api-Key': '1zKrSciWboOs65XzGki8CQ==KweZO5UeOcKWm1o8' }
})
    .then(response => response.json())
    .then(result => {
        console.log(result);
        quotes.textContent = result[0].quote;
        authors.textContent = ' - ' + result[0].author;
    })
    .catch(error => {
        console.error('Error: ', error);
        if (error.message === undefined) {
            quotes.innerHTML = "Buddy, quotes don't work without internet";
            authors.textContent = ' - developer';
        } else {
            quotes.innerHTML = 'An error occurred when calling the Quotes API: ' + error.message;
        }
    });
