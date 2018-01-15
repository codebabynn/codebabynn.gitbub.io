$(function(){
    //网站导航下拉框
    var box=$('.leftbox')[0];
    var daoHang=$('.wanzhangdaohang')[0];
    var xiaLa=$('.site-nav-child')[0];
    box.onmouseover=function(){
        daoHang.style.border="1px solid #ddd";
        daoHang.style.borderBottom="none";
        daoHang.style.background="#fff";
        xiaLa.style.display="block";
    }
    box.onmouseout=function(){
        daoHang.style.border="none";
        daoHang.style.background="none";
        xiaLa.style.display="none";
    }
    //我的订单下拉框
    var myOrder=$('.my-order-handle')[0];
    var my_order=$('a',myOrder)[0];
    var myOrderChild=$('.myorder-child')[0];
    myOrder.onmouseover=function(){
        my_order.style.border="1px solid #ddd";
        my_order.style.borderBottom="none";
        my_order.style.background="#fff";
        myOrderChild.style.display="block";
    }
    myOrder.onmouseout=function(){
        my_order.style.border="none";
        my_order.style.background="none";
        myOrderChild.style.display="none";
    }
    //我的金融下拉框
    var myHandle=$('.my-suning-handle')[0];
    var my_handel=$('a',myHandle)[0];
    var myChild=$('.mysuning-child')[0];
    myHandle.onmouseover=function(){
        my_handel.style.border="1px solid #ddd";
        my_handel.style.borderBottom="none";
        my_handel.style.background="#fff";
        myChild.style.display="block";
    }
    myHandle.onmouseout=function(){
        my_handel.style.border="none";
        my_handel.style.background="none";
        myChild.style.display="none";
    }


    //全部商品分类
    var listBox=$('.ng-sort-list-box')[0];
    var ul1=$('.sort-list',listBox)[0];
    var lis1=$('li',ul1);
    var sortDetail=$('.ng-sort-detail')[0];
    var cateLists=$('.cate-list');
    for(var i=0;i<lis1.length;i++){
        lis1[i].onmouseover=function(){

            var as=$('a',this);
            for(var j=0;j<as.length;j++){
                as[j].style.color="#555";
            }
            //lis1[i].index=i;
            for(var j=0;j<cateLists.length;j++){
                sortDetail.style.width="800px";
                cateLists[j].style.display="none";
            }

            cateLists[this.index].style.diplay="block";
        }
        lis1[i].onmouseout=function(){
            var as=$('a',this);
            for(var j=0;j<as.length;j++){
                as[j].style.color="#fff";
            }
            sortDetail.style.width=0;
        }
    }
})