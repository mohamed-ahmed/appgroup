function initialize() {
	
	var mylist=document.getElementById("myList");
	
	//Store acronym (From user input?) in finalLocationAcr -- OK this looks good
	var finalLocationAcr = document.getElementById("myList").value;
	
	//Check hashTable1 for acronym association
	finalLocationFull = hashTable1[finalLocationAcr];	
                
	//OK so I have no idea what these OR statements are doing?
	if (finalLocationAcr == "P7" ||finalLocationAcr ==  "P6"){
		var bestLat = 45.388081;
		var bestLong = -75.69602;
	}
	else if (finalLocationAcr == "LE" ||finalLocationAcr ==  "FH"||finalLocationAcr == "GR"||finalLocationAcr ==  "SP"||finalLocationAcr ==  "GH"||finalLocationAcr ==  "AH"||finalLocationAcr == "GymBusStop"||finalLocationAcr ==  "TC"||finalLocationAcr ==  "CO"||finalLocationAcr ==  "SD" ||finalLocationAcr ==  "P5" ){
		bestLat = 45.386081;
		bestLong = -75.69602;
	}
	else if (finalLocationAcr == "RU" ||finalLocationAcr ==  "IH"  ||finalLocationAcr ==  "AC"  ||finalLocationAcr ==  "CC" ||finalLocationAcr ==  "LX"){
		bestLat = 45.385081;
		bestLong = -75.69602;
	}
	else if (finalLocationAcr == "P2"||finalLocationAcr == "UC"||finalLocationAcr == "RegistrarsOffice"||finalLocationAcr == "SecurityOffice"||finalLocationAcr == "Otrain"||finalLocationAcr == "MainBusStop"||finalLocationAcr == "SteacieBusStop"||finalLocationAcr ==  "TT"||finalLocationAcr ==  "MC"||finalLocationAcr ==  "PH"||finalLocationAcr ==  "LH"||finalLocationAcr ==  "FR" ||finalLocationAcr ==  "GY"||finalLocationAcr ==  "MB"||finalLocationAcr ==  "RO"||finalLocationAcr ==  "NB"||finalLocationAcr ==  "NW"||finalLocationAcr ==  "RB"||finalLocationAcr ==  "SC"||finalLocationAcr ==  "AT"||finalLocationAcr ==  "AP"||finalLocationAcr ==  "HP"||finalLocationAcr == "P3"||finalLocationAcr == "P4"){
		bestLat = 45.384081;
		bestLong = -75.69602;
	}
	else if (finalLocationAcr == "TB"|| finalLocationAcr == "PG" ||finalLocationAcr ==  "ME"||finalLocationAcr ==  "CB"||finalLocationAcr ==  "DT"||finalLocationAcr ==  "AA"){
		bestLat = 45.384081;
		bestLong = -75.69602;
	}
	else if (finalLocationAcr == "ML"||finalLocationAcr ==  "RH"||finalLocationAcr ==  "SA"||finalLocationAcr ==  "VS"||finalLocationAcr ==  "P1"||finalLocationAcr ==  "LS"||finalLocationAcr ==  "LA"||finalLocationAcr ==  "SR"){
		bestLat = 45.382281;
		bestLong = -75.69772;
	}
	else if (finalLocationAcr == "HC"||finalLocationAcr ==  "PA"){
		bestLat = 45.382281;
		bestLong = -75.69772;
	}
	
	//END REALLY LONG IF STATEMENTS - WE can make this a module, instead of thread logic. But this is good because it does something 
	
	//Latitude and longitide for focus location 
	var myLatlng = new google.maps.LatLng(bestLat,bestLong);
	
	//Initialise map zoom
	var mapOptions = {
	zoom: 17,
	center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
	//Information box format
	var contentString =  '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+ //'<button>' + '</button>'+
	  '<h2>' + finalLocationFull.Name + '</h2>'+
	  '<div id="bodyContent">'+
	  '<p>'+ finalLocationFull.Info + '</p>'+
	  '</div>'+
	  '</div>';

	//maxWidth sets size of info box
	var infowindow = new google.maps.InfoWindow({
	  content: contentString,
	  maxWidth: 500
	});

	//Pin drop on building that user is searching for
	var buildingLoc = new google.maps.LatLng(finalLocationFull.Lat,finalLocationFull.Long);
	var marker = new google.maps.Marker({
		position: buildingLoc,
		map: map,
		title: finalLocationFull.Name,
		animation: google.maps.Animation.DROP
		});

	//If pin has information, display it. If not then don't
	if (finalLocationFull.Info != ''){
		if (infowindow.close(map,marker) == null){ 						//CHECK ME!!!!!!!!!!!!
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
				});
		}else {	
			google.maps.event.addListener(marker, 'click', function() {
			infowindow.close(map,marker);
			});
		}
	
	google.maps.event.addListener(marker, 'click', toggleBounce);
	
	
	
	
		function toggleBounce() {

		  if (marker.getAnimation() != null) {
			marker.setAnimation(null);
			infowindow.close(map,marker);
		  } else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}
	}
	
	
	//OTHER BUILDING ICONS
	//variable to store the number of locations on campus
	  var NumofLocations = 44;	
	//Array of Strings holding ever building symbols
	  var LocationSymbols=["AH","AA","AC","AP","AT","IH","TT","CB","CC","DT","FH","FR","GH","GR","GY","HP","HC","LH","LE","LS","LA","LX","ME","ML"
						   ,"MB","MC","NB","NW","PA","PH","RB","RH","CO","RO","RU","SP","SR","SA","SC","SD","TC","TB","UC","VS"];
	  //var holding the custom image name
	  var image = 'BuildingMarker.png';
	  //for loop to traverse the locations array
	 
	 for(var i =0;i<NumofLocations;i++){
		 if (finalLocationAcr=="RegistrarsOffice"){
		 finalLocationAcr = "TB";
		 }else if (finalLocationAcr=="SecurityOffice"){
		 finalLocationAcr = "RO";
		 }
	 
	 if(LocationSymbols[i]!= finalLocationAcr){
		
	 BuildLocations = hashTable1[LocationSymbols[i]];//gets element from hashtable based on symbol input.

		  var myLatLng = new google.maps.LatLng(BuildLocations.Lat,BuildLocations.Long);//creates a latlng 
		  var buildMarker = new google.maps.Marker({//creates a new marker
			  position: myLatLng,//sets position
			  map: map,//sets which map to mark on
			  icon: image//sets what icon image to use.
			  //title: BuildLocations.Name
		  });
		  
		  var BuildingString =  '<div id="content">'+
			  '<div id="siteNotice">'+
			  '</div>'+ //'<button>' + '</button>'+
			  '<h2>' + BuildLocations.Name + '</h2>'+
			  '<div id="bodyContent">'+
			  '<p>'+ BuildLocations.Info + '</p>'+
			  '</div>'+
			  '</div>';
	  
		  var buildwindow = new google.maps.InfoWindow({
			content: BuildingString,
			maxWidth: 700
			});
			
		google.maps.event.addListener(buildMarker, 'click', function() {
				buildwindow.open(map,this);
				});	  
	 
	}
	}
	/*Fix this indentations, braces, and make comments specific */
	//BUS ICONS
	//variable to store the number of locations on campus
	  var NumofLocations = 3;	
	//Array of Strings holding ever building symbols
	  var LocationSymbols=["MainBusStop","SteacieBusStop","GymBusStop"];
	  //var holding the custom image name
	  var image = 'Bus.png';
	  //for loop to traverse the locations array
	  for( var i =0; i<NumofLocations; i++) {
	  		//You need to explain what this if statement is doing 
		  if(LocationSymbols[i]!= finalLocationAcr){
		  BuildLocations = hashTable1[LocationSymbols[i]];//gets element from hashtable based on symbol input. WHAT SYMBOL 
			  var myLatLng = new google.maps.LatLng(BuildLocations.Lat,BuildLocations.Long);//creates a latlng FOR WAHT
			  var buildMarker = new google.maps.Marker({//creates a new marker FOR WHAT
				  position: myLatLng,//sets position TO WHERE
				  map: map,//sets which map to mark on   ??
				  icon: image//sets what icon image to use.  FOR WHAT 
				  //title: BuildLocations.Name
		  });
	}
	}
	//TRAIN ICON
	//variable to store the number of locations on campus
	  var NumofLocations = 1;	//Try not to re-use 
	//Array of Strings holding ever building symbols
	  var LocationSymbols=["Otrain"];
	  //var holding the custom image name
	  var image = 'Tram.png';
	  
	  //for loop to traverse the locations array
	  for(var i =0; i<NumofLocations; i++){
		 if(LocationSymbols[i]!= finalLocationAcr){
		 BuildLocations = hashTable1[LocationSymbols[i]];//gets element from hashtable based on symbol input.
			  var myLatLng = new google.maps.LatLng(BuildLocations.Lat,BuildLocations.Long);//creates a latlng 
			  var buildMarker = new google.maps.Marker({//creates a new marker
				  position: myLatLng,//sets position
				  map: map,//sets which map to mark on
				  icon: image//sets what icon image to use.
				  //title: BuildLocations.Name
			  });
	}
	}
	//PARKING ICONS
	//variable to store the number of locations on campus
	  var NumofLocations = 8;	
	//Array of Strings holding ever building symbols
	  var LocationSymbols=["P1","P2","P3","P4","P5","P6","P7","PG"];
	  //var holding the custom image name
	  var image = 'Parking.png';
	  //for loop to traverse the locations array
	 for(var i =0;i<NumofLocations;i++){
	 if(LocationSymbols[i]!= finalLocationAcr){
	 BuildLocations = hashTable1[LocationSymbols[i]];//gets element from hashtable based on symbol input.

		  var myLatLng = new google.maps.LatLng(BuildLocations.Lat,BuildLocations.Long);//creates a latlng 
		  var buildMarker = new google.maps.Marker({//creates a new marker
			  position: myLatLng,//sets position
			  map: map,//sets which map to mark on
			  icon: image//sets what icon image to use.
			  //title: BuildLocations.Name
		  }); 
	}
	}	
}
