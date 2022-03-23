// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the booFactArray)
	var number = Math.floor((Math.random() * booFactArray.length));
	// We display the fact from the booFactArray that is in the random position we just generated. 
	$("#factText").text(booFactArray[number])
})

// booFactArray holds all of our Boo the Dog facts and is properly open and closed quotated. Changed the variable of booFacts to booFactArray.
var booFactArray = ["Boo is a pomeranian!", "Boo's best friend is another pomeranian named Buddy!", "Boo the Pomeranian is a Pisces born on March 16!", "Boo's favourite food is grass!", "Boo has released two books!" ]

// When the textPink button is pressed...
$("#textPink").on("click", function() {
	// Change funText to pink.
	$("#funText").css("color", "pink")
})
// When the textOrange button is pressed... "click"
$("#textOrange").on("click", function() {
	// Change funText to orange.
	$("#funText").css("color", "orange")
})

// When the textGreen button is pressed... "click"
$("#textGreen").on("click", function() {
	// Change funText to green.
	$("#funText").css("color", "green")
})

// When the boxGrow button is pressed... "boxGrow"
$("#boxGrow").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

// When the boxShrink button is pressed...
$("#boxShrink").on("click", function() {
	// Decrease the size of the box. 
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})