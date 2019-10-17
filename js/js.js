//事件绑定
function addEvent(elem, type, fn){
	if(elem.addEventListener){
		elem.addEventListener(type, fn, false);
	}else{//IE7/8
		elem.attachEvent('on'+type, function(){
			fn.call(elem);	// IE低版本中，“this”的指向为“window”，通过“call”重新确定“this”的指向！
		})
	}
}

//事件解绑
function removeEvent(elem, type, fn){
	if(elem.removeEventListener){
		elem.removeEventListener(type, fn, false);
	}else{//IE7/8
		elem.detachEvent('on'+type, fn);
	}
}

//阻止事件默认行为（置于事件处理函数内部，ev为event对象，事件处理函数内部需提前有声明！）
if(ev.preventDefault){
	ev.preventDefault();
}else{	//IE7/8
	ev.returnValue=false;
}

/*☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★*/

//通过form的name，获取‘radio’或‘checkbox’的value值
function getChecked(form, name){
	var arr=[];
	for(var i=0; i<form[name].length; i++){
		if(form[name][i].checked){
			arr.push(form[name][i].value);
		}
	}
	return arr;
}

/*☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★*/

//获取下一个兄弟元素
function getNext(elem){
	if(elem.nextElementSibling){
		return elem.nextElementSibling;
	}else{//IE9-
		var next = elem.nextSibling;
		while(next && next.nodeType!=1){
			next = next.nextSibling;
		}
		return next;
	}
}

//获取上一个兄弟元素
function getPrev(elem){
	if(elem.previousElementSibling){
		return elem.previousElementSibling;
	}else{//IE9-
		var prev = elem.previousSibling;
		while(prev && prev.nodeType!=1){
			prev = prev.previousSibling;
		}
		return prev;
	}
}

/*----------------------------------------------------------------------------------------------------------------------*/

//自定义“getElementsByClassName”，兼容IE6/7/8
function getElementsByClassName(parentElem, tagName, className){
	var elems=parentElem.getElementsByTagName(tagName);
	var arr=[];
	
	for(var i=0; i<elems.length; i++){
		var arrClassName=elems[i].className.split(' ');
		
		for(var j=0; j<arrClassName.length; j++){
			if(arrClassName[j]==className){
				arr.push(elems[i]);
				break;
			}
		}
	}
	return arr;
}

//给元素添加className
function addClass(elem, className){
	if(elem.className==''){
		elem.className=className;
	}else{
		var arrClassName=elem.className.split(' ');
		var _index=arrIndexOf(arrClassName, className);
		if(_index==-1){
			elem.className+=' '+className;
		}
	}
}

//给元素删除className
function removeClass(elem, className){
	if(elem.className!=''){
		var arrClassName=elem.className.split(' ');
		var _index=arrIndexOf(arrClassName, className);
		if(_index!=-1){
			arrClassName.splice(_index, 1);
			elem.className=arrClassName.join(' ');
		}
	}
}

/*----------------------------------------------------------------------------------------------------------------------*/

//判断“v”在“arr”中是否存在
function arrIndexOf(arr, v){
	for(var i=0; i<arr.length; i++){
		if(arr[i]==v){
			return i;
		}
	}
	return -1;
}


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
//检查class是否存在
function hasClass(elem, className) {
	return !!elem.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}
//添加一个class
function addClass(elem, className) {
	if (!hasClass(elem, className)) {
		elem.className += ' ' + className;
	}
}
//移除一个class
function removeClass(elem, className) {
	if (hasClass(elem, className)) {
		elem.className = elem.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ');
	}
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */



/*☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★*/

//升序
function asd(a,b){return a-b;}	//作为sort方法的参数
//降序
function dsd(a,b){return b-a;}	//作为sort方法的参数
/*
变种：
function(a,b){return parseInt(a)-parseInt(b);}
function(a,b){return parseFloat(a)-parseFloat(b);}
*/
//乱序
function rdm(a,b){return Math.random()-0.5;}	//作为sort方法的参数
/*----------------------------------------------------------------------------------------------------------------------*/
//数组去重
function removeRepeat(arr){
	for(var i=0; i<arr.length; i++){
		for(var j=i+1; j<arr.length; j++){
			if(arr[i]==arr[j]){
				arr.splice(j, 1);
				j--;
			}
		}
	}
}
/*----------------------------------------------------------------------------------------------------------------------*/
//冒泡排序
function bubbleSort(arr){
	for(var n=1; n<=arr.length-1; n++){
		for(var i=0; i<arr.length-n; i++){
			if(arr[i]>arr[i+1]){//“>”号为升序，“<”号为降序
				var temp=arr[i];
				arr[i]=arr[i+1];
				arr[i+1]=temp;
			}
		}
	}
}

/*☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★*/

//获取元素CSS样式
function getStyle(elem, attr){
	if(elem.currentStyle) {//IE9-
		return elem.currentStyle[attr];
	}else{
		return getComputedStyle(elem)[attr];
	}
}

//设置元素CSS样式
function setStyle(elem, json){
	for(var attr in json){
		elem.style[attr]=json[attr];
	}
}

/************************************************************************************************************************/

//缓冲运动[多值]
function animate(elem, json, n, fn){
	clearInterval(elem.timer);
	
	elem.timer=setInterval(function(){
		var stop=true;
		
		for(var attr in json){
			var cur=0;
		
			if(attr=='opacity'){
				cur=parseInt(parseFloat(getStyle(elem, attr))*100);
			}else{
				cur=parseInt(getStyle(elem, attr));
			}

			var spd=(json[attr]-cur)/n;
			spd=spd>0?Math.ceil(spd):Math.floor(spd);
			
			if(cur!=json[attr]){
				stop=false;
			}
			
			if(attr=='opacity'){
				elem.style.filter='alpha(opacity='+(cur+spd)+')';
				elem.style.opacity=(cur+spd)/100;
			}else{
				elem.style[attr]=cur+spd+'px';
			}
		}
		
		if(stop){
			clearInterval(elem.timer);
			fn && fn();
		}
		
	},30)
}

/************************************************************************************************************************/

//缓冲运动[单值]
function easeMove(elem, attr, tgt, n, fn){
	clearInterval(elem.timer);
	
	elem.timer=setInterval(function(){
		var cur=0;
		
		if(attr=='opacity'){
			cur=parseInt(parseFloat(getStyle(elem, attr))*100);
		}else{
			cur=parseInt(getStyle(elem, attr));
		}
		
		var spd=(tgt-cur)/n;
		spd=spd>0?Math.ceil(spd):Math.floor(spd);
		
		if(cur==tgt){
			clearInterval(elem.timer);
			fn && fn();
		}else{
			if(attr=='opacity'){
				elem.style.filter='alpha(opacity:'+(cur+spd)+')';
				elem.style.opacity=(cur+spd)/100;
			}else{
				elem.style[attr]=cur+spd+'px';
			}
		}
	},30)
}

/*----------------------------------------------------------------------------------------------------------------------*/

//弹性运动[单值]
function flexMove(elem, attr, tgt){
	clearInterval(elem.timer);
	
	elem.spd=0;
	
	elem.timer=setInterval(function(){
		elem.spd+=(tgt-parseInt(getStyle(elem,attr)))/5;
		elem.spd*=0.75;
		
		if(Math.abs(elem.spd)<1 && Math.abs(parseInt(getStyle(elem,attr))-tgt)<1){
			clearInterval(elem.timer);
			elem.style[attr]=tgt+'px';
		}else{
			var P=parseInt(getStyle(elem,attr))+elem.spd;
			if(P<2){P=2};
			elem.style[attr]=P+'px';
		}
	
	}, 30)
}

/*----------------------------------------------------------------------------------------------------------------------*/

//刚性运动[单值]
function rigidMove(elem, attr, tgt){
	clearInterval(elem.timer);
	
	elem.spd=30;
	
	elem.timer=setInterval(function(){
		elem.spd+=10;
		
		var P=parseInt(getStyle(elem,attr))+elem.spd;
		
		if(P>tgt){
			P=tgt;
			elem.spd*=-1;
		}
		
		elem.spd*=0.85;
		
		if(tgt-P<1 && Math.abs(elem.spd)<1){
			clearInterval(elem.timer);
			elem.style[attr]=tgt+'px';
			elem.spd=30;
		}else{
			if(P<2){P=2};
			elem.style[attr]=P+'px';
		}
		
	}, 30)
}

/************************************************************************************************************************/

//匀速运动[单值]
function linearMove(elem, attr, spd, tgt, fn){
	spd=parseInt(getStyle(elem, attr))<tgt?spd:-spd;
	clearInterval(elem.timer);
	elem.timer=setInterval(function(){
		var dis=parseInt(getStyle(elem, attr))+spd;
		
		if(dis>tgt && spd>0 || dis<tgt && spd<0){
			dis=tgt;
			clearInterval(elem.timer);
			fn && fn();
		}
		elem.style[attr]=dis+'px';
	}, 30);
}

/*----------------------------------------------------------------------------------------------------------------------*/

//透明度渐变
function fade(elem, spd, tgt, fn){
	spd=parseFloat(getStyle(elem, 'opacity'))<tgt?spd:-spd;
	clearInterval(elem.timer);
	elem.timer=setInterval(function(){
		var dis=parseFloat(getStyle(elem, 'opacity'))+spd;
		
		if(dis>tgt && spd>0 || dis<tgt && spd<0){
			dis=tgt;
			clearInterval(elem.timer);
			fn && fn();
		}
		elem.style.opacity=dis;
		elem.style.filter='alpha(opacity='+dis*100+')';
	}, 30);
}

/*----------------------------------------------------------------------------------------------------------------------*/

//抖
function shake(elem, attr, fn){
	if(elem.shaked){
		return;
	}
	elem.shaked=true;
	
	var arr=[];
	var pos=parseInt(getStyle(elem, attr));
	var num=0;
	
	for(var i=20; i>0; i-=2){
		arr.push(i, -i);
	}
	arr.push(0);
	
	clearInterval(elem.timer);
	
	elem.timer=setInterval(function(){
		elem.style[attr]=pos+arr[num]+'px';
		num++;
		if(num===arr.length){
			clearInterval(elem.timer);
			elem.shaked=false;
			fn && fn();
		}
	}, 30)
}

/*☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★*/

//获取元素到页面的“left”和“top”值
function getAbsPos(elem){
	var pos={
		'left': 0,
		'top': 0
	}
	
	while(elem){
		pos.left+=elem.offsetLeft;
		pos.top+=elem.offsetTop;
		elem=elem.offsetParent;
	}
	return pos;
}

/*☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★*/

//读取Cookie
function getCookie(key){
	var arr1=document.cookie.split('; ');
	for(var i=0; i<arr1.length; i++){
		var arr2=arr1[i].split('=');
		if(decodeURIComponent(arr2[0])==key){
			return decodeURIComponent(arr2[1]);
		}
	}
	
	//如果没找到
	return '';
}

//设置Cookie
function setCookie(key, value, t){
	var date=new Date();
	date.setDate(date.getDate()+t);
	document.cookie=encodeURIComponent(key)+'='+encodeURIComponent(value)+';expires='+date.toGMTString();
}

//删除Cookie
function removeCookie(key) {
	setCookie(key, '', -1);
}

/*☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★*/

//将xml字符串解析为xml对象：
function getXmlDom(xmlStr){
	var xmlDom=null;
	if(window.DOMParser){	//标准浏览器
		var parser=new DOMParser();
		xmlDom=parser.parseFromString(xmlStr, 'text/xml');
	}else{	//仅IE7/8
		xmlDom=new ActiveXObject('MSXML2.DOMDocument');
		xmlDom.loadXML(xmlStr);
	}
	return xmlDom;
}

// 将xml对象序列化为xml字符串：
function serializeXML(xmlDom){
	var xmlStr='';
	if(window.XMLSerializer){	//标准浏览器
		var serializer=new XMLSerializer();
		xmlStr=serializer.serializeToString(xmlDom);
	}else{	//仅IE7/8
		xmlStr=xmlDom.xml;
	}
	return xmlStr;
}

/*☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★*/

//Ajax
function ajax(method, url, data, success){
	var xhr=null;

	try{
		xhr=new XMLHttpRequest();
	}catch(err){
		xhr=new ActiveXObject('Microsoft.XMLHTTP');
	}

	var method=method.toUpperCase();

	// 用于清除缓存
	var random=Math.random();

	//解析为字符串形式
	if(typeof data=='object'){
		var str='';
		for(var key in data){
			str+=key+'='+data[key]+'&';
			// str+=encodeURIComponent(key)+'='+encodeURIComponent(data[key])+'&';	// 转码，防有“&”字符！
		}
		data=str.slice(0, -1);
	}

	if(method==='GET'){
		if(data){
			url+='?'+data;
		}else{
			url+='?t='+random;
			// url += '?stamp=' + new Date().getTime();	// 时间戳，为清除缓存！
		}
	}

	xhr.open(method, url, true);

	if(method==='GET'){
		xhr.send();
	}else{
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(data);
	}

	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				success && success(xhr.responseText);
			}else{
				console.log('出错了，错误码：' + xhr.status);
			}
		}
	}
}

/*☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★*/























