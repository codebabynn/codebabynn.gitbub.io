window.onload=function(){
var Row=15,
    wid=Math.floor(600-Row)/Row+'px',
    sence=document.getElementById('sence');
    for(var i=0;i<Row;i++){
       var el=document.createElement('div');
       el.style.position='absolute';
       el.style.top=(600/Row)/2+(600/Row)*i+'px';
       el.style.left='0px';
       el.style.width='600px';
       el.style.height='1px';
       el.style.background='#fff';
       sence.appendChild(el);
       var el2=document.createElement('div');
       el2.style.position='absolute';
       el2.style.left=(600/Row)/2+(600/Row)*i+'px';
       el2.style.top='0px';
       el2.style.height='600px';
       el2.style.width='1px';
       el2.style.background='#fff';
       sence.appendChild(el2);
           for(var j=0;j<Row;j++){
                div=document.createElement('div');
                div.setAttribute('class','block');
                div.style.width=wid;
                div.style.height=wid;
                sence.appendChild(div);
                div.setAttribute('id',i+'_'+j)
            }
    }
    var block=document.getElementsByClassName('block');
    var kaiguan=true;
    var blct1={};
    var blct2={};
    var panduan=function(id,dic){
        var x=Number(id.split('_')[0]);
        var y=Number(id.split('_')[1]);
        var tx,ty;
        var hang=1;
        tx=x;ty=y;
        while(dic[tx+'_'+(ty+1)]){hang++,ty++};
        tx=x;ty=y;
        while(dic[tx+'_'+(ty-1)]){hang++,ty--};
        if(hang>=5)return true;

        var lie=1;
        tx=x;ty=y;
        while(dic[(tx+1)+'_'+ty]){lie++,ty--};
        tx=x;ty=y;
        while(dic[(tx-1)+'_'+ty]){lie++,tx--};
        if(lie>=5)return true;

        var zx=1;
        tx=x;ty=y;
        while(dic[(tx-1)+'_'+(ty+1)]){zx++,tx--,ty++};
        tx=x;ty=y;
        while(dic[(tx+1)+'_'+(ty-1)]){zx++,tx++,ty--};
        if(zx>=5)return true;

        var yx=1;
        tx=x;ty=y;
        while(dic[(tx+1)+'_'+(ty+1)]){yx++,tx++,ty++};
        tx=x;ty=y;
        while(dic[(tx-1)+'_'+(ty-1)]){yx++,tx--,ty--};
        if(yx>=5)return true;

        return false;
    };
    for(var i=0;i<block.length;i++){
        block[i].onclick=function(){
            var id=this.getAttribute('id');
            if(this.hasAttribute('hasColor')){return;}
            if(kaiguan){
                blct1[id]=true;
                this.style.background='#fff';kaiguan=false;
                this.style.boxShadow='0 2px 10px #240D03 inset';
                if(panduan(id,blct1)){
                    alert('白棋赢了!!!!!');
                }
            }else{
                blct2[id]=true;
                this.style.background='#000';kaiguan=true;
                this.style.boxShadow='0 2px 8px #FAF5E3 inset';
                if(panduan(id,blct2)){
                    alert('黑棋赢了!!!!!');
                }
            }
            this.setAttribute('hasColor','true');
            
            
        }
    }
}