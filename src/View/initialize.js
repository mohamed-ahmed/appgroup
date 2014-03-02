function initialize() {
	  var myLatlng = new google.maps.LatLng(45.388081, -75.69602);
	  var mapOptions = {
		zoom: 17,
		center: myLatlng
	  }
	  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	 // var a = PromptLocationString();
	//var Map = document.getElementById("map-canvas");
      //DisplayLocationInformation (a, map)
	  var marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map,
		  title: 'Hello World!'
	  });
	}

