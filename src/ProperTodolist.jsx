import { useState } from 'react'
export function ProperTodolist(){
    const[list,setList]=useState([]);
    const[item,setItem]=useState("");
    function updateList(){
        if(item.trim() !=="")
            setList(currentList=>[...currentList,item]);
        setItem("");
    }
    function removeItem(index){
        setList(curIt=>curIt.filter((_,i)=> i !== index));
    }
    function moveUp(i){
        if(i>0){
            const newOrder=[...list];
            [newOrder[i],newOrder[i-1]]=[newOrder[i-1],newOrder[i]];
            setList(newOrder);
        }
    }
    function moveDown(i){
        if(i<list.length-1){
            const newOrder=[...list];
            [newOrder[i],newOrder[i+1]]=[newOrder[i+1],newOrder[i]];
            setList(newOrder);
        }
    }
    function handleInput(e){
        setItem(e.target.value)
    }
    const addButton={
         backgroundColor:"#8b5a2b",
    }
    const moveUpBtn={
        backgroundColor:"transparent",
    }
    const listStyle={
        backgroundColor:"#271810",
    }
    return(<section className='flex flex-col justify-center items-center mt-2 sm:items-center'>
            <div className='flex sm:space-x-1'>
            <input type='text' value={item} 
              onChange={handleInput}
              className='border-2 border-black scale-[1] w-[250px] sm:w-[700px] text-black
              active:border-blue-200'
              placeholder='enter a item' />
              <button onClick={updateList} className='border-none hover:cursor-pointer p-1 
              text-sm rounded-full text-gray-200 ml-1' 
              style={addButton}
              >ADD</button></div>
              {list.map((l,i)=>(
                <p key={i} className='flex justify-evenly h-[30px] sm:h-[50px] w-[250px] sm:w-[600px]
                font-serif text-xl sm:text-3xl
                rounded-lg text-gray-100 mt-2 items-center'
                style={listStyle}>
                <input type='checkbox' className='sm:scale-[2]'/>
                {l}
                <button onClick={()=>moveUp(i)} className='text-sm text-gray-200 
                font-serif p-1 rounded-lg  h-[24px] sm:h-[32px]' style={moveUpBtn}>👆</button>
                <button onClick={()=>moveDown(i)} className='text-sm text-gray-200 
                font-serif p-[0.2rem] rounded-lg h-[24px] sm:h-[32px]' style={moveUpBtn}>👇</button>
                <button onClick={()=>removeItem(i)} className='text-sm text-gray-200 
                font-serif p-1  rounded-lg h-[24px] sm:h-[32px]' style={moveUpBtn}>⛔</button>
                </p>
              ))}
           </section>)
}