let quotes = [];
fetch('quotes.json')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((dat) => {
      quotes.push(dat);
    });
  });

function displayText() {
  const quote = document.getElementById('quote');

  const index = Math.floor(Math.random() * 95);
  let singleQuote = quotes[index];

  // let output = `<h3 class="quote-text">${singleQuote.quote}</h3 ><p class="author-text"> ~ ${singleQuote.author}</p>`;

  let output = `<blockquote><p>${singleQuote.quote}</p><cite>—${singleQuote.author}</cite><span class="bar"></span></blockquote>`;
  quote.innerHTML = output;
}

setInterval(displayText, 5000);
