function GetQueryString(name) 
{ 
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
     var r = window.location.search.substr(1).match(reg); 
     if(r!=null)return  unescape(r[2]); return null; 
} 




var divch=0;
var fw = new Object();
var gd;
fw.Browser = {
	ie: /msie/.test(window.navigator.userAgent.toLowerCase()),
	moz: /gecko/.test(window.navigator.userAgent.toLowerCase()),
	opera: /opera/.test(window.navigator.userAgent.toLowerCase())
};
function dbwindowHeight() {
		var E = document.documentElement;
		return self.innerHeight || (E && E.clientHeight) || document.body.clientHeight;
	}
fw.$ = function(s)
{
	return (typeof s == 'object') ? s: document.getElementById(s);
};

fw.Element = {
	remove: function()
	{
		for (var i=0; i<arguments.length; i++)
		{
			try
			{
				fw.$(arguments[i]).parentNode.removeChild(fw.$(arguments[i]));
			}
			catch (e)
			{
			}
		}
	}
};

fw.JsLoader = {
	load: function(sUrl, fCallback)
	{
		fw.Element.remove(sUrl);
		var _script = document.createElement('script');
		_script.setAttribute('type', 'text/javascript');
		_script.setAttribute('id', sUrl);
		_script.setAttribute('src', sUrl);
		_script.setAttribute('charset', "gb2312");
		document.getElementsByTagName('head')[0].appendChild(_script);
		if (fw.Browser.ie)
		{
			_script.onreadystatechange = function()
			{
				if (this.readyState=='loaded' || this.readyState=='complete')
				{
					fCallback();
					fw.Element.remove(_script);
				}
			};
		}
		else if (fw.Browser.moz || fw.Browser.opera)
		{
			_script.onload = function()
			{
				fCallback();
				fw.Element.remove(_script);
			};

		}
		else
		{
			fCallback();
			fw.Element.remove(_script);
		}
	}

};

fw.load = function(t,i,o)
{
        if(t==0) 
        {
                u="players"; 
                f="info.js";
        }
        else if(t==1) 
                {
                        u="teams"; 
                        f="tinfo.json";
                 }
				 else if(t==2)    
                {
                        u="teams"; 
                        f="tinfo.json";  
                 }
				  else if(t>=3)    
                {
                        u="teams"; 
                        f="tinfo.json";  
                 }
                 else return;
        var myDate=new Date()
        //fw.JsLoader.load("http://worldcup.qq.com/d/"+u+"/"+Math.ceil(i/1000)+"/"+i+"/info.js?cache="+myDate.getHours(), function()
  // fw.JsLoader.load(  
					
			//		function()
	//{
	//	if(typeof winfo!="undefined")
	//	{
		        
		                if(divch==0)
        		        {
        		                wh=dbwindowHeight();
                		        var newDiv = document.createElement("div");
                                        newDiv.id = 'newDiv';
                                        newDiv.style.position = "absolute";
                                        newDiv.style.zIndex = "9999";
                                        newDiv.style.width = "232px";
                                        newDiv.onmouseover = jtime;
                                        newDiv.onmouseout = Judge;
                                        newDiv.className="wckey-tips";
                                        var h=132;
                                        newDiv.style.height = "132px";
                                        var dbt=o.offsetTop;
                                        var dbl=o.offsetLeft;
                                        var ofH=o.offsetHeight;    
                                        while(o=o.offsetParent)    
                                        {    
                                                dbl+=o.offsetLeft;    
                                                dbt+=o.offsetTop;       
                                        } 
                                        var bt=document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
                                        var b=wh-(dbt-bt)-ofH;
                                        if(b>h) h=dbt+ofH; else h=dbt-h;
                                        newDiv.style.top = h+"px";
                                        newDiv.style.left = dbl+"px";
                                        newDiv.style.background = "#ebf2fa";
                                        newDiv.style.border = "solid 1px #4d637c";
                                        //newDiv.style.padding = "5px";
                                        
                                        if(t==0)
                                        {
											
                                                var ihtml="";
ihtml+='<br><div class="box"><a target="_blank" href="http://www.apesk.com"><img src="http://www.apesk.com/mbtihd/img/logo_normal_alpha2.gif" style="FLOAT: left; MARGIN: 0px 10px 10px 0px;border:0;"  /></a><em>��飺</em>��������о������������ѧ�о���������ѧ�о�����������Դר�Һ͹���ʦ��ɵ���ȤС�顣<a target="_blank" href="http://www.apesk.com/mensa/aboutcc_new.html">[����]</a></div>';
                                               
                                                
                                        }else if(t==1)
                                                { 
										
										//zhiwei=document.writeln (zhiwei);
												var ihtml="";
											
                                                
                                             ihtml+='<div class="box"><em>���ڡ���¹Ⱥ�ۡ���</em>�����꣬�����������ҵ���д����ģһֱ����20%���ϵ�������Ȼ������ҵ��һ���г�Ӫ���ֶβ����ḻ����ʹ���������������£�Ҳֻ��ǿά��ӯ��ƽ�⡣Ŀǰ�ľ�Ӫ�ùɶ����ǣ����͸��δ�����������ر��ͷ��տ�����ʵ�ֹɶ���ֵ����<a href="http://www.apesk.com/sandbox/huntingdeer.asp"target="_blank">[��ϸ]</a></div>';
												
														
                                                }
												else if(t==2)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><em>������</em>MBTI�ʾ��Ϊȫ����������ѧ�����߼��Ŵ��ŶӸ���MBTI����ģ�ͣ��ο���������ѧ���������޶�����</div>';
     
                                                }
												else if(t==3)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><em>�˽�MBTI��</em><br>1��<a href="http://www.apesk.com/cai/Article/info_432.html" target="_blank">MBTI������ѧ��Դ</a><br>2��<a href="http://www.apesk.com/mbtihd/mbti_all.html"target="_blank">MBTI����ʷ</a></div>';
     
                                                }
												else if(t==4)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><em>MBTI�°�ĺô���</em><br>1��������һ����Զ�������һ��<br>2������������һ����Ļ����ɣ��������ҳ�档<a href="http://www.apesk.com/mbti/fd.asp"target="_blank"><br>3����ʼ�����°�MBTI</div>';
     
                                                }
												else if(t==5)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><br><img src="pic/jung2.jpg"style="FLOAT: left; MARGIN: 0px 2px 2px 0px" ><em>�ٸ�(Carl G. Jung , 1875��1961):</em>��ʿ����ѧ�Һ;������ҽʦ����������ѧ�Ĵ����ߡ�<a href="http://www.apesk.com/choose/5/mbtijung.html"target="_blank">[��ϸ]</a></div>';
     
                                                }
												else if(t==7)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><em><b>�Ŵ�������ѣ�</b>����Ŵ�ǰ��Ҫ������������Ŷ��</em><br>1������ǰҳ�����ʾ����鿴��������<br>2���������������ҵ�����Ŵ�����ʽ����<br>3����������Ҫ��20��������ɡ��Ͽ��ж��ɣ�</div>';
     
                                                }
												else if(t==8)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><br><em><b>�Ŵ�������ѣ�</b></em><br>1�����ڽ���ֻ��������޷�ע�ᡢ���ʼ��ظ�<br>2�����������ʾ�����ҵ����������ڵ�ע�����Ӳ�ע������ʹ��ȫ�����ܡ�</div>';
     
                                                }
													else if(t==9)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><br><em><b>�Ŵ�������ѣ�</b></em>��������������ܲ鿴������������Ŷ�������������ǰ����������<br><br><input class="box" onclick="Judge2();" type="submit" value="��...�����������"></div>';
     
                                                }
												
												else if(t==19)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><br><em><b>�Ŵ�������ѣ�</b></em>���MBTI�ڶ������Բ��ܿ���������������Ŷ�������������ǰ���ڶ���������ڣ�<br><br><input class="box" onclick="Judge2();" type="submit" value="��...�����������"></div>';
     
                                                }
												
                                        newDiv.innerHTML = ihtml;
                                
                                        document.body.appendChild(newDiv); 
                                        divch=1;
                                } 

	//	}
		
		else{
		        return;       
//	}
};
};

var db_gtime=null;
var docEle = function() {
return document.getElementById(arguments[0]) || false;
};
var jtime=function()
{
clearTimeout(db_gtime);
};
function openNewDiv(o,t,i) 
{
//t 0��Ա 1��� 2����
if (docEle('newDiv')) document.body.removeChild(docEle('newDiv'));
divch=0;
clearTimeout(db_gtime);
fw.load(t,i,o);
//setTimeout(function(){fw.load(t,i,o);},2);
};
function delDiv() {
        if (docEle('newDiv')) document.body.removeChild(docEle('newDiv'));
        divch=0;
};
function Judge(){
        db_gtime=setTimeout(delDiv,200);
}
function Judge2(){
        db_gtime=setTimeout(delDiv,1);
}
/*  |xGv00|295870ba552066345eb4815821b4836b */