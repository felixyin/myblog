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
ihtml+='<br><div class="box"><a target="_blank" href="http://www.apesk.com"><img src="http://www.apesk.com/mbtihd/img/logo_normal_alpha2.gif" style="FLOAT: left; MARGIN: 0px 10px 10px 0px;border:0;"  /></a><em>简介：</em>由神经外科研究生、精神分析学研究生、心理学研究生、人力资源专家和工程师组成的兴趣小组。<a target="_blank" href="http://www.apesk.com/mensa/aboutcc_new.html">[更多]</a></div>';
                                               
                                                
                                        }else if(t==1)
                                                { 
										
										//zhiwei=document.writeln (zhiwei);
												var ihtml="";
											
                                                
                                             ihtml+='<div class="box"><em>关于《逐鹿群雄》：</em>近两年，你所服务的商业银行存贷规模一直保持20%以上的增长，然而由于业务单一、市场营销手段不够丰富，即使在央行利好政策下，也只勉强维持盈亏平衡。目前的经营让股东心忧，如何透过未来的增长、回报和风险控制来实现股东价值……<a href="http://www.apesk.com/sandbox/huntingdeer.asp"target="_blank">[详细]</a></div>';
												
														
                                                }
												else if(t==2)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><em>声明：</em>MBTI问卷均为全球互联网心理学爱好者及才储团队根据MBTI理论模型，参考著名心理学文献制作修订而成</div>';
     
                                                }
												else if(t==3)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><em>了解MBTI：</em><br>1、<a href="http://www.apesk.com/cai/Article/info_432.html" target="_blank">MBTI的心理学起源</a><br>2、<a href="http://www.apesk.com/mbtihd/mbti_all.html"target="_blank">MBTI的历史</a></div>';
     
                                                }
												else if(t==4)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><em>MBTI新版的好处：</em><br>1、答完上一题后自动弹出下一题<br>2、整个过程在一个屏幕内完成，无需滚动页面。<a href="http://www.apesk.com/mbti/fd.asp"target="_blank"><br>3、开始体验新版MBTI</div>';
     
                                                }
												else if(t==5)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><br><img src="pic/jung2.jpg"style="FLOAT: left; MARGIN: 0px 2px 2px 0px" ><em>荣格(Carl G. Jung , 1875－1961):</em>瑞士心理学家和精神分析医师，分析心理学的创立者。<a href="http://www.apesk.com/choose/5/mbtijung.html"target="_blank">[详细]</a></div>';
     
                                                }
												else if(t==7)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><em><b>才储多戈提醒：</b>加入才储前先要完成下面的任务哦！</em><br>1、按当前页面的提示步骤查看完整报告<br>2、在完整报告内找到加入才储的正式链接<br>3、整个过程要在20分钟内完成。赶快行动吧！</div>';
     
                                                }
												else if(t==8)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><br><em><b>才储多戈提醒：</b></em><br>1、现在进入只能浏览，无法注册、发问及回复<br>2、按下面的提示步骤找到完整报告内的注册链接并注册后才能使用全部功能。</div>';
     
                                                }
													else if(t==9)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><br><em><b>才储多戈提醒：</b></em>完成新人任务后才能查看完整分析报告哦！点击链接立即前往任务区！<br><br><input class="box" onclick="Judge2();" type="submit" value="额...看完简版分析先"></div>';
     
                                                }
												
												else if(t==19)
                                                {
                                                var ihtml="";
                                             ihtml+='<div class="box"><br><em><b>才储多戈提醒：</b></em>完成MBTI第二步测试才能看到完整分析报告哦！点击链接立即前往第二步测试入口！<br><br><input class="box" onclick="Judge2();" type="submit" value="额...看完简版分析先"></div>';
     
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
//t 0球员 1球队 2赛程
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