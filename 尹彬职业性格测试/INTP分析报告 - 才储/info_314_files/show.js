function VCode(tt)
{
	var s = "";
	var v = 15;
	if (tt.length>10){
		tt = tt.substr(0, 10);
	}
	for(var i=0; i<tt.length; i++){
		if (i==v || i==tt.length-1 && v>=tt.length){
			s += v + tt.charCodeAt(i);
		}else{
			s += tt.charCodeAt(i);
		}
	}
	return s;
}

function checkRemark()
			{
			var form=document.getElementById("svcomment");
			var remarkSize = 300;
			if (form.com_name.value=="")
			{	alert("请填写您的昵称（不必填真实姓名）");
				form.com_name.focus();
				return false;
			}
			if (form.com_name.value.length>10)
			{	alert("姓名不可以超过10个字");
				form.com_name.focus();
				return false;
			}
			if (form.code.value=="")
			{	alert("请填写验证码");
				form.code.focus();
				return false;
			}
			if (form.com_content.value=="")
			{	alert("请填写评论内容");
				form.com_content.focus();
				return false;
			}
			if (form.com_content.value.length>remarkSize)
			{	form.com_content.value = form.com_content.value.substr(0,remarkSize);
				showLen(form.com_content);
				form.com_content.focus();
				alert("评论内容不可以超过"+remarkSize+"字,已帮你删除多余部分");
				return false;
			}
			form.submit.disabled=true;
			form.vcode.value = VCode("新一代凹丫丫网站管理系统问世");
			return true;
			}
			function showLen(obj)
			{
				document.getElementById("bodyLen").value=obj.value.length;
			}