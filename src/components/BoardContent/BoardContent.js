import { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'

import Column from "components/Column/Column";
import { mapOrder } from 'ultilities/sort'
import "./BoardContent.scss";

import { initialData } from 'actions/initialData'

const BoardContent = () => {

  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
    if(boardFromDB) {
      setBoard(boardFromDB)

      // sort columns according columnOrder then setColumns
      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
      // console.log(boardFromDB);
    }
  }, [])

  if(isEmpty(board)) {
    return <div className="not-found" style={{ 'padding': 10, 'color': 'white'}}>No board found</div>
  }

  return (
    <div className="board-content">
      {columns.map((column, index) => <Column key={index} column={column} />)}
    </div>
  );
};

export default BoardContent;
