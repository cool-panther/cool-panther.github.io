function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}


function downImages(path, urls)
{
	var img=new Array();
	for (var i=0;i<urls.length;i++ )
	{
		img[i]=new Image();
		img[i].src=path+urls[i];
	}
}

function rsskezel(e){
	if (!e) e=window.event;
	mi=(e.target)?e.target:e.srcElement;
	kep=document.getElementById("rss_mini");
	if (mi && (e.type=="mouseover"))
	{
		kep.src="/files/cont/rss/rss_mini.png"
	}
	
	if (mi && (e.type=="mouseout"))
	{
		kep.src="/files/cont/rss/rss_mini_pre.png"
	}
	
	if (mi && (e.type=="click"))
	{
		
	}
}

function eventsf(e)
		{
			if (!e) e=window.event;
			mi=(e.target)?e.target:e.srcElement;
			if (e.type=="mouseover")
			{
				if (mi.id=="facebook")
				{
					mi.style.backgroundImage="url('/files/cont/content/facebook2.png')";
				}
				if (mi.id=="twitter")
				{
					mi.style.backgroundImage="url('/files/cont/content/twitter2.png')";
				}
				if (mi.id=="iwiw")
				{
					mi.style.backgroundImage="url('/files/cont/content/iwiw2.png')";
				}
			}
			if (e.type=="mouseout")
			{
				if (mi.id=="facebook")
				{
					mi.style.backgroundImage="url('/files/cont/content/facebook.png')";
				}
				if (mi.id=="twitter")
				{
					mi.style.backgroundImage="url('/files/cont/content/twitter.png')";
				}
				if (mi.id=="iwiw")
				{
					mi.style.backgroundImage="url('/files/cont/content/iwiw.png')";
				}
			}
			if (e.type=="focus")
			{
				if (mi.id=="search")
				{
					search=document.getElementById("search");
					search.value="";
				}
			}
			if (e.type=="blur" && document.getElementById("search").value=="")
			{			
				if (mi.id=="search")
				{
					search=document.getElementById("search");
					search2=document.getElementById("search2").value;
					search.value=search2;
				}
			}
			if (e.type=="click")
			{
				if (mi.id=="facebook")
				{
					window.open ("http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.cool-panther.hu%2F&t=Aut%C3%B3-+%C3%A9s+%C3%A9p%C3%BCletf%C3%B3li%C3%A1z%C3%A1s","mywindow"); 
				}
				if (mi.id=="twitter")
				{
					window.open ("http://twitter.com/login?redirect_after_login=/home?status=Aj%C3%A1nlom+figyelmedbe.+Aut%C3%B3-+%C3%A9s+%C3%A9p%C3%BClet+f%C3%B3li%C3%A1z%C3%A1s%3A+http%3A%2F%2Fwww.cool-panther.hu%2F","mywindow");
				}
				if (mi.id=="iwiw")
				{
					window.open ("http://iwiw.hu/pages/share/share.jsp?u=http%3A%2F%2Fwww.cool-panther.hu","mywindow");
				}
				if (mi.id=="css")
				{
					window.open ("http://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fcool-panther.hu%2F","mywindow");
				}
				if (mi.id=="xhtml")
				{
					window.open ("http://validator.w3.org/check?uri=http%3A%2F%2Fcool-panther.hu%2F;accept=application%2Fx-ms-application%2C%20image%2Fjpeg%2C%20application%2Fxaml%2Bxml%2C%20image%2Fgif%2C%20image%2Fpjpeg%2C%20application%2Fx-ms-xbap%2C%20application%2Fx-shockwave-flash%2C%20application%2Fvnd.ms-excel%2C%20application%2Fvnd.ms-powerpoint%2C%20application%2Fmsword%2C%20*%2F*;accept-language=hu-HU","mywindow");
				}
				if (mi.id=="harom_search")
				{
					search=document.getElementById("search").value;
					search2=document.getElementById("search2").value;
					
					if (search!==search2 && search !=="")
					{
					window.location.href="http://www.google.hu/search?q="+search+"&domains=cool-panther.hu&sitesearch=http%3A%2F%2Fcool-panther.hu"				}
					}
				}
				
		}