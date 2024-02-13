var button = document.getElementById("add");
var input = document.getElementById("user_input");
var ul = document.querySelector("ul");




function AddItems() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

button.addEventListener("click", function () {
    if (AddItems() > 0) {
        createListElement();
    }
});

input.addEventListener("keypress", function (e) {
    if (AddItems() > 0 && e.key === 'Enter') {
        createListElement();
    }
});




















// button.addEventListener("click", function () {
//     if(input.value.length > 0){
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     }
// });

// input.addEventListener("keypress", function (e) {
//     if(input.value.length > 0 && e.key === 'Enter'){
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     }
// });












// button.addEventListener("click", function(){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("testing"));
//     ul.appendChild(li);
// })