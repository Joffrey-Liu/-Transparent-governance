var organizername = [];
var uniqueorganizername = [];
$(document).ready(function() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var mydata1 = JSON.parse(this.responseText);
			for(var i=0; i<mydata1.CompanyToCase.length; i++){
				for(j=0;j<mydata1.CompanyToCase[i].Cases.length;j++){
					//alert(mydata1.CompanyToCase[i].Cases[j].Organizer);
					if(organizername.indexOf(mydata1.CompanyToCase[i].Cases[j].Organizer)<0){
						organizername.push(mydata1.CompanyToCase[i].Cases[j].Organizer);
						addorganizername(mydata1.CompanyToCase[i].Cases[j].Organizer);
					}
					
					
				}
				
			}
		}
	};
	 
	/*$.each(organizername, function(i, el){
		
				if($.inArray(el, uniqueorganizername) === -1) uniqueorganizername.push(el);
				
	});*/
		
		
	
	xmlhttp.open("GET", "BuildCase.json", true);
	xmlhttp.send();

})
function addorganizername(name){
	
	  var ul = document.getElementById("organization");
	  var li = document.createElement("li");
	  var a = document.createElement("href");
	  a.appendChild(document.createTextNode(name));
	  var text = "<a href='#'>"+name+"</a>"
	  li.innerHTML=text;
	  li.setAttribute("id", name); // added line
	  ul.appendChild(li);
}