// call this function when "orange-kid" is clicked!

var a = document.getElementById ("button");
var b = document.getElementById("first");
var c = document.getElementById ("second");
var d = document.getElementById ("third");
var e = document.getElementById ("fourth");
var f = document.getElementById("show");
var g = document.getElementById ("one");
var h = document.getElementById ("two");
var i = document.getElementById ("three");
var j = document.getElementById ("four");
var seasons= 1 


function switchImage(){
	  ( b.src.match("images/springleaves.png"))
		b.src = "images/springpicture.jpg";
		
	if (seasons==1){ 
		console.log ("text");
			h.addEventListener("click", switchImage2) 
	
} 


} 

function switchImage2(){
	( c.src.match("images/summerflowers.png"))
		c.src = "images/summerimage.jpg";
if (seasons==1){ 
		console.log ("text");
			i.addEventListener("click", switchImage3) 
	
} 

} 

function switchImage3(){
	 ( d.src.match("fall_button.png"))
		d.src = "images/fallimage.png";
		
if (seasons==1){ 
		console.log ("text");
			j.addEventListener("click", switchImage4) 
	
} 
} 


function switchImage4(){
	 ( e.src.match("images/winter_button.png"))
		e.src = "images/winterpicture.jpg";
		
	 if  (b.src.match("images/springpicture.jpg") && c.src.match("images/summerimage.jpg") && d.src.match("images/fallimage.png") &&  e.src.match("images/winterpicture.jpg")){ 
		console.log ("text");
		f.classList.remove("invisable");
		
} 
	

	 
} 

//function showButton(el){
	 //if  (b.src.match("images/springpicture.jpg") && c.src.match("images/summerimage.jpg") && d.src.match("images/fallimage.png") &&  e.src.match("images/winterpicture.jpg")){ 
		//console.log ("text");
		//f.classList.remove("invisable");
		
//} 

//} 


function resetAll(el){ 
	b.add();
	c.add();
	d.add();
	e.add();
}


	
function show(el){
	
	document.getElementById("button") .classList.remove("invisible");

} 
