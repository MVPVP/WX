//lockList
var listAll=document.querySelectorAll('.f-lockList .mui-table-view-cell');
var lockPop=document.getElementById('lockPop');
var markPop=document.getElementById('f-markPop');
var slideLook=document.getElementById('j-slideLook');
var passwordLock=document.querySelector('.passwordLock');

//mui('#f-homeList').on('tap','li',function(){
//	var curLock=document.querySelector('.curLock')
//	lockPop.style.display='block';
//	markPop.style.display='block';
//	var title=this.textContent.trim();
//	curLock.innerText=title;
//	curLock.setAttribute('id',this.getAttribute('id'))
//});


//var backpop=document.getElementsByClassName('f-back')[0];
//backpop.addEventListener('tap',function(){
//	lockPop.style.display='none';
//	markPop.style.display='none';
//})

//slideLook.addEventListener('drag',function(e){
//	var dragX=e.detail.deltaX;
//	var btnL=document.getElementById('lookBtn');
//	var maxL=this.clientWidth-52;
//	var rangebg=document.querySelector('.slideLook .range');
//	btnL.style.left=dragX+'px';
//	rangebg.style.right=(maxL-dragX+3)+'px';
//	if(btnL.style.left.replace('px','')<=0){
//		btnL.style.left=0+'px';
//	}
//	if(btnL.style.left.replace('px','')>=maxL){
//		btnL.style.left=maxL+'px';
//		rangebg.style.right=1+'px';
//	}
//});
//slideLook.addEventListener('dragend',function(e){
//	var btnL=document.getElementById('lookBtn');
//	var maxL=this.clientWidth-52;
//	var rangebg=document.querySelector('.slideLook .range');
//	if(btnL.style.left.replace('px','')>=maxL){
//		mui.toast('开锁成功')
//	}
//	btnL.style.left=0+'px';
//	rangebg.style.right=maxL+2+'px';
//
//});

//passwordLock.addEventListener('tap',function(){
//	var h3=document.querySelector('h3.curLock');
//	var curId=h3.getAttribute('id');
//	var curTitle=h3.textContent.trim();
//	var detailPage = mui.preload({url:'secret.html',id:'secret.html'});
//  mui.fire(detailPage,'newsId',{id:curId,text:curTitle});
//  mui.openWindow({
//  	url:'secret.html',
//  	id:'secret.html'
//  });
//});//真机上面有效；
