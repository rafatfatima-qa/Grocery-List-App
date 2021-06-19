//main variables
var l = document.getElementById("list");


function addMe() {

  var input = document.getElementById("input");
  var list = document.createElement('li');
  var listText = document.createTextNode(input.value);
  list.appendChild(listText);
  l.appendChild(list);

  //DELETE BUTTON
  var dbutton = document.createElement("button");
  dbutton.className += "button";
  dbutton.style.display = "inline-block";
  // dbutton.style.marginTop = "100px";
  
  

  var dbuttonvalue = document.createTextNode("Delete");
  dbutton.appendChild(dbuttonvalue);
  l.appendChild(dbutton);
  dbutton.setAttribute("onclick", "del(this)")


  //EDITBUTTON
  var edit = document.createElement("button");
  var editText = document.createTextNode("Edit");
  edit.className += "button";
  edit.appendChild(editText);
  edit.setAttribute("onclick", "edit(this)");
  list.appendChild(edit);

}

function del(e) {
  e.previousSibling.remove();
  e.remove();
}

function edit(value) {

  var newValue = prompt("Enter New Value");
  value.parentNode.nodeValue = newValue;
  value.parentNode.firstChild.nodeValue = newValue;

}
