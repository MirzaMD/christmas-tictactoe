import { useState } from 'react';
export function Calculator(){
   const[display,setDisplay]=useState("");
   function updateDisplay(event){
    setDisplay(currentDisplay=>currentDisplay+event.target.textContent)
   }
   function backspace(){
    if(display){
    setDisplay(currentDisplay=>currentDisplay.slice(0,-1));
    }
   }
   function resetDisplay(){
    setDisplay("");
   }
   function evaluate(){
    try{
        let result=eval(display);
        setDisplay(result);
    }
    catch(e){
        setDisplay("Error");
    }
   }
    return(<section>
        <div className='h-[50px] w-[400px] bg-gray-700
         text-gray-200 text-right rounded-xl font-mono
         text-3xl'>{display}</div>
        <div className='grid grid-cols-3 gap-2 w-[400px] mt-1'>
            {[...Array(10).keys()].map((_,num)=>(
                <button key={num}  className="p-4 bg-blue-600 text-white font-mono rounded-md" onClick={updateDisplay}>{num}</button>
            ))}
        {['=','+','-','*','/','%','AC','C'].map((op,i)=>{
            let button;
            switch(op){
                case '=':button=(
                    <button key={i} className="p-4 bg-green-600 text-white font-mono rounded-md" onClick={evaluate}>
                        {op}
                    </button>               
                );
                break;
                case '+':
                case '-':
                    button=(
                    <button key={i} className="p-4 bg-yellow-600 text-white font-mono rounded-md" onClick={updateDisplay}>
                    {op}
                    </button> );
                    break;
                case '*':
                case '/':
                case '%':
                         button=(<button key={i} className="p-4 bg-purple-600 text-white font-mono rounded-md" onClick={updateDisplay}>
                            {op}
                            </button>);
                            break;
                case 'AC': button=(<button key={i} className="p-4 bg-red-600 text-white font-mono rounded-md" onClick={resetDisplay}>
                    {op}
                    </button>);
                    break;
                case 'C':button=(<button key={i} className="p-4 bg-orange-600 text-white font-mono rounded-md" onClick={backspace}>
                    {op}
                    </button>);                               
            }
            return button;
        })}
        </div>
    </section>)
}