var todo = document.getElementById("todo");
var input = document.getElementById("input");
var update = document.getElementById("update");
var submitbtn = document.getElementById("submit");
var deleteShow = document.getElementById("deleteShow")
var showDeleteStatus = false


var selectlist = null;
function submit() {
  if (input.value == "") {
    return null;
  }

  var liTag = document.createElement("li"); // tag new
  var inputSelect  = document.createElement("input")
  inputSelect.type ="checkbox"

  inputSelect.setAttribute("onchange", "selectItem()")



  //b tag create for store data
  var bTag = document.createElement("b");
  bTag.innerText = input.value;
  bTag.style.marginTop = "20px";

  //button edit
  var editButton = document.createElement("button");
  editButton.innerText = "EDIT";
  editButton.setAttribute("onclick", "editTodo(this)");

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "DELETE";
  deleteButton.style.marginLeft = "20px";
  deleteButton.setAttribute("onclick", "deleteTodo(this)");

  //    store b i li tag
  liTag.appendChild(inputSelect);
  liTag.appendChild(bTag);
  liTag.appendChild(editButton);
  liTag.appendChild(deleteButton);

  //    li tag store in main todo
  todo.appendChild(liTag);
  input.value = "";
  if(showDeleteStatus==false && todo.childNodes.length>1){
    deleteShow.style.display="inline"
    showDeleteStatus=true


  }
}


function deleteTodo(e) {
  console.log(e.parentNode.childNodes);
  console.log(e.parentNode.style);

  e.parentNode.remove();
  console.log(todo.childNodes)
  if(todo.childNodes.length==1){
    deleteShow.style.display="none"
    showDeleteStatus=false

  }

}

function editTodo(e) {
  console.log(e.parentNode.childNodes);
  input.value=e.parentNode.childNodes[1].innerText // is line is line
  submitbtn.style.display = "none";
  update.style.display = "inline";
  selectlist = e.parentNode;
}

function updatebtn() {
  selectlist.childNodes[1].innerText = input.value;
  update.style.display = "none";
  submitbtn.style.display = "inline";
  input.value = "";
  selectlist = null
}

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    if (selectlist == null) {
        submit()
        
    }
    else{
        updatebtn()
    }
    submit();
  }
});

function deleteAll(){
    todo.innerHTML=""
}

// function


function selectItem(){

}