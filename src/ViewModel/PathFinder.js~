<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript">

function closest_pt_mark(desti,loca){

		var length=loca.surr.length;
		var dist=100000;
		var count=0;
		var closest=desti;
		// intialize dist to high arbitrary number
		//for loop to make marker only for closest point to destination
		for(var w=0; w<length;w++){
			var getX=(loca.surr[w].lat);
			var getY=(loca.surr[w].lng);
			var destX=(desti.lat);
			var destY=(desti.lng);
			//code segment to find dist between destination and point
			//var lats=Math.pow(destX-getX,2);
			var lats= destX-getX;
			lats= lats*lats;
			//var lngs=Math.pow(destY-getY,2);
			var lngs= destY-getY;
			lngs= lngs*lngs;
			var pt_distance=Math.sqrt(lats+lngs);
		
			if(pt_distance<dist){
			
				dist=pt_distance;//update the distance
				closest=loca.surr[w];		
			}
		}
		return closest;	
}


	
		// 	You can enter any points here and it should draw the polyline.
		var dest=C14;	// destination
		var loc=C1;		// location
		
		var myLatlng = new google.maps.LatLng(loc.lat,loc.lng);
		
		
		var destLatlng= new google.maps.LatLng(dest.lat,dest.lng);			
		var pathArray=new Array();
		pathArray.push(new google.maps.LatLng(loc.lat,loc.lng))
		//var path_f=getpath(loc,dest,dest.building);		
		while(loc.name!=dest.name){
		var closest_pt=closest_pt_mark(dest,loc);
		var markcoord=new google.maps.LatLng(closest_pt.lat,closest_pt.lng);
		pathArray.push(markcoord);

		loc=closest_pt;
		
		}
		
		var flightPath = new google.maps.Polyline({
		path: pathArray,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
		});
		
		return pathArray;
		}

    </script>
  </head>
  <body>
    <div id="map-canvas"/>
  </body>
</html>
