//Header

function changeNavColor(id) {
	cncWhite();
	id.style.color = "#f06c64";
}

function cncWhite() {
	var x = document.getElementById("header-nav-list");
	var y = x.getElementsByTagName("a");
	var i;
	for(i = 0; i < y.length; i++){
		y[i].style.color = "white";
	}
}

//Slider

function SlideIMG(){
	var x = document.getElementById("verticalPhone");
	var y = document.getElementById("horizontalPhone");
	
	if(y.style.background == "none") sliderimg2();
		else
			sliderimg1();
		
	function sliderimg2() { 
	  x.style.background = "url(assets/img/iPhone_Vertical.png) no-repeat";
	  x.style.margin = "51px 0 0 110px";
	  y.style.background = "url(assets/img/iPhone_Horizontal.png) no-repeat";
	  }
	function sliderimg1() {	
		x.style.background = "url(assets/s-phone.png) no-repeat";
	    x.style.margin = "50px 0 0 380px";
	    y.style.background = "none";
		document.getElementById("bcks1").style.display = "none";
		document.getElementById("bcks2").style.display = "none";
	}
}
		
function blackscreen1(){
	var x = document.getElementById("bcks1");
	x.style.display = (x.style.display == "none") ? "block" : "none";
}

function blackscreen2(){
	var x = document.getElementById("bcks2");
	x.style.display = (x.style.display == "none") ? "block" : "none";
}

//Portfolio

function portfolioImages() {
	var x = document.getElementById("p-img");
	var y = x.getElementsByTagName("img");
	var i;
	var arr = [1,2,3,4,5,6,7,8,9,10,11,12];
	shuffle(arr);
	for(i = 0; i < y.length; i++){
		y[i].src = "./assets/img/Pic " + arr[i] + ".png";
		y[i].style.margin = "0";
	}
	
	function shuffle(array) {
		array.sort(() => Math.random() - 0.5);
	}
}

function ImgBorder(id) {
		ImgBorderNone();
		id.style.border = "5px solid #F06C64";
		
		
		function ImgBorderNone() {
			var x = document.getElementById("p-img");
			var b = x.getElementsByTagName("div");
			var j;
			for(j = 0; j < b.length; j++){
				b[j].style.border = "none";
				}
		}
}

//Get a quote

function Submit(){
	var subject = document.getElementById("subject");
	var describe = document.getElementById("message");
	var x = (!subject.value) ? "Без темы" : ("Тема: " + subject.value);
	var y = (!describe.value) ? "Без описания" : ("Описание: " + describe.value);
	alert("Письмо отправлено\n" + x + "\n" + y);
}
