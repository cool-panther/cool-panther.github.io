function protectchange(newcnt){
var at  = /\[k\]/;
var dot = /\[p\]/g;
var fas = /\[f\]/g;
var pipe = /\[\|\]/;
var pipe2 = /\[\|\|\]/;
var pipe3 = /\[\|\|\|\]/;

newcnt = newcnt.replace(at,"@");
newcnt = newcnt.replace(dot,".");
newcnt = newcnt.replace(fas,"cool-panther");
newcnt = newcnt.replace(pipe,"info@cool-panther.hu");
newcnt = newcnt.replace(pipe2,"webmaster@shendent.hu");
newcnt = newcnt.replace(pipe3,"innovation.hu@mmm.com");
newcnt = '<a class="kislink" href="mailto:'+newcnt+'">'+newcnt+'</a>';

return newcnt;

}

function protectemail() {
var spans = document.getElementsByTagName("span");
var hm = spans.length;
for (c=0;c<hm;c++) {
if(spans[c].className=="mailme"){
newcnt= spans[c].innerHTML;
newcnt=protectchange(newcnt);
spans[c].innerHTML = newcnt;
spans[c].style.visibility="visible";
}
}
}
