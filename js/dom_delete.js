    function newRegister(){
        let newItem = document.createElement('li'); // 요소 추가
        let subject = document.querySelector('#subject'); // form 텍스트
        // form의 subject 텍스트 값을 li목록으로 생성하는 부분
        let newText = document.createTextNode(subject.value); // subject라는 id를 가진 인풋 박스에 무언가를 입력하면 value가 가져온다
        newItem.appendChild(newText);
        // itemList 위치에 목록 생성
        let itemList = document.querySelector('#itemList');
        itemList.insertBefore(newItem, itemList.childNodes[0]);
        
        // 목록 클릭시 삭제 부분
        subject.value = "";
        let items = document.querySelectorAll('li');
        for(let i = 0; i < items.length; i++){
            items[i].addEventListener('click',function(){
                if(this.parentNode){ // 클릭 당한 목록이 this
                    this.parentNode.removeChild(this);
                }
            })
        }
        
    }
