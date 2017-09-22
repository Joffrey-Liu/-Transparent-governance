<?php


	$name = $_POST['marker_name'];
	$GPSset = array();
	$name = $_POST['marker_name'];
	for($i=0;$i<count($name);$i++){
		$url = "https://maps.googleapis.com/maps/api/geocode/json?address=" . urlencode($name[$i]);
		$data = @file_get_contents($url);
		$jsondata = json_decode($data,true);
		$area = $jsondata[results][0]["geometry"]["location"];
		$lat = $area["lat"];
		$lon = $area["lng"];
		$GPSset[$i] = array($lat, $lon);
		
	}
	
	echo json_encode($GPSset);
	
	
//http://findbiz.nat.gov.tw/fts/query/QueryBar/queryInit.do?qryCond=志億營造股份有限公司&infoType=D&qryType=cmpyType&cmpyType=true&isAlive=all
?>
