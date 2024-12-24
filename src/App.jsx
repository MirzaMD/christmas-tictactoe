import { TicTacToe } from './TicTacToe.jsx';
import { HeaderTicTacToe } from './HeaderTicTacToe.jsx';
import './TicTacToe.css';
function App() {
return(<main className='w-full h-full'>
    <HeaderTicTacToe/> 
    <TicTacToe/>
</main>);
}
export default App
