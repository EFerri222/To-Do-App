// Remove to-do item when button is clicked
$("button").on("click", function() {
    $(this).parent().remove();
});

// Toggle completed when to-do item is clicked 
$("li").on("click", function() {
    $(this).toggleClass("completed");
});

// Add To-Do item when Enter is pressed on input
$("input").on("keypress", function(event) {
    if(event.keyCode === 13 && $(this).val() !== "") {
        $("ul").append("<li class=\"todo-item\"><button>Delete</button> " + $(this).val() + "</li>");
        $(this).val("");
    }
});