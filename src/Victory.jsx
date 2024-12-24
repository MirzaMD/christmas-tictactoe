export function Victory({check,user}){
    return(
        {if(check){
            <div className='border-4 bg-red-300 w-[300px] h-[100px]'>{user} wins!</div>
        }}
    )
}