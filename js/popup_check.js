    let blocked = false;
    function openPopup(){
        let newWin = window.open('notice.html', 'pop', 'width=500, height=400');
        if(newWin == null){
            alert('팝업이 차단되어 있습니다. 팝업 차단을 해제해 주세요');
        }
        newWin.moveBy(100, 100);
    }
