const quotes = [
  { isTaylor: true, text: "People haven't always been there for me but music always has." },
  { isTaylor: true, text: "I suffer from girlnextdooritis where the guy is friends with you and that's it." },
  { isTaylor: true, text: "This is a new year. A new beginning. And things will change." },
  { isTaylor: true, text: "I never want to change so much that people can't recognize me." },
  { isTaylor: true, text: "No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind." },
  { isTaylor: true, text: "I'm intimidated by the fear of being average." },
  { isTaylor: true, text: "Just be yourself, there is no one better." },
  { isTaylor: true, text: "It's hard to fight when the fight ain't fair." },
  { isTaylor: true, text: "The lesson I've learned the most often in life is that you're always going to know more in the future than you know now." },
  { isTaylor: true, text: "There's more to life than dating the boy on the football team." },
  { isTaylor: true, text: "If you're horrible to me, I'm going to write a song about it and you won't like it. That's how I operate." },

  // Additional true and false Taylor quotes
  { isTaylor: false, text: "The best way to predict the future is to invent it." },
  { isTaylor: true, text: "You are not the opinion of someone who doesn’t know you." },
  { isTaylor: false, text: "Stay hungry, stay foolish." },
];


function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

export {
  getRandomQuote
}