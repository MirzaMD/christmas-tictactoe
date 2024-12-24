import { useState, useEffect } from 'react';
import './TicTacToe.css';
export function TicTacToe(){
    const[cells,setCells]=useState(Array(9).fill(""));
    const[moves,setMoves]=useState("X");
    const[botMove,setBotMove]=useState(false);
function checkWinner(cells){
    const winningCombination=[
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ]
    for(let combs of winningCombination){
        const [a,b,c]=combs;
        if(cells[a]!="" && cells[a]==cells[b] && cells[b]==cells[c]){
             window.alert(`${cells[a]} is the winner!`);
             resetGame();
            return;}
    }
    if(!cells.includes("")){
         window.alert(`it's a tie`);
         resetGame();
         return;
        }
}
function updateMoves(){
    setMoves((cur)=>(cur==="X")?"O":"X");
}
function playMove(index){
     if(cells[index]===''){
        setCells((cur)=>{
            const newCells=[...cur];
            newCells[index]=moves;
            return newCells;
        })
        updateMoves();
        setBotMove(true);
     }
}
function resetGame(){
setCells(Array(9).fill(""));
}
useEffect(()=>{
    if(botMove){
    if(!cells.includes("")) return;
    const timer=setTimeout(()=>{
        let rand;
        do{
            rand=Math.floor(Math.random()*9);
        }while(cells[rand]!=="");
        setCells((cur)=>{
            const newCells=[...cur];
            newCells[rand]=moves;
            return newCells;
        })
        updateMoves();
        setBotMove(false);
    },500);
   return ()=>clearTimeout(timer);
}
},[moves,cells]);
useEffect(()=>{
    setTimeout(()=>{
        checkWinner(cells);
    },500);
},[cells]);
    return (<section className='grid grid-cols-3 w-[250px] 
    sm:w-[400px] h-[200px] sm:h-[300px] gap-2 relative  
    top-[150px] sm:top-[100px] left-[10%] sm:left-[35%] 
    right-[20%] sm:right-[15%]
    text-lg sm:text-3xl'>
        {cells.map((v,i)=>(
            <button key={i} className='bg-teal-300 h-[60px] sm:h-[100px] w-[60px] sm:w-[100px] 
            rounded-sm border-2 border-black' onClick={()=>playMove(i)}>{v}</button>
        ))}
    </section>)
}