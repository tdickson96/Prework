// Click button to shrink box size
document.getElementById("shrinkBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "50px";
    document.getElementById("box").style.width = "50px";


});

// Click button to grow box size
document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";

});

// Click button to change the box color to blue
document.getElementById("blueBtn").addEventListener("click", function(){
    
    document.getElementById("box").style.backgroundColor = "blue";

});

// Click button to change the box color white and fade into webpage
document.getElementById("fadeBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "white";

});


// Click button to reset the color and dimensions of the box
document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";

});
