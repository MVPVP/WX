//var allPayTxt=document.querySelector('.f-bill .totalBox .money');
//var selPayTxt=document.querySelector('.f-bill .contain .allBill .all');
//var checkboxDefault=document.querySelectorAll('.f-bill form input[type=checkbox]:checked');
//var moneys=0;
//for (var i=0,len=checkboxDefault.length;i<len;i++) {
//	checkboxDefault[i].parentElement.addEventListener('click',function(){
//		var selPayTxtMon=document.querySelector('.f-bill .contain .allBill .all').querySelector('strong').innerHTML;
//		var money=this.querySelector('.money').innerHTML.replace('￥','');
//		if(this.querySelector('input:checked')){
//			moneys=eval(selPayTxtMon)-eval(money);
//		}else{
//			moneys=eval(selPayTxtMon)+eval(money);
//		}
//		selPayTxt.querySelector('strong').innerHTML=moneys.toFixed(2);
//	});
//	var money=checkboxDefault[i].parentElement.querySelector('.money').innerHTML.replace('￥','');
//	moneys+=eval(money);
//	allPayTxt.querySelector('strong').innerHTML=moneys;
//	selPayTxt.querySelector('strong').innerHTML=moneys;
//}



