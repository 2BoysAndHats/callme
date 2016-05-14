var TEL_NUM = "0031623383212";


document.addEventListener("deviceready", function () {
    window.open('tel://' + TEL_NUM, '_system');    
}, false);