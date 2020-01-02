$(document).ready(function () {


  var topics = ["Iron Man", "Captain America", "Thor", "Hawkeye", "Hulk", "Ant-Man", "Spider-Man", "Gamora", "Groot", "Thanos"]

  // buttons for the array 

  function renderButtons() {
    // loop through the array
    topics.forEach(topic => {
      // created button html element using jquery
      const $button = $('<button>');
      $button.text(topic);
      // add a class called topic
      $button.addClass('topic');
      // addeed an attribute 
      $button.attr('data-character', topic);
      // append that created button onto the #buttons-view div
      $('#buttons-view').append($button);
    });
  }

  renderButtons();

  // new characters created by a button

  $("#add-character").on("click", function (event) {
    event.preventDefault();

    var newCharacter = $("#character-input").val();

    var $newButton = $("<button>")
    $newButton.text(newCharacter);
    $newButton.addClass('topic');
    $newButton.attr('data-character', newCharacter);
    $('#buttons-view').append($newButton);

    // Function to display gifs on the array 

    $('.topic').on('click', function () {
      var selectedCharacter = $(this).attr("data-character")

      // var apiKey = "MJelyQnaKKOLE5449vqoRJKL11SK3ZQW";

      var urlQuery = "https://api.giphy.com/v1/gifs/search?q=" + selectedCharacter
        + "&api_key=MJelyQnaKKOLE5449vqoRJKL11SK3ZQW&limit=10";

      $.ajax({
        url: urlQuery,
        method: "GET"

      }).then(response => {
        var results = response.data
        $("#gifs-appear-here").empty()

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          // Rating info 
          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          //Tittle info
          var title = results[i].title;

          var p1 = $("<p>").text("Title: " + title);


          //image 
          var characterImage = $('<img>');
          // characterImage.addClass()
          gifDiv.addClass("gifDiv");
          characterImage.attr("src", results[i].images.original.url);

          gifDiv.prepend(p, p1);
          gifDiv.prepend(characterImage);


          $("#gifs-appear-here").prepend(gifDiv);
        }
      })

   
    })
  

  })

  // function to display gifs appended to the new buttons

  $('.topic').on('click', function () {
    var selectedCharacter = $(this).attr("data-character")

    // var apiKey = "MJelyQnaKKOLE5449vqoRJKL11SK3ZQW";

    var urlQuery = "https://api.giphy.com/v1/gifs/search?q=" + selectedCharacter
      + "&api_key=MJelyQnaKKOLE5449vqoRJKL11SK3ZQW&limit=10";

    $.ajax({
      url: urlQuery,
      method: "GET"

    }).then(response => {
      var results = response.data
      // console.log(response.data)
      $("#gifs-appear-here").empty()

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        // Rating info 
        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        //Tittle info
        var title = results[i].title;

        var p1 = $("<p>").text("Title: " + title);


        //image 
        var characterImage = $('<img>');
        // characterImage.addClass()  
        gifDiv.addClass("gifDiv");
        characterImage.attr("src", results[i].images.original.url);

        gifDiv.prepend(p, p1);
        gifDiv.prepend(characterImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
    })


  })

  
  
  // Function pausing Gifs

  // $(".gifDiv").on("click", function () {

  //   let = state = $(this).attr('data-character');

  //   if (results === 'still') {
  //     $(this).attr('src', $(this).attr('data-animate'));
  //     $(this).attr('data-character', 'animate');
  //   } else {
  //     $(this).attr('src', $(this).attr('data-still'));
  //     $(this).attr('data-character', 'still');
  //   }
  // });



});


