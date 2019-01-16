// Place-holder for main.js
$(document).ready(function(){

$("#start").on("click", function(event) {
    
    // event.preventDefault();
    console.log("hello");
    var newUser = {
        name: $("#user").val().trim(),
        email: $("#email").val().trim()
    }
    console.log(newUser);

    $.post("api/users", newUser).then(function(data){
        console.log(data)
    });







})

});
