

const add =  document.querySelector(".add-button");

add.addEventListener('click' , ()=>{
    newElement();
})
function newElement() {
    var newDiv = document.createElement("div");
    var inputValue = document.querySelector(".text").value;
    var t = document.createTextNode(inputValue);
    newDiv.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.querySelector(".newElement").appendChild(newDiv);
    }
document.querySelector(".text").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newDiv.appendChild(span);
  
    
  }

