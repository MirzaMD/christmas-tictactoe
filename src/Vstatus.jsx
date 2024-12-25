import { useState } from 'react';
export function Vstatus({user,val,message,setVal}){
    function hide(){
        setVal(0);
    }
    const addBack={
        backgroundImage:'linear-gradient(whitesmoke,red,tomato)',
        color:'whitesmoke',
        textShadow:'2px 2px 3px orange',
        visibility:val?'visible':'hidden',
    }
    return(
    
    <div className={`flex justify-center items-center h-[120px] sm:h-[320px] w-[200px] sm:w-[400px]
     rounded-full absolute left-[50px] sm:left-[470px] 
     top-[250px] sm:top-[200px] z-10 text-xl sm:text-4xl font-serif mr-10`} onClick={hide} style={addBack}>
        {user} {message}
    </div>
)
}