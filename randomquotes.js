
$(document).ready(function(){
  
    function Getquotes(){
    var Myarrayofquotes =[{
      quote: "Dont cry because its over, smile because it happened.", 
      author: "Unknown"
    }, 
     {quote:"The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
      author: "Helen Keller"},
     {
       quote: "Be yourself; everyone else is already taken", 
       author: "Oscar Wilde"
     }, 
    {
     quote: "I love you not only for what you are, but for what I am when I am with you.",
      author: "Roy Croft"
    },  
    {
     quote: "Create the highest, grandest vision possible for your life, because you become what you believe",
     author: "Oprah Winfrey"}, 
    {
      quote: "When you cant find the sunshine, be the sunshine", 
      author: "Unknown"
    }
     ];
      var TSize= Myarrayofquotes.length ;
      let data = Math.floor(Math.random() * TSize);
     
      for(let i=0; i<TSize; i++){
      var EachQuote = Myarrayofquotes[data].quote;
      var EachAuthor = Myarrayofquotes[data].author;
    }
      $(".quote-text").animate(
        { opacity: 0 },
        500,
        function() {
          $(this).animate({ opacity: 1}, 500);
          $('#text').text(EachQuote);
        }
      );
      $(".quote-author").animate(
        { opacity: 0 },
        500,
        function() {
          $(this).animate({ opacity: 1}, 500);
          $('#author').html('--'+ EachAuthor);
        }
      );
    
      $("body").click(function() {
        $(this).toggleClass('clicked');
       });
    }
      Getquotes();
    $("#new-quote").click(function(){
        $("#text").text(Getquotes());
      $("#text").animate(
        { opacity: 0 },
        500,
         function() {
          $(this).animate({ opacity: 1}, 500);
          $('#text').text();
        }
      );
      $("body").click(function() {
        $(this).toggleClass('clicked');
    }); 
    });
     $("#tweet-quote").on('click',function(){
        window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +  $('#text').text());
    }); 
    });
