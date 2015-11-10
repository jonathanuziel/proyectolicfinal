

function saveform(){

	var formm= new Array();
	formm[0]=document.getElementById("name").value;
	formm[1]=document.getElementById("email").value;
	formm[2]=document.getElementById("telephone").value;
	formm[3]=document.getElementById("message").value;

	for (var i = 0; i < 4; i++) {

		if (formm[i]!=null) {

			localStorage[i]=formm[i];
		}
	}

}

window.onload=getStorage;

function getStorage(){

	    if (localStorage.getItem) {

	    	if(localStorage[0]!=null){

	    	document.getElementById("name").value=localStorage[0];

	    	document.getElementById("email").value=localStorage[1];

	    	document.getElementById("telephone").value=localStorage[2];

	    	document.getElementById("message").value=localStorage[3];
	    	}
	}
}
