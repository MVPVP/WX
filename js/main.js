function showCheck(a){/* 显示验证码图片 */
	var c = document.getElementById("canvaCode");
    var ctx = c.getContext("2d");
	ctx.clearRect(0,0,1000,1000);
	ctx.font = "80px Arial";
	ctx.fillText(a,0,100);
	var curCode=a.toUpperCase();
	sessionStorage.setItem('curCodeSession',curCode);
};
function createCode(){       
    code = "";      
    var codeLength = 4;//验证码的长度
    var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');      
          
    for(var i=0;i<codeLength;i++) {
       var charIndex = Math.floor(Math.random()*60);      
      code +=selectChar[charIndex];
    }      
    if(code.length != codeLength){      
      createCode();      
    }
    showCheck(code);
};
createCode();
var txtAll=document.querySelectorAll('.f-login input');
for(var i=0,len=txtAll.length;i<len;i++){
	txtAll[i].addEventListener('focus',function(){
		this.parentElement.classList.toggle('isfocus');
	});
	txtAll[i].addEventListener('blur',function(){
		this.parentElement.classList.toggle('isfocus');
	})
};

var ValidReg={
	mobile:/^1[3|4|5|7|8][0-9]{9}/,
	checkMobile:function(str){
		return ValidReg.mobile.test(str);
	}
};
//
$('.Icheckbox')[0].onclick=function(){
	$(this).toggleClass('check');
};
//$('.Icheckbox').on('click',function(){
//	$(this).toggleClass('check');
//});
var btnLogin=document.getElementById('f-btnLogin');
onlyClickOne=false;
btnLogin.onclick=function(){
	if(onlyClickOne)
		return;
	var account=document.getElementById('accountTxt');
	var accountVal=account.value.trim();
	var password=document.getElementById('passwordTxt');
	var codeTxt=document.getElementById('codeTxt');
	//var checkbox=document.getElementById('checkbox').checked;
	var checkbox=$('#checkbox').hasClass('check');
	var curCodeSession=sessionStorage.getItem('curCodeSession');
	var codeTxt=codeTxt.value.trim().toUpperCase();
	if(!ValidReg.checkMobile(account.value)){
		Mtoast('手机号码有误');
		return;
	}
	if(password.value.trim()===''){
		Mtoast('密码为空');
		return;
	}
	if(curCodeSession!==codeTxt){
		Mtoast('认证码有误');
		return;
	}
	if(!checkbox){
		Mtoast('请阅读并同意相关条款');
		return;
	}

	var wxCode=GetQueryString('code');
	var wxPassWord = hex_md5(wxCode+hex_md5(password.value.trim()));
	var serverInput=localStorage.getItem('serverInputLS');
	var URL=serverInput+'/wx/wx_user_login.json';
	//var URL='http://192.168.1.112:8084/wx/wx_user_login.json';//bendi
	localStorage.setItem('passWordLS',hex_md5(password.value.trim()));
	onlyClickOne=true;
	var datas = {
		code: wxCode,
		username: accountVal,
		password: wxPassWord
	};
	$.ajax({
		type: "POST",
		url: URL,
		data: datas,
		dataType: "json",
		success: function(msg){
			if(msg.code==='0'){
				//切换帐号成功，清理掉上一次帐号的缓存内容
				localStorage.removeItem('fs_ip_portLS');
				localStorage.removeItem('neigbor_idLS');
				localStorage.removeItem('neigbor_nameLS');
				//
				var res=msg.result;
				localStorage.setItem('usernameLS',res.username);
				localStorage.setItem('tokenLS',res.token);
				localStorage.setItem('userIdLS',res.user_id);
				localStorage.setItem('user_passwordLS',res.user_password);


				window.location.href='arealist.html';
			}else if(msg.code==='3'){
				Mtoast(msg.msg);
				reloadFunc(msg.msg);
			}else if(msg.code==='4008'){
				Mtoast(msg.msg);
				reloadFunc(msg.msg);
			}else if(msg.code==='1001'){
				Mtoast(msg.msg);
				reloadFunc(msg.msg);
			}else if(msg.code==='8'){
				Mtoast(msg.msg);
				reloadFunc(msg.msg);
			}else if(msg.code==='2002'){
				Mtoast(msg.msg);
				reloadFunc(msg.msg);
			}else{
				Mtoast('未知异常，请联系管理员');
				reloadFunc('未知异常，请联系管理员');
			}
			onlyClickOne=false;
		},
		error : function() {
			//alert("登录异常！");
			onlyClickOne=false;
			reloadFunc("登录异常！");
		}
	});
};
function reloadFunc(info){
	//强行刷新，更新URL的code；
	window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx48da68d54e97fe76&redirect_uri=http://weixin.gdsayee.com.cn/YLB/login.html&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect";
	Mtoast(info);
}
function Mtoast(ev,time){
	var box=document.createElement('div');
	box.setAttribute('class','m-toastBox');
	var text=document.createElement('div');
	text.setAttribute('class','m-toastText');
	var txt=document.createTextNode(ev);
	text.appendChild(txt);
	box.appendChild(text);
	document.getElementsByTagName('body')[0].appendChild(box);
	box.setAttribute('class','m-toastBox');
	$('.m-toastBox').addClass('m-active');
	setTimeout(removefunc,time||2000);
	function removefunc(){
		$('.m-toastBox').removeClass('m-active');
		setTimeout(removefunccc,500);
	}
	function removefunccc(){
		$('.m-toastBox').remove();
	}
}
window['Mtoast']=window.Mtoast;
function GetQueryString(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}



