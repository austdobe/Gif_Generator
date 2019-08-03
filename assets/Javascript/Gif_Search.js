$(document).ready(function(){
    //set query URL for starting gifs
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=w1KQjzOLh8MH06aaFFX6dHG4DuG8vv5D&limit=10&rating=G";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        
        for(var i = 0; i<10; i++){
            console.log(response.data[i].images.looping.mp4)
            var gifDiv = $("<img>").addClass("card")
            gifDiv.attr("src", response.data[i].images.fixed_height.url)
            $("#displayGif").append(gifDiv)
        }
    });
    $("#search").on("click", function(){
    var subject = $("#textField").val().trim()
    var userURL = "https://api.giphy.com/v1/gifs/search?api_key=w1KQjzOLh8MH06aaFFX6dHG4DuG8vv5D&q="+subject+"&limit=25&offset=0&rating=G&lang=en"
    console.log(subject)
    $.ajax({
        url: userURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        $("#displayGif").text(" ")
        
        for(var i = 0; i<10; i++){
            console.log(response.data[i].images.looping.mp4)
            var gifDiv = $("<img>").addClass("card")
            gifDiv.attr("src", response.data[i].images.fixed_height.url)
            $("#displayGif").append(gifDiv)
        }
    });
    })
    $("#gif1").on("click", function(){
        var subject = "cats"
        var userURL = "https://api.giphy.com/v1/gifs/search?api_key=w1KQjzOLh8MH06aaFFX6dHG4DuG8vv5D&q="+subject+"&limit=25&offset=0&rating=G&lang=en"
        console.log(subject)
        $.ajax({
            url: userURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            $("#displayGif").text(" ")
            
            for(var i = 0; i<10; i++){
                console.log(response.data[i].images.looping.mp4)
                var gifDiv = $("<img>").addClass("card")
                gifDiv.attr("src", response.data[i].images.fixed_height.url)
                $("#displayGif").append(gifDiv)
            }
        });
        })
    $("#gif2").on("click", function(){
        var subject = "battle"
        var userURL = "https://api.giphy.com/v1/gifs/search?api_key=w1KQjzOLh8MH06aaFFX6dHG4DuG8vv5D&q="+subject+"&limit=25&offset=0&rating=G&lang=en"
        console.log(subject)
        $.ajax({
            url: userURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            $("#displayGif").text(" ")
            
            for(var i = 0; i<10; i++){
                console.log(response.data[i].images.looping.mp4)
                var gifDiv = $("<img>").addClass("card")
                gifDiv.attr("src", response.data[i].images.fixed_height.url)
                $("#displayGif").append(gifDiv)
            }
        });
        })
    $("#gif3").on("click", function(){
        var subject = "gamer"
        var userURL = "https://api.giphy.com/v1/gifs/search?api_key=w1KQjzOLh8MH06aaFFX6dHG4DuG8vv5D&q="+subject+"&limit=25&offset=0&rating=G&lang=en"
        console.log(subject)
        $.ajax({
            url: userURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            $("#displayGif").text(" ")
            
            for(var i = 0; i<10; i++){
                console.log(response.data[i].images.looping.mp4)
                var gifDiv = $("<img>").addClass("card")
                gifDiv.attr("src", response.data[i].images.fixed_height.url)
                $("#displayGif").append(gifDiv)
            }
        });
        })
});