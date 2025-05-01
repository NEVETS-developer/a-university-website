document.addEventListener("scroll", () => {
    const quotes = document.querySelectorAll(".quote");
    const triggerHeight = window.innerHeight * 0.8; 
  
    quotes.forEach((quote) => {
      const quoteTop = quote.getBoundingClientRect().top;
  
      if (quoteTop < triggerHeight) {
        quote.classList.add("visible");
      } else {
        quote.classList.remove("visible");
      }
    });
  });
  
  