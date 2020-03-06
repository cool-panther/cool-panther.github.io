function refreshCaptcha()
{
	var img = document.images['captchaimg'];
	img.src = img.src.substring(0,img.src.lastIndexOf("?"))+"?rand="+Math.random()*1000;
}

function trim(str, chars) {
	return ltrim(rtrim(str, chars), chars);
}
 
function ltrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
 
function rtrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

var elemek=[0,0,0];
function esetkezel(elem,elso)
{
	if (trim(document.getElementById(elem).value)=="") vane=true; else vane=false;
	if (elem=="nev")
	{
		{
		dom2=document.getElementById("rip1");
		if (!vane) elemek[0]=1; else elemek[0]=0;
		}

	}
	if (elem=="email")
	{
		{
		str=document.getElementById("email").value;
		filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		if(!filter.test(str)) vane=true;
		dom2=document.getElementById("rip2");
		if (!vane) elemek[1]=1; else elemek[1]=0;
		}
	}
	if (elem=="tel")
	{
		dom2=document.getElementById("rip4");
		{
		str=document.getElementById("tel").value;
		veg=str.length;
		mutato=0;
		osszeg=0;
		szam="";
		while(mutato<veg)
		{
			temp=str.substring(mutato,mutato+1);
			if(Number(temp)||(temp=="0"))
			{
				szam=szam+temp;
				osszeg++;
			}
			mutato++;
		}
		if((osszeg!=10)&&(osszeg!=11))
		{
			vane=true;
		}
		}
	}
	if (elem=="letters_code")
	{
		{
		dom2=document.getElementById("rip3");
		str=document.getElementById("letters_code").value;
		if (str!=str2) vane=true;
		if (!vane) elemek[2]=1; else elemek[2]=0;
		}
	}
	
	if (vane && !elso) dom2.style.backgroundImage="url(/files/cont/riport/error.png)"; 
	if (!vane) dom2.style.backgroundImage="url(/files/cont/riport/apply.png)";			

	nincstovabb=false;
	for(i=0;i<3;i++)
	{
		if (elemek[i]==0) nincstovabb=true;
	}
	if (!nincstovabb) 
	{
		document.getElementById("tovabb").style.display="block";
		document.getElementById("message").focus();
	}else{
		document.getElementById("tovabb").style.display="none";
	}
}

function urlapkezel1(e)
{

if (!e) e=window.event;
mi=(e.target)?e.target.id:e.srcElement.id;
document.getElementById(mi).style.backgroundColor="#fc6";
document.getElementById(mi).style.borderColor="white";
if (mi=="tel" && document.getElementById("tel").value=="nem kötelező")
{
	document.getElementById("tel").value="";
	document.getElementById("tel").style.color="black";
	document.getElementById("tel").style.fontStyle="normal";
}
}

function urlapkezel2(e)
{

if (!e) e=window.event;
mi=(e.target)?e.target.id:e.srcElement.id;
document.getElementById(mi).style.backgroundColor="white";
document.getElementById(mi).style.borderColor="#fc6";
if (mi=="tel" && trim(document.getElementById("tel").value)=="")
{
	document.getElementById("tel").value="nem kötelező";
	document.getElementById("tel").style.color="gray";
	//document.getElementById("tel").style.fontStyle="italic";
}
if ((mi=="tel" && document.getElementById("tel").value!="nem kötelező") || mi!="tel" && mi!="message")
{
	esetkezel(mi, false);
}
}

function urlapkezel3(e)
{
if (!e) e=window.event;
mi=(e.target)?e.target.id:e.srcElement.id;
if (mi=="letters_code")
	{
	str=document.getElementById("letters_code").value;
	if (str.length==6) esetkezel(mi, false);
	}
}

function wait()
{
	document.getElementById("kiszov").innerHTML="Egy kis türelmet...";
	document.getElementById("tovabb").style.visibility='hidden';
	document.getElementById("ajaxlogo").style.display='block';
}