import React from 'react';

import './about.css';

export function About() {
        const [quote, setQuote] = React.useState('Loading...');
        const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
      
        // We only want this to render the first time the component is created and so we provide an empty dependency list.
        React.useEffect(() => {
      
          fetch('https://api.quotable.io/random')
            .then((response) => response.json())
            .then((data) => {
              setQuote(data.content);
              setQuoteAuthor(data.author);
            })
            .catch();
        }, []);
      
    return (
        <main>
        <div className="background-info">
          <div id="picture" className="picture-box"><img width="400px" src="giselle.png" alt="random" /></div>
  
          <p>
          To quote Giselle from the movie Enchanted, everybody wants to know their true love is true! Considering that the 
          Internet can retrieve just about any piece of information at the click of a button, why not give it a try at your love life?
          </p>
  
          <p>
          Chemistry Calculator<sup>&reg;</sup> uses a real algorithm to test the compatibility of your names. Don't believe it?
          Try entering the same name multiple times!
          </p>
  
          <p>
          And if it doesn't work out, just remember: 
          </p>
  
          <div id="quote" className="quote-box bg-light text-dark">
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
          </div>
        </div>
      </main>
    );
}