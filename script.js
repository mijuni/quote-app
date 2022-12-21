const btn = document.querySelector("button");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

btn.addEventListener("click", getQuote);

function getQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      quote.innerHTML = data.quote;
      author.innerHTML = data.author;
    });
}
