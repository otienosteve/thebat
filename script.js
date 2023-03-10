
const request = new XMLHttpRequest();

request.addEventListener("load", function() {
	if (request.status >= 200 && request.status < 300) {
		console.log(request.response);
    }
});
request.open("GET", "someurl");
request.send();
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();
// bats CRUD
const bat=document

// enumerators-CRUD

// Clusters-CRUD-clust

// Sites-CRUD-sites