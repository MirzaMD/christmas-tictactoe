import { useEffect,useState } from 'react';
export function Stopwatch(){
    const[clock,setClock]=useState(0);
    const[start,setStart]=useState(false);
   useEffect(()=>{
      let intervalId;
      if(start){
        intervalId=setInterval(()=>{
            setClock(currentClock=>currentClock+1);
        },100);
      }
      return ()=>{clearInterval(intervalId)};
   },[start]);
   function startAndStop(){
    setStart(currentStart=>!currentStart);
   }
   function resetWatch(){
    setClock(0);
    setStart(false);
   }

   return(<div className='flex justify-center flex-col gap-2 items-center'>
    <p className="text-3xl font-mono">{clock}</p>
    <nav className='flex justify-center gap-2'>
        <button className='p-2 bg-red-700 text-white rounded-lg active:bg-red-900' onClick={resetWatch}>RESET</button>
        <button className='p-2 bg-red-700 text-white rounded-lg active:bg-red-900' onClick={startAndStop} >{start?"STOP":"START"}</button>
    </nav>
   </div>)
}