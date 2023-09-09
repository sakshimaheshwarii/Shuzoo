window.onload = function(){
    var preloader=document.getElementById("preloader");
    var body=document.getElementById("body");
preloader.style.display="block";
setTimeout(function(){
    preloader.style.display="none";
    body.style.display="block";
}, 1200);
};