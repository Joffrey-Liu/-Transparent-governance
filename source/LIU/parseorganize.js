var organizername = [];
var uniqueorganizername = [];
var count_organize = 0;
var uniqueorganize_company = [];
$(document).ready(function() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var mydata1 = JSON.parse(this.responseText);
			for(i in mydata1.OrganizerToCompany){
				uniqueorganizername.push(i);
				addorganizername(i, count_organize);
				uniqueorganize_company.push(mydata1.OrganizerToCompany[i]);
				count_organize++;
			}
		}
	};
	
	xmlhttp.open("GET", "BuildCase.json", true);
	xmlhttp.send();

})
function addorganizername(name, i){
	
	  var ul = document.getElementById("organization");
	  var li = document.createElement("li");
	  var a = document.createElement("href");
	  a.appendChild(document.createTextNode(name));
	  var text = "<a href='#' onclick='showorganizedetail("+i+");'>"+name+"</a>"
	  li.innerHTML=text;
	  li.setAttribute("id", name); // added line
	  ul.appendChild(li);
}

function clearorganizefontsize(){
	for(i=0;i<uniqueorganizername.length;i++){
		document.getElementById(uniqueorganizername[i]).style.fontSize  = "large";
	}
}



function showorganizedetail(o_name){
	//alert(uniqueorganizername[i]);
	clearorganizefontsize();
	document.getElementById(uniqueorganizername[o_name]).style.fontSize  = "x-large";
	//alert(uniqueorganize_company[o_name]);
	document.getElementById("firstcardtitle").innerHTML = "<h3 style='color:#008CBA;'>"+uniqueorganizername[o_name]+"</h3>"+"承接案件公司";
	
	var ul = document.getElementById("company_detail");
	ul.innerHTML="";
	var temp_name = [];
	for(i=0; i<uniqueorganize_company[o_name].length; i++){
		temp_name.push(uniqueorganize_company[o_name][i]);
	}
	
	
	for(i=0;i<temp_name.length; i++){
		var li = document.createElement("li");
		var a = document.createElement("href");
		a.appendChild(document.createTextNode(temp_name[i]));
		var text = "<a href='#'>"+temp_name[i]+"</a>"
		li.innerHTML=text;
		li.setAttribute("id", i); // added line
		ul.appendChild(li);
	}
	var company_index = [];
	
	for(i=0;i<temp_name.length; i++){
		//alert(companyname.indexOf(temp_name[i]));
		company_index.push(companyname.indexOf(temp_name[i]));
	}
	
	var company_index_value = new Array(company_index.length);
	var company_index_money = new Array(company_index.length);
	for(i=0;i<company_index_value.length;i++){
		company_index_value[i] = 0;
		company_index_money[i] = 0;
	}
		
	
	for(i=0;i<company_index.length;i++){
		
		for(j=0;j<companyall[company_index[i]].length;j++){
			
			
			if(companyall[company_index[i]][j].Organizer == uniqueorganizername[o_name]){
				company_index_value[i]++;
				company_index_money[i] += parseInt(companyall[company_index[i]][j].Price);
				//alert("11");
			}
				
		}
		//alert(company_index_value[i]);//company_index_value[i]是 i公司做過多少次 uniqueorganizername[o_name]的工程
		alert(company_index_money[i]);
	}
	
	for(i=0;i<company_index.length;i++){
		companydetail_data.push({
			key:   uniqueorganizername[i],
			value: company_index_value[i]
		});
	}
	drawcompanydetailchart();
	urlgps(temp_name);
	
}

function urlgps(c_name){
	for(i = 0 ;i<c_name.length;i++){
		var address = c_name[i];
		geocoder.geocode( { 'address': address}, function(results, status) {
		  if (status == 'OK') {
			//map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			});
			//alert(results[0].geometry.location);
		  } else {
			//alert('Geocode was not successful for the following reason: ' + status);
		  }
		});
	}
}

/*for(j=0;j<mydata1.CompanyToCase[i].Cases.length;j++){
//alert(mydata1.CompanyToCase[i].Cases[j].Organizer);
if(organizername.indexOf(mydata1.CompanyToCase[i].Cases[j].Organizer)<0){
	organizername.push(mydata1.CompanyToCase[i].Cases[j].Organizer);
	addorganizername(mydata1.CompanyToCase[i].Cases[j].Organizer, count_organize);
	uniqueorganizername.push(mydata1.CompanyToCase[i].Cases[j].Organizer);
	count_organize++;
}
}*/







