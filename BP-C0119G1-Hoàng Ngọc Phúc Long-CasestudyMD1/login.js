$('.message a').click(function(){
	$('form').animate({height:"toggle", opacity:"toggle"},"slow");
});
var username,userpassword,useremail;
function create(){
	if (form.username.value =="") {
		alert("Bạn chưa nhập tài khoản");
		return;
	}else if (form.userpassword.value =="") {
		alert("Bạn chưa nhập mật khẩu");
		return;
	}else if (form.useremail.value =="") {
		alert("Bạn chưa nhập email");
		return;
	}
	username = form.username.value;
	userpassword = form.userpassword.value;
	useremail = form.useremail.value;
}
// Đăng nhập//
var UserName = "Long";
var PassWord = "123";
var inputUser = document.getElementById("userName");
var inputPass = document.getElementById("passWord");

var formLogin = document.getElementById("login-form");
if (formLogin.attachEvent) {
	formLogin.attachEvent("submit",on);
}else{
	formLogin.addEventListener("submit",on);
}
function on(e){
	if (e.preventDefault) e.preventDefault();
	var User = inputUser.value;
	var Pass = inputPass.value;
	if (User == UserName && Pass == PassWord ) {
		window.location = "D:/codegym/baicuoiky/thontin.html";
	}else{
		alert("Account or password is incorrect");
	}
	return false;
}