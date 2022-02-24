function openCenter(doc, win, w, h){
    let left = (screen.availWidth-w) /2 /* 팝업창의 왼쪽 좌표 */
    let top = (screen.availHeight-h) /2 /* 팝업창의 위쪽 좌표 */
    let opt = 'left=' + left + ',top=' + top + ',widht=' + w + ',height=' + h;
    window.open(doc, win, opt)
}
openCenter('notice.html', 'pop', 500, 400)