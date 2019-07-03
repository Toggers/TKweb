function mouseOverHome() {
 	 document.getElementById("home").style.color  = "blue";
}

function mouseOutHome() {
 	 document.getElementById("home").style.color  = "black";
}

function mouseOverAboutMe() {
 	 document.getElementById("aboutMe").style.color  = "blue";
}

function mouseOutAboutMe() {
 	 document.getElementById("aboutMe").style.color  = "black";
}

function mouseOverGames() {
 	 document.getElementById("games").style.color  = "blue";
}

function mouseOutGames() {
 	 document.getElementById("games").style.color  = "black";
}




function clickHome() {
	window.open("home.html","_self");
}

function clickAboutMe() {
	window.open("aboutMe.html","_self");
}

function clickGames() {
	window.open("games.html","_self");
}






var checkStop;

function stopSax(){
	checkStop = true;
}


var checkSong = 0;
var audio;
function changeSong(){

	var sax = document.getElementById("saxImage");
	if(audio != null){
		audio.pause();
	}

	if (checkSong == 0){
		audio = new Audio("file:///C:/Users/tommy/Downloads/epicsaxguy.mp3");

		sax.src = "https://cdn.drawception.com/images/panels/2015/9-21/dBmjrQmHjk-4.png";
	} else if (checkSong == 1){
		audio = new Audio("file:///C:/Users/tommy/Desktop/Glaz%205-9%20a%20(3).mp3");
		checkSong = -1;

		sax.src = "file:///C:/Users/tommy/Downloads/IMG_E8693.JPG";
	}

	checkSong++;
	audio.play();
}

function clickSax() {

	var sax = document.getElementById("saxImage");
	var computer = document.getElementById("computer");

	var play = document.getElementById("saxButton");
	var stop = document.getElementById("stopButton");
	var song = document.getElementById("songButton");


	play.style.visibility = "hidden";
	computer.style.visibility = "hidden";
	stop.style.visibility = "visible";
	song.style.visibility = "visible";

	sax.style.width = 175 + "px";
	sax.style.height = 175 + "px";

	changeSong();



	var posLeft = 22;
	var posTop = 50;

	checkStop = false;

	var id = setInterval(frame,50);
	function frame(){
		if(checkStop){
			clearInterval(id);
			sax.src = "https://images.vexels.com/media/users/3/149996/isolated/lists/2fc3047990bdfc3b1f49b01520c9c5f2-saxophone-musical-instrument-doodle.png";
			sax.style.width = 9 + "%";
			sax.style.height = 20 + "%";

			sax.style.left = 22 + "%";
			sax.style.top = 50 + "%";

			play.style.visibility = "visible";
			stop.style.visibility = "hidden";
			song.style.visibility = "hidden";
			computer.style.visibility = "visible";


			audio.pause();
			checkSong = 0;

			checkStop = false;
		} else {
			if(posLeft != 38 && posTop == 50){
				posLeft++;
			} else if(posLeft == 38 && posTop != 60){
				posTop++;
			} else if(posLeft != 22 && posTop == 60){
				posLeft--;
			} else{
				posTop--;
			} 
			sax.style.left = posLeft + "%";
			sax.style.top = posTop + "%";
		}
		
	}
}





var myDragFlag = false;
var startGame = false;

function dragToast(event){ 
	var toast = document.getElementById("toast");
	var restart = document.getElementById("pbutton");
	var pusheen = document.getElementById("pusheen");
	var block = document.getElementById("block");
	var instructions = document.getElementById("toastInstruct");

	instructions.style.visibility = "hidden";

	myDragFlag = true;
	startGame = true;

	moveCat();

	var shiftX = event.clientX - toast.getBoundingClientRect().left;
 	var shiftY = event.clientY - toast.getBoundingClientRect().top;

	document.body.append(toast);

	document.body.onmousemove = function(event) {
		if(!myDragFlag) return;

		moveAt(event.pageX,event.pageY);
		
	
		toast.hidden = true;
		var elemBelow = document.elementFromPoint(event.clientX, event.clientY);
  		toast.hidden = false;

  		var droppableBelow = elemBelow.closest(".gcanvas");	
  		console.log("E:" + elemBelow.id);
  		  		console.log("D:" + droppableBelow);

  		if(droppableBelow != null){
 			pusheen.src = "https://media1.tenor.com/images/f901108c9a3e390bbf91ef8d75266f44/tenor.gif?itemid=5067888";

  			toast.style.visibility = "hidden";

  			var blockLeft = parseFloat(block.style.left) + 3 + "%";
  			var blockTop = parseFloat(block.style.top) - 4 + "%";

  		  	restart.style.left = blockLeft;
  			restart.style.top = blockTop;
  			
  			document.body.append(restart);
  			restart.style.visibility = "visible";

  			startGame = false;
  			
  		}

		
	}
 	



	function moveAt(pageX, pageY){
		toast.style.left = pageX - shiftX + 'px';
		toast.style.top = pageY - shiftY + 'px';
	}


	toast.onmouseup = function() {
		myDragFlag = false;
		startGame = false;
	}

	restart.onclick = function() {
		location.reload();

	}
}




$(document).ready(function(){


	var canvas = document.getElementById("block");
	var context = canvas.getContext("2d");
	var restart = document.getElementById("pbutton");



	var cat = new Image();
	cat.src = document.getElementById("pusheen").src;



	cat.onload = function(){
		context.drawImage(cat,30,-49);
		
	}





	
	var cont = $("#block2").get(0).getContext('2d');
	
	var cap = new Image();
	cap.src = document.getElementById("captain").src;



	cap.onload = function(){
		cont.drawImage(cap,30,-49);
		
	}

		

});













function getRandomPosition() {
		return Math.floor((Math.random() * 21) - 10);
}	


var blockLeft = 80;
var blockTop = 60; 

var randLeft = getRandomPosition();
var randTop = getRandomPosition();

var completeLeft = false;
var completeUp = false;

function moveCat(){
	var id = setInterval(move, 10);

	var block = document.getElementById("block");
	document.body.append(block);


	function move(){

		if(startGame){	

			//generate random number only if movement is completed
			if(completeLeft && completeUp){
				randLeft = 0;
				while(randLeft == 0){
					randLeft = getRandomPosition();
				}
				completeLeft = false;
			

				randTop = 0;
				while(randTop == 0){
					randTop = getRandomPosition();
				}
				completeUp = false;
			}


			//if out of bounds --> reset to middle
			if (blockLeft >= 94 || blockLeft <= 0 || blockTop >= 95 || blockTop <= 6){
				blockLeft = 50;
				blockTop = 50;
				block.style.left = blockLeft + "%";
				block.style.top = blockTop + "%";
			} 
			//cat moving left
			else if (!completeLeft) {
				if(randLeft > 0){
					blockLeft++;
					block.style.left = blockLeft + "%";

					randLeft--;
				} else if(randLeft < 0){
					blockLeft--;
					block.style.left = blockLeft + "%"

					randLeft++;
				} else{ 
					completeLeft = true;
				}
			} 
			//cat moving up
			else if (!completeUp){
				if(randTop > 0){
					blockTop++;
					block.style.top = blockTop + "%";

					randTop--;
				} else if(randTop < 0){
					blockTop--;
					block.style.top = blockTop + "%";

					randTop++;
				} else{ 
					completeUp = true;
				}
			}

		} else{
			clearInterval(id);
		}

	}

}



var capTop = 70;
var capLeft = 15;

document.onkeydown = checkKey;
function checkKey(e){

	var captain = document.getElementById("captain");

	if (e.keyCode == '38' && capTop != 0) {
        // up arrow
        capTop--;
        captain.style.top = capTop + "%";
    }
    else if (e.keyCode == '40' && capTop != 100) {
        // down arrow
        capTop++;
        captain.style.top = capTop + "%"
    }
    else if (e.keyCode == '37' && capLeft != 0) {
       // left arrow
       capLeft--;
       captain.style.left = capLeft + "%";

    }
    else if (e.keyCode == '39' && capLeft != 100) {
       // right arrow
       capLeft++;
       captain.style.left = capLeft + "%";
    }
}




var images = Array("https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "file:///C:/Users/tommy/Downloads/IMG_8718.JPG", "file:///C:/Users/tommy/Downloads/IMG_9020.JPG");

var currimg = 0;

$(document).ready(function(){

     setInterval(loadimg,5000);

});


function loadimg(){
        
            //finished animating, minifade out and fade new back in           
            $('#page1').fadeOut("slow",function(){
                
                currimg++;
                
                if(currimg > images.length-1){
                    
                    currimg=0;
                    
                }
                
                var newimage = images[currimg];
            
                //swap out bg src                
                $('#page1').attr("src", newimage);
               

                //animate fully back in
                $('#page1').fadeIn("slow");
            });

 }









var amImg = Array("https://mail.google.com/mail/u/0?ui=2&ik=97970ef18d&attid=0.1&permmsgid=msg-f:1636082551098117932&th=16b48869716b0f2c&view=fimg&disp=thd&attbid=ANGjdJ9UtPJv9or_m_-OIS-j3OV3IW_ofoaybRA8C2rFmJqkK3UflflnV3BN-I62aRDqyPO59CthKnXF233WCm-Ky_nyr1qanrOIbrnbNQsaQ61H6Kl_da7whDSE5nA&ats=2524608000000&sz=w1920-h902", "https://mail.google.com/mail/u/0?ui=2&ik=97970ef18d&attid=0.1&permmsgid=msg-f:1636098032738626878&th=16b4967e0b19ed3e&view=fimg&disp=thd&attbid=ANGjdJ8zyjWtT_IIdXS3A3cLDv6kZLQdypJiLTv_2Aai5MtZI7VQiOUfv4f3DMml-fiMBHANcd5h4yuW06NZ1ucJTjlOknXAJ7oWmaELIrPD--lkEykJqZtuRfeYQjU&ats=2524608000000&sz=w1920-h937");

var currimg = 0;

$(document).ready(function(){

     setInterval(amImgLoad,5000);

});


function amImgLoad(){
        
            //finished animating, minifade out and fade new back in           
            $('#gradImage').fadeOut("slow",function(){
                
                currimg++;
                
                if(currimg > amImg.length-1){
                    
                    currimg=0;
                    
                }
                
                var newimage = amImg[currimg];
            
                //swap out bg src                
                $('#gradImage').attr("src", newimage);
               

                //animate fully back in
                $('#gradImage').fadeIn("slow");
            });

 }






