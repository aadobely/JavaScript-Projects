// Function that assigns two variables and uses getElementById
function myFunction() {
    // Creating two variables with string values
    var sentence1 = "This is the beginning of the string";
    var sentence2 = " and this is the end of the string";
    
    // Concatenating the two variables
    var fullSentence = sentence1 + sentence2;
    
    // Using getElementById to display the result in a paragraph element
    document.getElementById("demo").innerHTML = fullSentence;
}