var mainImage=document.getElementById("main");
var smallImages=document.getElementsByClassName("small-images");
smallImages[0].onclick=function(){
    mainImage=smallImages[0].src
}
smallImages[1].onclick=function(){
    mainImage=smallImages[1].src
}
smallImages[2].onclick=function(){
    mainImage=smallImages[2].src
}