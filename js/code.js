var dragItem = document.getElementById("cover1");
var dragItem2 = document.getElementById("cover2");
var dragItem3 = document.getElementById("cover3");
var dropLoc = document.getElementById("book");
var check = [];


dragItem.ondragstart = function(event){
    event.dataTransfer.setData('key', event.target.id);
    console.log("its dragging");
}
dragItem2.ondragstart = function(event){
    event.dataTransfer.setData('key', event.target.id);
    console.log("its dragging");
}
dragItem3.ondragstart = function(event){
    event.dataTransfer.setData('key', event.target.id);
    console.log("its dragging");
}

dropLoc.ondragover = function(event){
    event.preventDefault(); 
    console.log("its dragover");
}

dropLoc.ondrop = function(event){ 
    var dropItem = event.dataTransfer.getData('key');
    event.preventDefault();
    console.log("its dropped");
    var myElement = document.getElementById(dropItem);
    
    if (check.includes(dropItem)){
        console.log("already exists");
    } else {
        var myOldElement = check[0];
        console.log(myOldElement);
        check.pop();
        check.push(dropItem);
        console.log(check);
        
       var myNewElement = document.createElement('img');
        myNewElement.src = myElement.src;
        if (dropLoc.hasChildNodes()) {
            console.log(dropLoc.childNodes);
            dropLoc.removeChild(dropLoc.childNodes[0]);
//            dropLoc.removeChild(myOldElement);
//        document.getElementById(myOldElement).style.display='none';
        }
        dropLoc.appendChild(myNewElement);
        
    }
    
}