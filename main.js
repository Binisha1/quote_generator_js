let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

let newQuote = [
  {
    quote: "Omagod what is that",
    person: "Cardi B",
  },
  {
    quote: "Anyway chill",
    person: "Nicki minaj",
  },
  {
    quote: "what do kanye do",
    person: "wayne",
  },
  {
    quote: "When you have a dream, you've got to grab it and never let go.",
    person: "Carol Burnett",
  },
  {
    quote: "Nothing is impossible. The word itself says 'I'm possible!'",
    person: "Audrey Hepburn",
  },
  {
    quote: "There is nothing impossible to they who will try.",
    person: "Alexander the Great",
  },
  {
    quote: "The bad news is time flies. The good news is you're the pilot.",
    person: "Michael Altshuler",
  },
];

let button = document.querySelector(".new-quote");

button.addEventListener("click", function () {
  let random = Math.floor(Math.random() * newQuote.length);

  quote.innerText = newQuote[random].quote;
  person.innerText = newQuote[random].person;
});
