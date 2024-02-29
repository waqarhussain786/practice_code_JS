var button = document.getElementById("add");
var input = document.getElementById("user_input");
var ul = document.getElementById("item_list");

function afterClick(){
    if(ListLength()){
        elementCreator()
    }
}

function afterKeypress(e){
    if(ListLength() && e.key === 'Enter'){
        elementCreator()
    }
}

function ListLength(){
    return input.value.length > 0;
}

function elementCreator(){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
}

button.addEventListener("click", afterClick);
input.addEventListener("keypress", afterKeypress);































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


// var button = document.getElementById("add");
// var input = document.getElementById("user_input");
// var ul = document.getElementById("item_list");

// function inputLength(){
//     return input.value.length
// }

// function afterClick(){
//     if(inputLength() > 0){
//         createElement()
//     }
// }
// function afterkeyPress(e){
//     if(inputLength() > 0 && e.key === "Enter"){
//         createElement()
//     }
// }
// function createElement(){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
// }

// button.addEventListener("click", afterClick)
// input.addEventListener("keypress", afterkeyPress)













// button.addEventListener("click", function(){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("testing"));
//     ul.appendChild(li);
// })