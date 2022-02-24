window.onload = function(){
    let x = document.querySelector('#display')

    x.innerHTML = '<p><b>location.href:</b>' + location.href + '</p>' + '<p><b>location.host:</b>' + location.host + '</p>' + '<p><b>location.protocol:</b>' + location.protocol + '</p>';
}