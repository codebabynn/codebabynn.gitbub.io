$(function () {
    var ctrl=$(".banner-ctrl>li"),
        img=$(".banner-pic li"),
        henDot=$(".hen-dot"),
        shuDot=$(".shu-dot"),
        bg=$(".banner-ctrl .bg"),
        ctrlDot=$(".banner-ctrl .ctrl-dot"),
        hideLump=$(".banner-ctrl .title-item"),//隐藏的选项（鼠标放上去显示）
        everShuDot=$(".banner-ctrl p");//隐藏选项中每一个p
    var t,
        num= 0,
        parent,
        parentbor;
    t=setInterval(move,3000);
    function move(){
        num++;
        if(num==img.length){
            num=0;
        }
        pub();
    }
    //鼠标放在ctrl上后出现的效果
    ctrl.hover(overFun,outFun);
    //设置nowDot和nowAll分别用于获取当前鼠标所在ctrl的位置和鼠标所在btn中小白色块儿在所有白块儿中的位置
    var nowDot,nowAll;
    function overFun(){
        img.stop();
        clearInterval(t);
        //所有回到起始状态
        hideLump.css("display","none");
        img.animate({
            "opacity":"0",
            "z-index":"0"
        });
        ctrlDot.css("display","none");

        bg.animate({top:0,height:40});
        //当前的发生变化
        nowDot=henDot.index($(this).find(henDot).eq(0));    /*!!!!!!!!!!!!!!!!!!!*/
        nowAll=ctrl.index($(this));
        $(hideLump[nowAll]).css("display","block");
        $(img[nowDot]).animate({
            "opacity":"1",
            "z-index":"1"
        });
        $(shuDot[nowDot]).css("background","#fa0");
        num=nowDot;
    }
    function outFun(){
        clearInterval(t);
        t=setInterval(move,3000);
        $(hideLump[nowAll]).css({
            "display":"none"
        });
        parent=$(henDot[nowDot]).parent();
        parent.css("display","block");
        parentbor=$(henDot[nowDot]).parent().siblings().eq(0);
        parentbor.animate({top:-10,height:50});
        parentbor.finish();
        $(henDot[nowDot]).css({
            "background":"#fa0"
        });

    }
    /*鼠标放在title-item上面的效果（banner图变化，等等）
     * 设置竖的p,
     * nowNum存放当前鼠标所在p在整个jquery对象集合中的位置*/
    var nowNum;
    everShuDot.mouseenter(moverFun);
    function moverFun(){
        img.stop();
        nowNum=everShuDot.index($(this));
        img.animate({
            "opacity":"0",
            "z-index":"0"
        });
        shuDot.css("background","#fff");
        $(img[nowNum]).animate({
            "opacity":"1",
            "z-index":"1"
        });
        $(shuDot[nowNum]).css("background","#fa0");
        num=nowNum;
        nowDot=nowNum;
    }
    /*实现两边控制按钮的变化*/
    var prev=$(".banner-prev"),
        next=$(".banner-next");
    prev.click(prevFun);
    prev.hover(poverFun,poutFun);
    next.click(nextFun);
    next.hover(noverFun,noutFun);

    function prevFun(){
        num--;
        if(num==-1){
            num=img.length-1;
        }
        pub();
    }
    function poverFun(){
        clearInterval(t);
    }
    function poutFun(){
        clearInterval(t);
        t=setInterval(move,3000);
    }
    function nextFun(){
        num++;
        if(num==img.length){
            num=0;
        }
        pub();
    }
    function noverFun(){
        clearInterval(t);
    }
    function noutFun(){
        clearInterval(t);
        t=setInterval(move,3000);
    }
    function pub(){
        img.stop();
        img.animate({
            "opacity":"0",
            "z-index":"0"
        });
        bg.animate({top:0,height:40});
        henDot.css({
            "background":"#fff"
        });
        ctrlDot.css("display","none");
        $(img[num]).animate({
            "opacity":"1",
            "z-index":"1"
        });
        $(henDot[num]).css({
            "background":"#fa0"
        });
        //通过henDot找它的父
        parent=$(henDot[num]).parent();
        parent.css("display","block");
        //通过henDot找当前的bg
        parentbor=$(henDot[num]).parent().siblings().eq(0);
        parentbor.animate({top:-10,height:50});
        parentbor.finish();
    }

});
