import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from 'lodash'
import BoardBar from "components/BoardBar/BoardBar";
import Column from "components/Column/Column";
import Input from 'components/Input/Input';
import "./BoardContent.scss";

const BoardContent = ({ setBgUrl, currentBoard}) => {
  const [isAddColumn, setIsAddColumn ] = useState(false)
  const addColumnRef = useRef(null)

  const boardFromDB = useSelector(state => state.board.boards.find(board => board.id === currentBoard))
  console.log(boardFromDB.columns);

  useEffect(() => {
    if(boardFromDB) {
      setBgUrl(boardFromDB.background)
      // setBoard(boardFromDB)
      // // sort columns according columnOrder then setColumns
      // setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
    }
  }, [boardFromDB, setBgUrl])

  useEffect(() => {
    if(isAddColumn) {
      addColumnRef.current.focus();
    }
  }, [isAddColumn])

  if(isEmpty(boardFromDB)) {
    return <div className="not-found" style={{ 'padding': 10, 'color': 'white'}}>No board found</div>
  }

  return (
    <>
      <BoardBar stared={boardFromDB.stared} currentBoard={currentBoard} boardTitle={boardFromDB.name} />
      <div className="board-content">
        {boardFromDB.columns.map((column, index) => <Column key={index} post={index} column={column} currentBoard={currentBoard} />)}
        {!isAddColumn ? (
          <div className="add-column-btn" onClick={() => setIsAddColumn(!isAddColumn)}>
            <i className="fa-solid fa-plus"></i>
            Add another column
          </div>
        ) : (
          <div className="add-column-form"><Input ref={addColumnRef} type="Add Column" setIsAddColumn={setIsAddColumn} currentBoard={currentBoard} numColumns={boardFromDB.columns.length} /></div>
        )}
      </div>
    </>
  );
};

export default BoardContent;
