const quotes = [
    {
      quote: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "Creativity is intelligence having fun.",
      author: "Albert Einstein"
    },
    {
      quote: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt"
    }
  ];
  
  function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById("quote").innerText = `"${selectedQuote.quote}"`;
    document.getElementById("author").innerText = `- ${selectedQuote.author}`;
  }
  