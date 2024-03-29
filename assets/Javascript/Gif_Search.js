

//Set Javascript to start after HTML && CSS load
$(document).ready(function(){
    var topics = ["Fast and Furious", "Billy Madison", "The Heat",]
    
    //function to display gifs
    function pullGifs(){

        var subject = $(this).attr("data-subject")
        var userURL = "https://api.giphy.com/v1/gifs/search?api_key=w1KQjzOLh8MH06aaFFX6dHG4DuG8vv5D&q="+ subject +"&limit=25&offset=0&rating=G&lang=en"
        console.log("pull", subject)
        //start the request for subject defined above
        $.ajax({
            url: userURL,
            method: "GET"
        }).then(function(response) {
                console.log(response);
        $("#displayGif").text(" ")
        //loop to add gifs
        for(var i = 0; i<10; i++){
            var gifDiv = $("<div>").addClass("card")
            var gif = $("<img>").addClass("card-img").attr("Id","gif");
            var rating= response.data[i].rating;
            gifDiv.append("Rating: " + rating).addClass("card-title")
            gif.attr("data-state", "still")
            gif.attr("src", response.data[i].images.fixed_height_small.url)
            gifDiv.append(gif)
            $("#displayGif").append(gifDiv)

        }
        $("#gif").on("click", function() {
            var state = $(this).attr("data-state");
            
            if (state === "still") {
            $(this).attr("src",  response.data[i].images.fixed_height_small.url);
            $(this).attr("data-state", "animate");
            } else {
            $(this).attr("src",  response.data[i].images.fixed_height_small_still.url);
            $(this).attr("data-state", "still");
            }
        });
        })

    };

    
    function createButtons(){
        //Clear buttons to start fresh
        $(".myGifs").empty()
        //loop the topics array to create buttons
        for(var j = 0; j<topics.length; j++){
            var gifButtons = $("<button>").addClass("btn-default").attr("data-subject", topics[j])
            gifButtons.text(topics[j])
            $(".myGifs").append(gifButtons)
        }
    }
    //set query URL for starting gifs
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=w1KQjzOLh8MH06aaFFX6dHG4DuG8vv5D&limit=10&rating=G";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        $("#displayGif").text(" ")
        
        for(var i = 0; i<10; i++){
            var gifDiv = $("<div>").addClass("card")
            var gif = $("<img>").addClass("card-img").attr("Id","gif");
            var rating= response.data[i].rating;
            gifDiv.append("Rating: " + rating).addClass("card-title")
            gif.attr("data-state", "still")
            gif.attr("src", response.data[i].images.fixed_height_small.url)
            gifDiv.append(gif)
            $("#displayGif").append(gifDiv)
        }
            $("#gif").on("click", function() {
                var state = $(this).attr("data-state");
                
                if (state === "still") {
                $(this).attr("src",  response.data[i].images.fixed_height_small.url);
                $(this).attr("data-state", "animate");
                } else {
                $(this).attr("src",  response.data[i].images.fixed_height_small_still.url);
                $(this).attr("data-state", "still");
                }
            });
        
    });

    $("#search").on("click", function(e){
        e.preventDefault()
        var subject = $("#textField").val().trim()
        topics.push(subject)
        createButtons()
    })
   
    
    $(document).on("click", ".btn-default", pullGifs)

    createButtons()
});