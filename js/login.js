// let user=document.getElementById('user');
// let password=document.getElementById('password');
// let info=document.getElementById('info');

// info.onclick=function(){
// 	if(user.value.trim()=="cx"&&password.value.trim()=="12345"){
// 		alert("success!")
// 	}else{
// 		location.replace('error.html');
// 	}
// }

let user=document.getElementById('user');
let password=document.getElementById('password');
let info=document.getElementById('info');

info.onclick=function(){
	if(user.value.trim()=='sjc'&&password.value.trim()=='11'){
		alert('success!');
	}else{
		location.replace('error.html')
	}
}
