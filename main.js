

var res=document.getElementById('value');
var btn=document.querySelectorAll('button');



 res.style.fontSize="80px";
 res.style.fontWeight="600";
 res.style.marginBottom="32px";


btn[0].addEventListener('click',function(){
	res.innerText= parseInt(res.innerText)+1;

	res.style.color='black';

	var val = parseInt(res.innerText);

	if( val>=20){
		alert('value reach the maximum level!!!');
		res.innerText='20';
		res.style.color='red';
	}

});


btn[1].addEventListener('click',function(){
	res.innerText= parseInt(res.innerText)-1;

	res.style.color='black';
	var val = parseInt(res.innerText);

	if( val<=0){
		alert('value reach the minimum level!!!');
		res.innerText='0';
		res.style.color='red';
	}

});






