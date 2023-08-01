

// loader creating
window.addEventListener("load", function () {
    document.querySelector(".pre-loader").style.display = "none"
});

// menubar hide for mobaile device

document.querySelector('.menubar-icon').addEventListener('click', function(){
    document.querySelector('.navbar').style.left = '0px';
    

});

document.querySelector('.menu-close-btn').addEventListener('click', function(){
    document.querySelector('.navbar').style.left = '-400px';
    

});
      