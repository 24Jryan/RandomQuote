const apiURL = "https://api.quotable.io/";
const getQuoteURL = apiURL + "random";

//function to get a random quote
async function getQuote() {
  const response = await fetch(getQuoteURL);
  const data = await response.json();
  return data;
}

//function to display the quote
async function displayQuote() {
  const quote = await getQuote();
  const quoteText = document.getElementById("quote-text");
  quoteText.innerHTML = quote.content;
  const quoteAuthor = document.getElementById("quote-author");
  quoteAuthor.innerHTML = "- " + quote.author;
}

//add event listener to the button
$(document).ready(function() {
  displayQuote();
  const button = document.getElementById("new-quote");
  button.addEventListener("click", displayQuote);
});