var companyname = [];
var organizername = [];
var uniqueorganizername = [];
$(document).ready(function() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var mydata = JSON.parse(this.responseText);
			for(var i=0; i<mydata.CompanyToCase.length; i++){
				companyname.push(mydata.CompanyToCase[i].CompanyName);
				addcompanyname(mydata.CompanyToCase[i].CompanyName);
			}
		}
	};
	
	
	
	
	xmlhttp.open("GET", "BuildCase.json", true);
	xmlhttp.send();
})

function addorganizername(name) {
  var ul = document.getElementById("organizer");
  var li = document.createElement("li");
  var a = document.createElement("href");
  a.appendChild(document.createTextNode(name));
  var text = "<a href='#'>"+name+"</a>"
  li.innerHTML=text;
  li.setAttribute("id", name); // added line
  ul.appendChild(li);
}


function addcompanyname(name) {
  var ul = document.getElementById("company");
  var li = document.createElement("li");
  var a = document.createElement("href");
  a.appendChild(document.createTextNode(name));
  var text = "<a href='#'>"+name+"</a>"
  li.innerHTML=text;
  li.setAttribute("id", name); // added line
  ul.appendChild(li);
}