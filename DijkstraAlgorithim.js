/**************************************************************
 *                                                            *
 *   Dijkstria's Algorithim is a graph searching algorithim   *
 *   that finds the shortest path, if it exists, between      *
 *   two points by finding the shortest distance between      *
 *   those two points and any connecting points inbetween.    *
 *                                                            *
 *   @param graph  dictionary object representing the map     *
 *   @param start_point  Node object of the starting pos      *
 *   @param end_point   Node object of the destination        *
 *                                                            *
 *   @return path  array of Node objects that represent the   *
 *								 shortest path between start_point and      *
 * 								 end_point. If the graph has no link,				*
 *								 then the function returns null.            *
 *                                                            *
 *                                                            *
 *   Author: Jeton Sinoimeri																	*
 *   Created: February 12, 2014                               *
 *   Last Modified: February 13, 2014													*
 *                                                            *
 *																														*
 *	 Sources:																									*
 *   1) http://en.wikipedia.org/wiki/Dijkstra%27s_algorithm   *
 *   2) Dijkstra_Algorithim.py																*
 *				Author: Jeton Sinoimeri															*
 *				Created: May 2011																		*
 *        Last Modified: June 2011														*
 *																														*
 *																														*
 **************************************************************/


function dijkstra_algorithim(graph, start_point, end_point) 
{
	var INF = Number.MAX_VALUE;									// max value
	var NOT_DEFINED = Number.NaN;								// not defined
	
	var dist_min = Number.POSITIVE_INFINITY; 		// min distance is infinity
	
	var distance = { };										
	var prev = { };												
	
	var Q = [ ];				// copy of graph
	var paths = [];			// most optimal path
	 
	
	// for each vertex makes the distance and previous connection 
	// infitity and not defined respectfully
	
	for (var vertex in graph)
	{
			distance[vertex] = INF;
      prev[vertex] = NOT_DEFINED;
      Q.push(vertex);
	}
	
	
	// distance from source to source
	distance[start_point] = 0;
	
	
	while (Q.length > 0)
	{
		var vertex_min, alt;
    
		for (vertex in Q)
		{
			if (distance[vertex] < dist_min)
			{
				dist_min = distance[vertex];
				vertex_min = vertex;
			}
		}
            
            
        
		// returns null if graph has no link
		if (dist_min == INF) 
		{
			return null;
		}
		
		
		// finds the shortest path between start point and end point
		if (vertex_min == end_point)
		{
			 var vrtx_path = end_point;
            
       while (prev[vrtx_path] != NOT_DEFINED)
       {
            paths.unshift(vrtx_path);   		// adds vrtx_path to front of array
            vrtx_path = prev[vrtx_path];		// gets the next node in prev
       }         
       
       paths.unshift(start_point);  // adds source to front of array
            
       return paths;					// returns the shortest path
		}
		
		
		// if the vertex_min is not equal to the end point then it finds the 
    // next vertex_min
    
		else
		{
			// deletes vertex_min from the copy array
			for (var i = 0; i < Q.length; i++)
			{
				if (Q[i] == vertex_min)
				{
					delete Q[i];
				}
			}
			
			// finds each neighbouring node of vertex_min in the graph
			for ( var neighbour in vertex_min.surr)
			{
				 // adds the distances together if the neighbour is in Q
				 if (neighbour in Q)
         {
         		alt = distance[vertex_min] + find_distance(vertex_min, neighbour); 
         }
         
                
         if (alt < distance[neighbour])
         {
         		distance[neighbour] = alt;	 		// assigns the value alt to neighbour key in distance
            prev[neighbour] = vertex_min;		// assigns vertex_min as a value to neighbour key in prev
         }
                    
			}
            
		}
		
	}
	
}




/**************************************************************
 *                                                            *
 *   Finds the distance between two Nodes using their gps     *
 *   coordinates using Haversine formula.                     *
 *                                                            *
 *   @param vertex_min  current Node object										*
 *   @param neighbour   neighbouring Node object              *
 *                                                            *
 *   @return distance   double precision floating point       *
 *											representing the distance between     *
 *											the two Nodes													*
 *                                                            *
 *                                                            *
 *   Author: Jeton Sinoimeri																	*
 *   Created: February 13, 2014                               *
 *   Last Modified: February 13, 2014													*
 *																														*
 *																														*
 *	 Source: 																									*
 *			http://www.movable-type.co.uk/scripts/latlong.html		*
 *                                                            *
 **************************************************************/


function find_distance(vertex_min, neighbour)
{
	var RADIUS = 6371; // radius of Earth in km
	
	
	// finds the difference in latitude and longitude and converts them to radian
	var delta_lat = (neighbour.lat - vertex_min.lat).toRad();
	var delta_lon = (neighbour.lon - vertex_min.lon).toRad();
	
	
	// converts the latitudes of vertex_min and neighbour to radian
	var vrtx_lat_rad = vertex_min.lat.toRad();
	var neigh_lat_rad = neighbour.lat.toRad();


	// Haversine formula
	var half_chord_length = Math.sin(delta_lat / 2) * Math.sin(delta_lat / 2) + Math.sin(delta_lon / 2) * Math.sin(delta_lon / 2) * Math.cos(neigh_lat_rad) * Math.cos(vrtx_lat_rad);       
	var angular_distance = 2 * Math.atan2(Math.sqrt(half_chord_length), Math.sqrt(1 - half_chord_length)); 
	
	
	// the distance between two nodes in km
	var distance = RADIUS * angular_distance;
	
	return distance;
}