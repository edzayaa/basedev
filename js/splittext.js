function setupSplits() {
  const quotes = document.querySelectorAll(".quote");
    quotes.forEach(quote => {
        // Reset if needed
        if(quote.anim) {
            quote.anim.progress(1).kill();
            quote.split.revert();
        }

        quote.split = new SplitText(quote, { 
            type: "lines,words,chars",
            linesClass: "split-line"
        });

        // Set up the anim
        quote.anim = gsap.from(quote.split.chars, {
        scrollTrigger: {
            trigger: quote,
            toggleActions: "restart pause resume reverse",
            start: "top 50%",
        },
        duration:2.5,
        ease: "elastic.out(1,0.3)",
        y: -250
        });
    });
  
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();