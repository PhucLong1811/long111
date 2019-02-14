var dataList = [];
function Create(){
	var userName = document.getElementById('username').value;
	var passWord = document.getElementById('password').value;
	var user = {
		"username": userName,
		"password": passWord,
	};
	if (currIndex == -1) {
		addTag(user)
	}else{
		dataList[currIndex] = user;
		currIndex = -1;
		document.getElementById("Create1").innerHTML = "Tạo Mới";
		displayAll()
	}
}
function displayAll(){
	var dataListTag = document.getElementById("dataList");
	dataListTag.innerHTML = "";
	for (j = 0; j< dataList.length; j++){
		var user = dataList[j];
		dataListTag.innerHTML +="<tr style='border-bottom: 1px solid #000;' class='m-3;'>" + 
		"<td class='ml-2;'>" + (j+1) + "</td>" + 
		"<td>" + user.username + "</td>" + 
		"<td>" + user.password + "</td>" +
		"<td><button onclick='edit("+j+")' class='btn btn-warning'>Sửa</button><td>" + 
		"<td><button onclick='delete1("+j+")' class='btn btn-danger'>Xóa</button><td>" +  
		"</tr>";
	}
}
function addTag(user){
	dataList.push(user);
	var dataListTag = document.getElementById("dataList");
	dataListTag.innerHTML +="<tr style='border-bottom: 1px solid #000;' class='m-3;'>" + 
	"<td>" + dataList.length + "</td>" + 
	"<td>" + user.username + "</td>" + 
	"<td>" + user.password + "</td>" +
	"<td><button onclick='edit("+(dataList.length - 1 )+")' class='btn btn-warning'>Sửa</button><td>" + 
	"<td><button onclick='delete("+(dataList.length - 1 )+")' class='btn btn-danger'>Xóa</button><td>" +  
	"</tr>";
}
var currIndex = -1;
function edit(index){
	currIndex = index;
	var user = dataList[index];
	document.getElementById('username').value = user.username
	document.getElementById('password').value = user.password
	document.getElementById("Create1").innerHTML = "Lưu";
}
/*function delete(index){
	dataList.splice(index,1);
	
}*/
function delete1(index){
	dataList.splice(index,1);
	displayAll();
}

