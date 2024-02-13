var input = document.getElementById("user_input");
var button = document.getElementById("add");
var ul = document.querySelector("ul");


button.addEventListener("click", function(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
});















// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");


// button.addEventListener("click", function(){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
// })

// button.addEventListener("click", function(){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("testing"));
//     ul.appendChild(li);
// })