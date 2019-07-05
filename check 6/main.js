function Changecolor(event)
{ 
    event.preventDefault();
var gettext=document.getElementById("textarea");
if ( gettext.style.textDecoration=="none")
    gettext.style.textDecoration="underline";
else gettext.style.textDecoration="none";
}
function italic(event){
    event.preventDefault();
    var gettext=document.getElementById("textarea");
    if (gettext.style.fontStyle=="italic")
        gettext.style.fontStyle="normal";
    else      gettext.style.fontStyle="italic";
}
function gras(event){
    event.preventDefault();
    var gettext=document.getElementById("textarea");
    if(gettext.style.fontWeight=="bold")
    gettext.style.fontWeight="normal" ;
    else gettext.style.fontWeight="bold" ;
}
function size1(){
    
    var gettext=document.getElementById("textarea");
    var selection=document.getElementById("selection").value;
    gettext.style.fontSize=selection;
    console.log(selection);


}

function text(){
    
    var gettext=document.getElementById("textarea");
    var selection2=document.getElementById("selection2").value;
    gettext.style.fontFamily=selection2;
    console.log(selection2);


}

