//Event listener for all BUTTON elements
    $("button").on("click", function() {
    //in this case the "this" keyword refers to teh button that was 
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=zy1nrXd8zbv0HS0RMmqRQcXCXJvWnwI0&limit=10";
   // Performing our AJAX GET request
   $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After the data comes back from the API
    .then(function(response) {
      // Storing an array of results in the topics variable
      var topics = response.data;
      // Looping over every result item
      for (var i = 0; i < topics.length; i++) {
        // Only taking action if the photo has an appropriate rating
        if (topics[i].rating !== "r" && topics[i].rating !== "pg-13") {
          // Creating a div for the gif
          var gifDiv = $("<div>");
          // Storing the result item's rating
          var rating = topics[i].rating;
          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + rating);
          // Creating an image tag
          var personImage = $("<img>");
          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          personImage.attr("src", topics[i].images.fixed_height.url);
          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(personImage);
          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $("#gifs-appear-here").prepend(gifDiv);
        }
      }
    });
});

// This .on("click") function to find reality star 
$("#findRealityStar").on("click", function(event) {
    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();
    // Here we grab the text from the input box
    var person = $("#enterRealityStar").val();

    // Here we construct our URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=zy1nrXd8zbv0HS0RMmqRQcXCXJvWnwI0&limit=10";
    // hit the queryURL and get ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data comes back from the API
        .then(function(response) {
            console.log(response);
          // Storing an array of results in the topics variable
          var topics = response.data;
          // Looping over every result item
          for (var i = 0; i < topics.length; i++) {
            // Only taking action if the photo has an appropriate rating
            if (topics[i].rating !== "r" && topics[i].rating !== "pg-13") {
              // Creating a div for the gif
              var gifDiv = $("<div>");
              // Storing the result item's rating
              var rating = topics[i].rating;
              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + rating);
              // Creating an image tag
              var personImage = $("<img>");
              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              //personImage.attr("src", topics[i].images.fixed_height_still.url);
              personImage.attr("src", topics[i].images.fixed_height.url);
     
            //   personImage.attr("state", "still")
              // Appending the paragraph and personImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(personImage);
              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              $("#gifs-appear-here").prepend(gifDiv);
            }
          }
                //create a new button for each search option
                var newButton = $("<button>");
                $(newButton).attr("data-person", person);
                $("#buttons").append(newButton);
                $(newButton).text(person);
        });
  });



// // Function for when animating gif and stop moving gif
// $(personImage).on('click', function () {
//     event.preventDefault();
//     var state = $(this).attr('data-state');

//     // Make gif either animated or still depending on 'data-state' value
//     if (state === 'still') {
//         $(this).attr('src', $(this).attr('data-animate'));
//         $(this).attr('data-state', 'animate');
//     } else {
//         $(this).attr('src', $(this).attr('data-still'));
//         $(this).attr('data-state', 'still');
//     }

  
//       if (state == "still") {
//         $("<img>").attr("state", "animated");
//       } else {
//         $("<img>").attr("state", "still");
//     }
