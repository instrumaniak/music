// Get the interactive-input  elements
var btnClear = document.getElementById("btnClear");
var inpValue = document.getElementById("inpValue");
var rbName = document.getElementById("rbName");
var rbCountry = document.getElementById("rbCountry");
var cbCaseSns = document.getElementById("cbCaseSns");

// Table rows
var tblRows = document.getElementsByTagName("tr");

// Button-onclick: Clear
btnClear.addEventListener("click", function(){
  inpValue.value = "";
  filterTable();
})

// Checkbox-onclick: Case sensitive
cbCaseSns.addEventListener("click",function (){
	filterTable();
});

// radio-name-onclick
rbName.addEventListener("click",function (){
	filterTable();
});

// radio-country-onclick
rbCountry.addEventListener("click",function (){
	filterTable();
});

// Inputbox-onkeyup
inpValue.addEventListener("keyup", function(e){

	if (e.key === "Escape"){
		inpValue.value = "";
	}

	filterTable();
});


function filterTable(){
	
	// Handle case sensitive
	var caseSn = cbCaseSns.checked ? "" : "i";
	var pattern = new RegExp(inpValue.value, caseSn);

	// Handle column (td number)
	var tdNum = rbName.checked ? 0 : 1;

	// Iterate over rows and filter
	for(var i =0,l=tblRows.length;i<l;i++){
		
		var td = tblRows[i].getElementsByTagName('td')[tdNum];
		if(td){
			if(td.innerHTML.search(pattern) > -1 ){
				tblRows[i].style.display = "";
			}
			else {
				tblRows[i].style.display = "none";
			}
		}
	}


}

