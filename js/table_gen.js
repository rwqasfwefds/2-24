function drawTable(){
    let rCount = document.querySelector('#rCount').value;
    let cCount = document.querySelector('#cCount').value;
    let newTable = document.createElement('table');
    
    for(let i = 0; i < rCount; i++){
        let newRow = document.createElement('tr');
        
        for(let j = 0; j < cCount; j++){
            let newCell = document.createElement('td');
            let cellText = document.createTextNode(i + ',' + j);
            newCell.appendChild(cellText);
            newRow.appendChild(newCell)
        }

        newTable.appendChild(newRow);

    }
    //테이블 출력 위치
    let contents = document.querySelector('#contents')
    
    contents.appendChild(newTable);
}