/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// /***
//   Create the array of quote objects and name it `quotes`.
//   Add at least five quote objects to the `quotes` array.
//   Give each quote object a `quote` and `source` property.
//   Add the `citation` property to at least one object in the array.
//   Add the `year` property to at least one object in the array.
//   Use console.log() to log your array of quotes to the console.
// ***/
var quotes = [

  {
      quote: "I'm going to make him an offer he can't refuse",
      source: "Marlon Brando",
      citation: "The Godfather",
      year: 1972,

  },

  {
      quote: "What we've got here is failure to communicate",
      source: "Strother Martin",
      citation: "Cool Hand Luke",
      year: 1967,

  },

  {
      quote: "Aw, man. I shot Marvin in the face",
      source: "John Travolta",
      citation: "Pulp Fiction",

  },

  {
      quote: "You're gonna need a bigger boat",
      source: "Roy Scheider",
      citation: "Jaws",
      year: 1975,

  },

  {
      quote: "Houston we have a problem",
      source: "Tom Hanks",
      citation: "Apollo 13",
      year: 1995

  },


] ;



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  var rand = Math.floor(Math.random() * (quotes.length ));
  var randQuote = quotes[rand];

  return randQuote;



}


function printQuote() {

    var rand = getRandomQuote();
      var html = '<p class="quote">' + rand['quote'] + '</p>';
      html += '<p class="source">' + rand['source'];
          if(rand['citation']) {
          html += '<span class="citation">' + rand['citation'] +'</span>';
          }

          if(rand['year']) {
            html += '<span class="year">' + rand['year'] + '</span></p>';
          }

      return html;

}


/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.