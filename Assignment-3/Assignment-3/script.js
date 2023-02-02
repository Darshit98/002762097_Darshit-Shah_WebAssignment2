//Title constructor function that creates a Title object
// function Title(t1) 
// { this.mytitle = t1;
// }
// Title.prototype.getName = function () 
// { 
// return (this.mytitle);
// }
// var socialMedia = {
//   facebook : 'http://facebook.com',
//   twitter: 'http://twitter.com',
//   flickr: 'http://flickr.com',
//   youtube: 'http://youtube.com'
// };

// var t = new Title("CONNECT WITH ME!");

var countOfRows = 3;
//var globalIndex = 0;
var latestIndex = 0;

function addNewRow() {
  var currentTable = document.getElementById("myTable");
  var tbodyRef = document.getElementsByTagName("tbody")[0];

  var rows = document.getElementById("myTable").rows;
  var latestIndex;
  if (rows.length > 1) {
    latestIndex = parseInt(rows[rows.length - 2].firstElementChild.nextElementSibling.innerHTML.split(" ")[1]) + 1;
  }
  else {
    latestIndex = 1;
  }

  // if(globalIndex==0){
  //   var lastStudent = currentTable.lastElementChild.lastElementChild?.previousElementSibling?.firstElementChild?.nextElementSibling?.innerHTML || "Student 0"; 
  //   globalIndex = 1 + parseInt(lastStudent.split(" ")[1]);
  //   console.log(lastStudent);
  // }else globalIndex++;

  // if(countOfRows==0)
  // globalIndex=1;
  // if(countOfRows==1 && globalIndex!=0)
  // globalIndex=2;
  // if(countOfRows==2 && globalIndex!=0 )
  // globalIndex =3;

  // if((globalIndex - countOfRows) >= 2)
  // globalIndex= countOfRows+1;

  // console.log(globalIndex)

  var tdNode1 = document.createElement("tr");
  
  var parameter = "dropDownTextArea" + latestIndex;

  
  var trCheckBoxCell = document.createElement("td");
  trCheckBoxCell.innerHTML =
     `<input id="checkbox" type="checkbox" onclick="onCheckboxClick(this)"/> <br /><br /><img src="down.png" width="25px" onclick="displayHiddenRow('${parameter}')"/>`;
  
  var trStudentCell = document.createElement("td");
  trStudentCell.innerHTML = "Student " + (latestIndex);
  
  var trTeacherCell = document.createElement("td");
  trTeacherCell.innerHTML = "Teacher " + (latestIndex);

  var trAwardCell = document.createElement("td");
  trAwardCell.innerHTML = "Approved";

  var trSemesterCell = document.createElement("td");
  trSemesterCell.innerHTML = "Fall";

  var trTypeCell = document.createElement("td");
  trTypeCell.innerHTML = "TA"

  var length = 5;
  var trBudgetCell = document.createElement("td");
  trBudgetCell.innerHTML = Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
  
  var trPercentageCell = document.createElement("td");
  trPercentageCell.innerHTML = "100%"
  
  // appending inside tr
  tdNode1.appendChild(trCheckBoxCell);
  tdNode1.appendChild(trStudentCell);
  tdNode1.appendChild(trTeacherCell);
  tdNode1.appendChild(trAwardCell);
  tdNode1.appendChild(trSemesterCell);
  tdNode1.appendChild(trTypeCell);
  tdNode1.appendChild(trBudgetCell);
  tdNode1.appendChild(trPercentageCell);

  var tdnode2 = document.createElement("tr");
  tdnode2.className="dropDownTextArea";
  tdnode2.id = "dropDownTextArea"+ (latestIndex)
  console.log(tdnode2.id);
  tdnode2.style.display="none";

  var trSoleCell = document.createElement("td");
  trSoleCell.colSpan="8"
  trSoleCell.innerHTML = `

  Advisor:<br /><br />
  Award Details<br />
  Summer 1-2014(TA)<br />
  Budget Number: <br />
  Tuition Number: <br />
  Comments:<br /><br /><br />
  Award Status:<br /><br /><br />
  `;
  tdnode2.appendChild(trSoleCell);

  // //appending inside tbody
  tbodyRef.appendChild(tdNode1);
  tbodyRef.appendChild(tdnode2);
  
  countOfRows++;

  if(tdnode2 != tbodyRef.lastElementChild){
    alert("Record not added!")
  }else{
    alert("Record Added Successfully!");
  }
}

 function displayHiddenRow(hiddenRow){

   const element = document.getElementById('myTable').rows[hiddenRow];
   if(element){
     element.style.display = ((element.style.display != "") ? "" : "none");
   }
   return false;
 }


var counterOfCheckedBoxed =0;
function onCheckboxClick(checkbox) {

  var rowSelect = checkbox.parentElement.parentElement; //tr
  // console.log(rowSelect);

  var element = document.getElementById('button');
  if (checkbox.checked == true) {
    counterOfCheckedBoxed++;
    if(counterOfCheckedBoxed>0) rowSelect.style.backgroundColor = "yellow";

   
    element.style.backgroundColor="orange";
    element.style.borderColor="orange";

    // deleting
    var deleteButton = document.createElement("td");
    deleteButton.setAttribute("id", "deleteTd");
    deleteButton.innerHTML =
      '<button id="delete" type="button" onclick="deleteRow(this)">Delete</button>';
    rowSelect.appendChild(deleteButton);

    //Editing
    var editButton = document.createElement("td");
    editButton.setAttribute("id", "editTd");
    editButton.innerHTML =
      '<button id="edit" type="button" onclick="editRow()">Edit</button>';

    rowSelect.appendChild(editButton);

  } else {
    counterOfCheckedBoxed--;
    rowSelect.style.backgroundColor = "#fff";
    rowSelect.deleteCell(8); //removes the delete button column
    rowSelect.deleteCell(-1);

    if(counterOfCheckedBoxed<1){
      element.style.backgroundColor="grey";
      element.style.borderColor="grey"; 
    }
    
  }
}

function editRow(){
  prompt("Edit Student details ?");
}

var count=1;

function deleteRow(rowObject) {
  //tr reference
  var tr = rowObject.parentElement.parentElement; 
  //console.log(rowObject)
  tr.nextElementSibling.remove();
  document.getElementById("myTable").deleteRow(tr.rowIndex);
  console.log("TR row data:",tr);
  
  count--;
  countOfRows--;
  if(countOfRows==0) changeColor();
  if(counterOfCheckedBoxed==1 ) changeColor();
  alert("Row deleted successfully!");
}

function changeColor(){
  var element = document.getElementById('button')
  element.style.backgroundColor="grey";
  element.style.borderColor="grey"; 
  counterOfCheckedBoxed = 0;
}

