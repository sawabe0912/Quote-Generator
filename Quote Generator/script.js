let apiQuotes = [];
let genBtn = document.getElementById("geneBtn");
const loader = document.getElementById('loader');

const quoteContainer = document.getElementById('quote-container');

genBtn.addEventListener("click", newQuote);

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}


function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function newQuote(){
	loading();
	let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	
	document.getElementById("text").innerHTML = (quote.text);

	if(quote.author === null){
		document.getElementById("author").innerHTML = "Unknown";
	}else{
        document.getElementById("author").innerHTML = (quote.author);
	}
      complete();
}


async function getQuotes(){
	loading();
	const apiUrl = 'https:type.fit/api/quotes';
	try{
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch(error){

	}
}

window.onload = (event) => {
  
};

getQuotes();