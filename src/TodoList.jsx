import { useState } from 'react'
export function Todolist(){
    const[tasks,setTasks]=useState([]);
    const[inVal,setInVal]=useState("");
    const[isEditing,setIsEditing]=useState(false);
    function handleInput(e){
        setInVal(e.target.value);
    }
    function updateTasks(){
        if(inVal.trim()!=="")
        setTasks(currentTasks=>[...currentTasks,inVal]);
        setInVal("");
    }
    function deleteTask(index){
        setTasks(currentTask=>currentTask.filter((_,i)=>i!==index));
    }
    function moveUp(i){
        const newOrder=[...tasks];
        if(i>0){
            [newOrder[i],newOrder[i-1]]=[newOrder[i-1],newOrder[i]];
            setTasks(newOrder);
        }
    }
    function moveDown(i){
        const newOrder=[...tasks];
        if(i<tasks.length-1){
            [newOrder[i],newOrder[i+1]]=[newOrder[i+1],newOrder[i]];
            setTasks(newOrder);
        }
    }
    function editMode(){
        setIsEditing(currentIsEditing=>!currentIsEditing);
    }
    return(<section>
        <div>
        <input type="text" value={inVal} onChange={handleInput} placeholder='enter the task' 
        className=" w-[80%] scale-[0.9] border-4 border-black"/>
        <button onClick={updateTasks}>Add</button>
        </div>
   
        {tasks.map((task,i)=>(
            <p key={i} className='flex justify-center gap-2'>
            {isEditing?<input type="text" value={inVal} onChange={handleInput}></input>:task}
            <div className='flex justify-center space-x-2'>
            <button onClick={editMode}>edit</button>
            <button onClick={()=>moveUp(i)}>move up</button>
            <button onClick={()=>moveDown(i)}>move down</button>
            <button onClick={()=>deleteTask(i)}>delete</button>
            </div>
            </p>
           
        ))}
    </section>)
}