window.onload = function(){
    let checks = document.querySelectorAll('.check');
    for(let i = 0; i < checks.length; i++){
        checks[i].addEventListener('click',function(){
        this.style.color = '#ccc';
        this.parentNode.style.color = '#ccc'; /* parentNode=부모 태그 접근 (부모 태그의 스타일을 바꿈) */
        this.parentNode.style.textDecoration = 'line-through';
    })
}
}