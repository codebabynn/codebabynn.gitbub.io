$(function () {
    var ctrl=$(".banner-ctrl>li"),
        img=$(".banner-pic li"),
        henDot=$(".hen-dot"),
        shuDot=$(".shu-dot"),
        bg=$(".banner-ctrl .bg"),
        ctrlDot=$(".banner-ctrl .ctrl-dot"),
        hideLump=$(".banner-ctrl .title-item"),//���ص�ѡ�������ȥ��ʾ��
        everShuDot=$(".banner-ctrl p");//����ѡ����ÿһ��p
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
    //������ctrl�Ϻ���ֵ�Ч��
    ctrl.hover(overFun,outFun);
    //����nowDot��nowAll�ֱ����ڻ�ȡ��ǰ�������ctrl��λ�ú��������btn��С��ɫ��������а׿���е�λ��
    var nowDot,nowAll;
    function overFun(){
        img.stop();
        clearInterval(t);
        //���лص���ʼ״̬
        hideLump.css("display","none");
        img.animate({
            "opacity":"0",
            "z-index":"0"
        });
        ctrlDot.css("display","none");

        bg.animate({top:0,height:40});
        //��ǰ�ķ����仯
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
    /*������title-item�����Ч����bannerͼ�仯���ȵȣ�
     * ��������p,
     * nowNum��ŵ�ǰ�������p������jquery���󼯺��е�λ��*/
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
    /*ʵ�����߿��ư�ť�ı仯*/
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
        //ͨ��henDot�����ĸ�
        parent=$(henDot[num]).parent();
        parent.css("display","block");
        //ͨ��henDot�ҵ�ǰ��bg
        parentbor=$(henDot[num]).parent().siblings().eq(0);
        parentbor.animate({top:-10,height:50});
        parentbor.finish();
    }

});
