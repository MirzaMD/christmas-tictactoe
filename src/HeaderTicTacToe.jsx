import  santa  from './assets/santa.jpg'
export function HeaderTicTacToe(){
    const addBack={
        backgroundImage:'linear-gradient(whitesmoke,red,tomato)',
        width:'100%',
    }
    return(
        <section className='flex flex-col justify-center items-center w-full h-[120px]' style={addBack}>
        <div className='flex h-[120px] w-[300px] justify-center items-center  space-x-3 sm:space-x-10'>
        <img src={santa} className='h-[50px]'></img>
        <h1 className='text-gray-300 text-lg sm:text-4xl'>TIC-TAC-TOE</h1>
          </div>
          <p className="text-sm sm:text-2xl text-gray-300 font-serif  ml-20 sm:ml-40">
    ~Christmas edition
  </p>
          </section>)
}