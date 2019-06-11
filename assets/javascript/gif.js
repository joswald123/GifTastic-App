$(document).ready(function () {


  var topics = ["Iron Man", "Captain America", "Thor", "Hawkeye", "Hulk", "Ant-Man", "Spider-Man", "Gamora", "Groot", "Thanos"]

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


  $("#add-character").on("click", function (event) {
    event.preventDefault();

    var newCharacter = $("#character-input").val();
    console.log(newCharacter)
    var $newButton = $("<button>")
    $newButton.text(newCharacter);
    $newButton.addClass('topic');
    $newButton.attr('data-character', newCharacter);
    $('#buttons-view').append($newButton);

    $('.topic').on('click', function () {
      var selectedCharacter = $(this).attr("data-character")
      console.log(selectedCharacter)
  
      var apiKey = "MJelyQnaKKOLE5449vqoRJKL11SK3ZQW";
  
      var urlQuery = "https://api.giphy.com/v1/gifs/search?q=" + selectedCharacter
        + "&api_key=MJelyQnaKKOLE5449vqoRJKL11SK3ZQW&limit=10";
  
      $.ajax({
        url: urlQuery,
        method: "GET"
  
      }).then(response => {
        var results = response.data
        console.log(response.data)
  
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");
  
          var rating = results[i].rating;
  
          var p = $("<p>").text("Rating: " + rating);
  
          var characterImage = $('<img>');
          // characterImage.addClass()
          gifDiv.addClass("gifDiv");
          characterImage.attr("src", results[i].images.original.url);
  
          gifDiv.prepend(p);
          gifDiv.prepend(characterImage);
  
  
          $("#gifs-appear-here").prepend(gifDiv);
        }
      })
  
      $(".gifDiv").on("click", function () {
  
        let = state = $(this).attr('data-state');
  
        if (results === 'still') {
          $(this).attr('src', $(this).attr('data-animate'));
          $(this).attr('data-state', 'animate');
        } else {
          $(this).attr('src', $(this).attr('data-still'));
          $(this).attr('data-state', 'still');
        }
      });
    })

  })


  $('.topic').on('click', function () {
    var selectedCharacter = $(this).attr("data-character")
    console.log(selectedCharacter)

    var apiKey = "MJelyQnaKKOLE5449vqoRJKL11SK3ZQW";

    var urlQuery = "https://api.giphy.com/v1/gifs/search?q=" + selectedCharacter
      + "&api_key=MJelyQnaKKOLE5449vqoRJKL11SK3ZQW&limit=10";

    $.ajax({
      url: urlQuery,
      method: "GET"

    }).then(response => {
      var results = response.data
      console.log(response.data)
      $("#gifs-appear-here").empty()
      
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var characterImage = $('<img>');
        // characterImage.addClass()
        gifDiv.addClass("gifDiv");
        characterImage.attr("src", results[i].images.original.url);

        gifDiv.append(p);
        gifDiv.append(characterImage);

        $("#gifs-appear-here").append(gifDiv);
      }
    })

    $(".gifDiv").on("click", function () {

      let = state = $(this).attr('data-state');

      if (results === 'still') {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', 'animate');
      } else {
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state', 'still');
      }
    });
  })

});
