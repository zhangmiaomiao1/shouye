function rem(size){
    var clientW=document.documentElement.clientWidth
    var bili=clientW/size;
    var fontSize=bili*100;
    document.getElementsByTagName("html")[0].style.fontSize=fontSize+"px"
}
window.onload=function(){
    rem(1080)
}
//if(document.getElementsByClassName(".list-l").style.scrollHeight=document.getElementsByClassName(".list-r").scrollHeight+"px"){
//    document.getElementsByClassName(".list-l").style.lineHeight=2.8+"rem";
//}else{
//    document.getElementsByClassName(".list-l").style.lineHeight=3.8+"rem";
//}