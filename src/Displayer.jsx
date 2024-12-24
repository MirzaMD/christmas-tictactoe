export function Displayer(){
    function handleClick(event){
       event.target.style.backgroundColor="yellow";
    }
    return(
        <div className="bg-red-700 h-[150px] w-[150px] " onClick={handleClick} >

        </div>
    )
}