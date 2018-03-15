window.onload=function(){
	let time=document.getElementById('time');
	// let t=time.innerText;
	// alert(t);
	let a=setInterval(function(){
		if(time.innerText<=1){
			clearInterval(a);
			location.replace('login.html')
		}
		time.innerText-=1;
	},1000)
}

