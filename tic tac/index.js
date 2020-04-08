const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

function onClickTile(oEvent){
    console.dir(oEvent)
    const [x,y] = oEvent.id.split('')
    if (board[Number(x)-1 ][Number(y) - 1]===''){
        board[Number(x)-1 ][Number(y) - 1] = 'x'
        oEvent.classList.add('cross')
        setTimeout( () => {
            if (findWinner()){
                alert('You Win!')
                location.reload()
                
            }else 
                placeCross()
        },300)
    }
    
}

function placeCross(){
    let emptyPlaces = []
    for (let i = 0 ; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if (board[i][j] === ''){
                emptyPlaces.push([i,j])
            }
        }
    }
    if (!emptyPlaces.length){
        location.reload()
        alert('Match draw')
        return
    }
    let [x,y] = emptyPlaces[Math.floor(Math.random() * emptyPlaces.length)]
    
    board[x][y]='o'
    const Element = document.getElementById((x+1)*10 + y+1)
    Element.classList.add('round')
    setTimeout( () => {
        if (findWinner()){
            alert('You Lose!')
            location.reload()
        }
    },1000) 
}

function findWinner(){
    if (board[0][0] == board[1][1] && 
        board[1][1] == board[2][2] &&  
        board[0][0] != '') 
        return(true); 
          
    if (board[0][2] == board[1][1] && 
        board[1][1] == board[2][0] && 
         board[0][2] != '') 
        return(true); 
    
    for (let i=0; i<3; i++) 
    { 
        if (board[0][i] == board[1][i] && 
            board[1][i] == board[2][i] &&  
            board[0][i] != '') 
            return (true); 
    } 
    for (let i=0; i<3; i++) 
    { 
        if (board[i][0] == board[i][1] && 
            board[i][1] == board[i][2] &&  
            board[i][0] != '') 
            return (true); 
    } 
    return(false);
}