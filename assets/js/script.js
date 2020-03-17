// Add To-Do item when Enter is pressed on input
$("input").on("keypress", function(event) {
    if(event.keyCode === 13 && $(this).val() !== "") {
        $("ul").append("<li><span class=\"remove\">X</span> " + $(this).val() + "</li>");
        $(this).val("");
    }
});

// Remove to-do item when button is clicked
$(document).on("click", ".remove", function() {
    $(this).parent().remove();
});

// Toggle completed when to-do item is clicked 
$(document).on("click", "li", function() {
    $(this).toggleClass("completed");
});