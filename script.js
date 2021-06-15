const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQoutes = [];

//Show Loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

function newQuote(){
    loading();
    const quote = apiQoutes[Math.floor(Math.random() * apiQoutes.length )];
    // console.log(quote);
    if(!quote.author){
        authorText.textContent = 'Unknown'
    }else{
        authorText.textContent = quote.author;
    }
    //Check quote length to determine styling
    if(quote.text.length > 100){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    //Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}



async function getQotes(){
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQoutes = await response.json();
        newQuote();
    }catch(error){
        alert(error);
    }
}

// Tweet Qotes
function tweetQuotes(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuotes);

getQotes();
