let apiQoutes = [];

function newQuote(){
    const quote = apiQoutes[Math.floor(Math.random() * apiQoutes.length )];
    console.log(quote);
}



async function getQotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQoutes = await response.json();
        newQuote();
    }catch(error){
        alert(error);
    }
}

getQotes();