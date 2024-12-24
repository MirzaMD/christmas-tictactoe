import { useState, useEffect } from 'react';

export function Ttt() {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [entries, setEntries] = useState("X");
  useEffect(()=>{
    if(!boxes.includes("")) return;
    const timer=setTimeout(()=>{
    let rand;
    do{
      rand=Math.floor(Math.random()*9);
    }while(boxes[rand]!=="");
      setBoxes((cur)=>{
        const newBoxes=[...cur];
        newBoxes[rand]=entries;
        return newBoxes;
      })
      setEntries((cur)=>cur==="X"?"O":"X");
    },500);
    return ()=>clearTimeout(timer);
  },[boxes,entries]);
  return (
    <section className="grid grid-cols-3 w-[300px] gap-2 relative top-[200px] left-[40%]">
      {boxes.map((v, i) => (
        <button
          key={i}
          className="h-[70px] w-[50px] border-2 border-black bg-purple-400 rounded-md"
          disabled
        >
          {v}
        </button>
      ))}
    </section>
  );
}
