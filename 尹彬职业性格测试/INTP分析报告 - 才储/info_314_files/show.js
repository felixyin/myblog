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
			{	alert("����д�����ǳƣ���������ʵ������");
				form.com_name.focus();
				return false;
			}
			if (form.com_name.value.length>10)
			{	alert("���������Գ���10����");
				form.com_name.focus();
				return false;
			}
			if (form.code.value=="")
			{	alert("����д��֤��");
				form.code.focus();
				return false;
			}
			if (form.com_content.value=="")
			{	alert("����д��������");
				form.com_content.focus();
				return false;
			}
			if (form.com_content.value.length>remarkSize)
			{	form.com_content.value = form.com_content.value.substr(0,remarkSize);
				showLen(form.com_content);
				form.com_content.focus();
				alert("�������ݲ����Գ���"+remarkSize+"��,�Ѱ���ɾ�����ಿ��");
				return false;
			}
			form.submit.disabled=true;
			form.vcode.value = VCode("��һ����ѾѾ��վ����ϵͳ����");
			return true;
			}
			function showLen(obj)
			{
				document.getElementById("bodyLen").value=obj.value.length;
			}