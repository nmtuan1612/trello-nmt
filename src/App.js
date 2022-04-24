import { useState } from 'react'
import { useSelector } from 'react-redux'
import "./App.scss";
import AppBar from "components/AppBar/AppBar";
import BoardContent from "components/BoardContent/BoardContent";
import { BoardContext } from './Contexts/BoardContext';

function App() {
  const [bgUrl, setBgUrl] = useState('')
  const currentBoard = useSelector(state => state.board.currentBoard)


  return (
    <BoardContext.Provider value={{currentBoard}}>
      <div className="trello-container"  style={{'backgroundImage': `url(${bgUrl})`}}>
        <AppBar />
        <BoardContent setBgUrl={setBgUrl} currentBoard={currentBoard} />
      </div>
    </BoardContext.Provider>
  );
}

export default App;
