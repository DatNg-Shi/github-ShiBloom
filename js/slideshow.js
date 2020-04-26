var t, currentIndex=1;

function next(){
	clearInterval(t);
	if (currentIndex < 3){
		currentIndex++;
		document.getElementById("hinhslide").src="images/" + currentIndex + ".jpg";
	} else {
		currentIndex = 1;
		document.getElementById("hinhslide").src="images/" + currentIndex + ".jpg";
	}
	t = setInterval("next()",3000);
}

function back(){
	clearInterval(t);
	if (currentIndex > 1){
		currentIndex--;
		document.getElementById("hinhslide").src="images/" + currentIndex + ".jpg";
	} else {
		currentIndex = 3;
		document.getElementById("hinhslide").src="images/" + currentIndex + ".jpg";
	}
	t = setInterval("next()",3000);
}

t = setInterval("next()",2000);


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function checkmail()
{
	var name=document.f.name;
	var p1=/^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
	var mail=document.f.email;
	var p2=/^(\w)+[@][a-zA-Z]+[.][a-zA-Z]+([.][a-zA-Z]+)?$/
	
	if(p1.test(name.value)==false)
	{
		alert("Vui lòng điền tên chính xác");
		name.focus();
		return false;	
	}
	else if(p2.test(mail.value)==false)
	{
		alert("Vui lòng điền email chính xác");
		mail.focus();
		return false;	
	}
	return true;	
}

function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageY
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}
