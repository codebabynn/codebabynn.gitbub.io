$(function(){
	var imgs=$('img',$('.imgs')[0]);
	var lis=$('li',$('.num')[0]);
	var num=0;
	var t=setInterval(move,2000);
	function move(){
		num++;
		if(imgs.length==num){
			num=0;
		}
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.display='none';
			lis[i].className='';
		}
		imgs[num].style.display='block';
		lis[num].className='hot';
	}

	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onmouseover=function(){
			num=this.index; //num值变为下标值
			clearInterval(t);
			for (var j = 0; j<imgs.length; j++) {
				imgs[j].style.display='none';
				lis[j].className='';
			}
			imgs[this.index].style.display='block';
			lis[this.index].className='hot';
		}
		lis[i].onmouseout=function(){
			t=setInterval(move,2000);
		}
	}
	var lbtn=$('div',$('.btn')[0]);
	lbtn[0].onclick=function(){
		num--;
		if(num<0){
			num=imgs.length-1;
		}
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.display='none';
			
			lis[i].className='';
		}
		imgs[num].style.display='block';
		lis[num].className='hot';
	}
	lbtn[1].onclick=function(){
		move();
	}
	lbtn[0].onmouseover=lbtn[1].onmouseover=function(){
		clearInterval(t);
	}
	lbtn[0].onmouseout=lbtn[1].onmouseout=function(){
		t=setInterval(move,2000);
	}



	function xx(a,b,c,d){
		var imgsbox=a;
		var imgs=b;
		var lis=c;
		var flag=true;
		var iw=parseInt(getStyle(imgs[0],'width'));
		for (var i = 0; i < imgs.length; i++) {
			if(i==0){
				continue;
			}
			imgs[i].style.left=iw+'px';
		}
		var index=0;  //当前图片下标
		var num=0;
		var t=setInterval(move,2000);
		function move(){
			if(!flag){
				return;
			}
			flag=false;
			num++;
			if(num==imgs.length){
				num=0;
			}
			imgs[num].style.left=iw+'px';
			animate(imgs[num],{left:0},800,function(){
				flag=true;
			});
			animate(imgs[index],{left:-iw},800,function(){
				flag=true;
			});
			//下标
			lis[index].className='';
			lis[num].className='li_hot';
			index=num;
		}
		for (var i = 0; i < lis.length; i++) {
			lis[i].index=i;
			lis[i].onmouseover=function(){
				clearInterval(t);
				if(!flag){
					return;
				}
				//this.index 即将要显示的图片
				if(index==this.index){
					return;
				}
				flag=false;
				imgs[this.index].style.left=iw+'px';
				animate(imgs[this.index],{left:0},800,function(){
					flag=true;
				});
				animate(imgs[index],{left:-iw},800,function(){
					flag=true;
				});
				lis[index].className='';
				lis[this.index].className='li_hot';
				index=this.index;
				num=this.index; //num值变为下标值

			}
			lis[i].onmouseout=function(){
				t=setInterval(move,2000);
			}
		}
		var lbtn=d;
		lbtn[0].onclick=function(){
			if(!flag){
				return;
			}
			flag=false;
			num--;
			if(num<0){
				num=imgs.length-1;
			}
			imgs[num].style.left=iw+'px';
			animate(imgs[num],{left:0},800,function(){
				flag=true;
			});
			animate(imgs[index],{left:-iw},800,function(){
				flag=true;
			});
			lis[index].className='';
			lis[num].className='li_hot';
			index=num;

		}
		lbtn[1].onclick=function(){
			move();
		}
		lbtn[0].onmouseover=lbtn[1].onmouseover=function(){
			clearInterval(t);
		}
		lbtn[0].onmouseout=lbtn[1].onmouseout=function(){
			t=setInterval(move,2000);
		}
	}
	xx($('.li_imgs')[0],$('.li_i',$('.li_imgs')[0]),$('li',$('.li_num')[0]),$('div',$('.li_btn')[0]));
	xx($('.li_imgsa')[0],$('.li_ia',$('.li_imgsa')[0]),$('li',$('.li_numa')[0]),$('div',$('.li_btna')[0]));
	xx($('.li_imgsb')[0],$('.li_ib',$('.li_imgsb')[0]),$('li',$('.li_numb')[0]),$('div',$('.li_btnb')[0]));
	xx($('.li_imgsc')[0],$('.li_ic',$('.li_imgsc')[0]),$('li',$('.li_numc')[0]),$('div',$('.li_btnc')[0]));
	xx($('.li_imgsd')[0],$('.li_id',$('.li_imgsd')[0]),$('li',$('.li_numd')[0]),$('div',$('.li_btnd')[0]));


	function gd(a,b){
		var gd=a;
		var btn=b;
		hover(btn,function(){
			animate(gd,{bottom:0,opacity:1},600);
		},function(){
			animate(gd,{bottom:-60,opacity:0},600);
		})
	}
	gd($('.gd')[0],$('.li_zn1')[0]);
	gd($('.gda')[0],$('.li_zna')[0]);
	gd($('.gdb')[0],$('.li_znb')[0]);
	gd($('.gdc')[0],$('.li_znc')[0]);
	gd($('.gdd')[0],$('.li_znd')[0]);
	gd($('.gde')[0],$('.li_zne')[0]);
	gd($('.gdf')[0],$('.li_znf')[0]);
	gd($('.gdg')[0],$('.li_zng')[0]);
	gd($('.gdh')[0],$('.li_znh')[0]);
	gd($('.gdi')[0],$('.li_zni')[0]);
	gd($('.gdj')[0],$('.li_znj')[0]);
	gd($('.gdk')[0],$('.li_znk')[0]);
	gd($('.gdl')[0],$('.li_znl')[0]);
	gd($('.gdm')[0],$('.li_znm')[0]);
	gd($('.gdn')[0],$('.li_znn')[0]);
	gd($('.gdo')[0],$('.li_zno')[0]);

	/*function ydh(a,b){
		var lsa=a;
		var rsa=b;
		var iw=parseInt(getStyle(rsa[0],'bottom'));
		for (var i = 0; i < lsa.length; i++) {
			lsa[i].index=i;
			lsa[i].onmouseover=function(){
				for (var j = 0; j < rsa.length; j++) {
					rsa[j].style.display='none';
				}
				rsa[this.index].style.display='block';
				animate(rsa[0],{bottom:0},600);
			}
			lsa[i].onmouseout=function(){
				animate(rsa[0],{bottom:-60},600);

			}
		}
	}
	ydh($('.li_zn1'),$('.gd'));*/
})