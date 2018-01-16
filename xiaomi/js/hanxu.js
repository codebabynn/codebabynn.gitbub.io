//获取函数(兼容)  获取或者设置内容对象(对象没有innerText值为 undefined)  val修改内容
function getText(obj,val){
	if(obj.innerText!=undefined){
		if(val==undefined){			
			return obj.innerText;
		}else{
			obj.innerText=val;
			return val;
		}	
	}else{
		if(val==undefined){
			return obj.textContent;
		}else{
			obj.textContent=val;
			return val;
		}		
	}
}
//ClassName的 兼容问题
function getClass(classname,obj){
	//获取 obj下的类名 可传可不传 classname要获取的类名
	//判断浏览器的document对象是否有getElementsByClassName 属性 没有返回undefined
	var obj=obj||document;
	if(document.getElementsByClassName!=undefined){
		return obj.getElementsByClassName(classname);
	}else{
		var all=obj.getElementsByTagName('*');//获取所有标签
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,classname)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}
/*
	objclass 标签class
*/
function checkClass(objclass,newclass){
	var arr=objclass.split(" "); //类名为 多个兼容  字符串转换为数组
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]==newclass){
			return true;
		}
	}	
}
/*
selector  选择器[类名 ]

*/
function $(selector,obj){
	if (typeof selector=='string') {
		var obj=obj||document;
		var selector=trim(selector);
		var reg=/^([a-z][a-z|1-6]{0,10})\s+([a-z][a-z|1-6]{0,10})$/;
		if(reg.test(selector)){
			var result=reg.exec(selector);
			var s1=result[1];
			var s2=result[2];
			var newarr=[];
			var arr=document.getElementsByTagName(s1);
			for (var i = 0; i < arr.length; i++) {
				var arrs=arr[i].getElementsByTagName(s2);
				for (var j = 0; j < arrs.length; j++) {
					newarr.push(arrs[j]);
				}
			}
			return newarr;
		}

		
		if (selector.charAt(0)=='.') {
			return getClass(selector.slice(1),obj);
		}else if(selector.charAt(0)=='#'){
			return document.getElementById(selector.slice(1));
		}else if(/^[a-z][a-z|1-6]{0,10}$/.test(selector)){
			return obj.getElementsByTagName(selector);
		}else if(/^<[a-z][a-z|1-6]{0,10}>$/.test(selector)){
			return obj.createElement(selector.slice(1,-1));
		}
	}else if (typeof selector=='function') {
		window.onload=function(){
			selector();
		}
	}
}

//行内样式和外部样式通用的获取方法
//attr 获得的样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}
		
/*
obj  父元素
val  true 去掉所有文本节点 false 去掉空白文本节点留下文本节点
		判断是否有意义
获取所需节点*/
	function getChilds(obj,val){
		var val=val==undefined?true:val;
		var all=obj.childNodes;
		var arr=[];
		for (var i = 0; i < all.length; i++) {
			if(val==true){
				if(!(all[i].nodeType==3||all[i].nodeType==8)){
					arr.push(all[i]);
				}
			}else{
				if(!((all[i].nodeType==3&&trim(all[i].nodeValue)=='')||all[i].nodeType==8)){
					arr.push(all[i]);
				}
			}
			
		}
		return arr;
	}

/*去除字符串两边空格
	str 要处理的字符串
	a 全部
	s 两边
	l 左边
	r 右边
	m 中间
*/
	function trim(str,type){
		var type=type||'s';
		var newstr;
		switch(type){
			case's':
				newstr=str.replace(/^\s*|\s*$/g,'');
				break;
			case'a': 
				newstr=str.replace(/\s*/g,'');
				break;
			case'l':
				newstr=str.replace(/^\s*/,'');
				break;
			case'r':
				newstr=str.replace(/\s*$/,'');
				break;
			case'm':
				var lreg=/^\s*/;
				var rreg=/\s*$/;
				var l=lreg.exec(str)[0];
				var r=rreg.exec(str)[0];
				var m=str.replace(/\s*/g,'');
				newstr=l+m+r;
				break;
		}
		return newstr;
	}	

/* 获取第一个子节点*/
function getFirst(obj,val){
	return getChilds(obj,val)[0];
}
/*最后一个*/
function getLast(obj,val){
	var all=getChilds(obj,val);
	return all[all.length-1];
}

/*获取下一个
	val  true 去掉所有文本节点 false 去掉空白文本节点留下文本节点
		判断是否有意义

*/
function getNext(obj,val){
	var all=all==undefined?true:val;
	var next=obj.nextSibling;
	if(next==null){
		return false;
	}
	if(val==true){
		while(next.nodeType==3||next.nodeType==8){
			next=next.nextSibling;
			if(next==null){
				return false;
			}
		}
	}else{
		while((next.nodeType==3&&trim(next.nodeValue)=='')||next.nodeType==8){
			next=next.nextSibling;
			if(next==null){
				return false;
			}
		}
	}
	
	return next;
}
/*获取上一个*/
function getUp(obj,val){
	var all=all==undefined?true:val;
	var next=obj.previousSibling;
	if(next==null){
		return false;
	}
	if(val==true){
		while(next.nodeType==3||next.nodeType==8){
			next=next.previousSibling;
			if(next==null){
				return false;
			}
		}
	}else{
		while((next.nodeType==3&&trim(next.nodeValue)=='')||next.nodeType==8){
			next=next.previousSibling;
			if(next==null){
				return false;
			}
		}
	}
	return next;
}

/*
	插入最后
	obj 要插入的元素
	parent 父元素
*/
	function append(obj,parent){
		parent.appendChild(obj);
	}
/*
	插入最前
	obj 要插入的元素
	parent 父元素
*/
	function preappend(obj,parent){
		var first=getFirst(parent);
		if(first){
			parent.insertBefore(obj,first);
		}else{
			parent.appendChild(obj);
		}
	}

	/*追加到什么之前*/
    function insertBefore(obj,obj1){
    	var parent=obj1.parentNode;
    	parent.insertBefore(obj,obj1);
    }

     function insertAfter(obj,obj1){
     	var next=getNext(obj1);
    	var parent=obj1.parentNode;
    	if(next){
    		parent.insertBefore(obj,next);
    	}else{
    		parent.appendChild(obj);
    	}
    	
    }

  /*滚动条*/

  function gdt(){
  	return document.body.scrollTop?document.body:document.documentElement;
  }

/*事件绑定
	obj:要绑定的事件源
	event：要绑定的事件  加引号 ‘’
	fn：要处理的程序
 */
  function addEvent(obj,event,fn){
  	if(obj.addEventListener){
  		obj.addEventListener(event,fn,false);
  	}else{
  		obj.attachEvent('on'+event,fn)
  	}
  }

  function removeEvent(obj,event,fn){
  	if(obj.removeEventListener){
  		obj.removeEventListener(event,fn,false);
  	}else{
  		obj.detachEvent('on'+event,fn)
  	}
  }


  //获取距离窗口的距离

  		function offset(obj){
			var arr=[obj];
			var parent=obj.parentNode;
			var result={left:0,top:0};
			while(parent.nodeName!=='BODY'){
				var val=getStyle(parent,'position');
				if(val=='absolute'||val=='relative'||val=='fixed'){
					arr.push(parent);
				}
				parent=parent.parentNode;
			}
			for (var i = 0; i < arr.length; i++) {
				var borderW=0;
				var borderH=0;
				if(i>0){
					var borderW=parseInt(getStyle(arr[i],'borderLeftWidth'))||0;
					var borderH=parseInt(getStyle(arr[i],'borderTopWidth'))||0;
				}
				result.left+=borderW+arr[i].offsetLeft;
				result.top+=borderH+arr[i].offsetTop;
			}
			return result;
		}




/*

鼠标滚轮事件
obj:事件源
upfun: 向上滚动处理的函数
downfun:向下滚动
*/
function mouseWheel(obj,upfun,downfun){
	if(obj.attachEvent){
			obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
	}else if(obj.addEventListener){
			obj.addEventListener("mousewheel",scrollFn,false); //chrome,safari -webkit
			obj.addEventListener("DOMMouseScroll",scrollFn,false);
		//firefox -moz-
	}
	function scrollFn(e){
		var ev=e||window.event;	
		var num=ev.detail||ev.wheelDelta;
		if(num==120||num==-3){
				upfun.call(obj);
		}else if(num==-120||num==3){
				downfun.call(obj);
		}

		if (ev.preventDefault ){
			ev.preventDefault(); //阻止默认浏览器动作(W3C)
		}
		else{
			ev.returnValue = false;//IE中阻止函数器默认动作的方式
		}
	}
}


//判断某个元素是否包含有另外一个元素
function contains (parent,child) {
    if(parent.contains){
        return parent.contains(child) && parent!=child;
    }else{
        return (parent.compareDocumentPosition(child)===20);
    }
}


//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
    if(getEvent(e).type=="mouseover"){
        return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
            !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
    }else{
        return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
            !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
}


//鼠标移入移除事件
/*
 obj   要操作的对象
 overfun   鼠标移入需要处理的函数
 outfun     鼠标移除需要处理的函数
 */
function hover (obj,overfun,outfun) {
    if(overfun){
        obj.onmouseover=function  (e) {

            if(checkHover(e,obj)){
                overfun.call(obj,getEvent(e));
            }
        }
    }
    if(outfun){
        obj.onmouseout=function  (e) {
            if(checkHover(e,obj)){
                outfun.call(obj,getEvent(e));
            }
        }
    }
}

//获得事件对象
function getEvent (e) {
    return e||window.event;
}