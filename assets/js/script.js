$(document).ready(function() {

    // Add To-Do item when Enter is pressed on input
    $("input").on("keypress", function(event) {
        if(event.keyCode === 13 && $(this).val() !== "") {
            $("ul").append("<li><span>X</span> " + $(this).val() + "</li>");
            $(this).val("");
        }
    });

    // Remove to-do item when X is clicked
    $("ul").on("click", "span", function(event) {
        event.stopPropagation();
        $(this).parent().fadeOut(function() {
            $(this).remove();
        });
    });

    // Toggle completed when to-do item is clicked 
    $("ul").on("click", "li", function() {
        $(this).toggleClass("completed");
    });

});