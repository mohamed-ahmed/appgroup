
var C1=new Object({
		lat:45.385061,
		lng: -75.695092,
		name: "C1",
		building:"null"
	});

var C1a=new Object({
	lat:45.385486,
	lng: -75.694143,
	name: "C1a",
	building:"CC"
});

var C2=new Object({
		lat:45.38563,
		lng:-75.694379,
		name: "C2",
		building:"null"
	});

var C3=new Object({
		lat:45.384801,
		lng: -75.695967,
		name: "C3",
		building:"null"
	});

var C4=new Object({
	lat:45.385969,
	lng: -75.69396,
	name: "C4",
	building:"null"
});

var C4a=new Object({
	lat: 45.386099,
	lng: -75.693665,
	name: "C4a",
	building:"GY"
});

var C5=new Object({
	lat: 45.385411,
	lng: -75.693381,
	name: "C5",
	building:"IH"
});

var C6=new Object({
	lat: 45.384153,
	lng: -75.694336,
	name: "C5",
	building:"null"
});

var C6a=new Object({
	lat: 45.384092,
	lng: -75.69454,
	name: "C6a",
	building:"MT"
});

var C6b=new Object({
	lat: 45.384371,
	lng: -75.693767,
	name: "C6b",
	building:"TT"
});

var C6c=new Object({
	lat:45.383836,
	lng: -75.694593,
	name: "C6c",
	building:"PG"
});

var C6d=new Object({
	lat: 45.384296,
	lng: -75.692684,
	name: "C6d",
	building:"NW"
});

var C7=new Object({
	lat: 45.38355,
	lng: -75.69381,
	name: "C7",
	building:"null"
});

var C7a=new Object({
	lat: 45.383422,
	lng: -75.694153,
	name: "C7a",
	building:"RO"
});

var C7b=new Object({
	lat: 45.383768,
	lng: -75.693628,
	name: "C7b",
	building:"NB"
});

var C8=new Object({
	lat: 45.382585,
	lng: -75.694432,
	name: "C8",
	building:"null"
});

var C9=new Object({
	lat: 45.382352,
	lng: -75.69514,
	name: "C9",
	building:"null"
});

var C10=new Object({
	lat: 45.38312,
	lng: -75.695001,
	name: "C10",
	building:"null"
});

var C11=new Object({
	lat: 45.382842,
	lng: -75.695505,
	name: "C11",
	building:"null"
});

var C12=new Object({
	lat: 45.383512,
	lng: -75.694701,
	name: "C12",
	building:"null"
});

var C13=new Object({
	lat: 45.385788,
	lng: -75.69499,
	name: "C13",
	building:"null"
});

var C14=new Object({
	lat: 45.387122,
	lng: -75.695301,
	name: "C14",
	building:"null"
});

var C15=new Object({
	lat: 45.387378,
	lng: -75.694357,
	name: "C15",
	building:"null"
});

var C15a=new Object({
	lat: 45.386647,
	lng: -75.693858,
	name: "C15a",
	building:"GY"
});

var C16=new Object({
	lat: 45.386549,
	lng: -75.692437,
	name: "C16",
	building:"null"
});

var C16a=new Object({
	lat: 45.386457,
	lng: -75.692796,
	name: "C16a",
	building:"AH"
});

var C17=new Object({
	lat: 45.387519,
	lng: -75.69565,
	name: "C17",
	building:"null"
});

var C18=new Object({
	lat: 45.388815,
	lng: -75.695747,
	name: "C18",
	building:"null"
});


C1.surr=new Array(C1a,C2,C3,C5,C6,C13);
C1a.surr=new Array(C1,C2,C5);
C2.surr=new Array(C1,C1a,C4);
C3.surr=new Array(C1);
C4.surr=new Array(C2,C4a,C16);
C4a.surr=new Array(C4);
C5.surr=new Array(C1,C1a);
C6.surr=new Array(C1,C6a,C6b,C6c,C6d,C7,C12);
C6a.surr=new Array(C6);
C6b.surr=new Array(C6);
C6c.surr=new Array(C6,C12);
C6d.surr=new Array(C6);
C7.surr=new Array(C6,C7a,C7b,C8);
C7a.surr=new Array(C7);
C7b.surr=new Array(C7);
C8.surr=new Array(C7,C9,C10);
C9.surr= new Array(10,8);
C10.surr=new Array(C9,C8,C11);
C11.surr=new Array(C10);
C12.surr=new Array(C10,C6c,C6);
C13.surr=new Array(C1,C14);
C14.surr=new Array(C13,C15,C17);
C15.surr=new Array(C14,C15a,C17);
C16.surr=new Array(C15,C16a,C4);
C16a.surr=new Array(C16);
C17.surr=new Array(C14,C15,C18);
C18.surr=new Array(C17);

