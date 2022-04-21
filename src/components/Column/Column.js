import Task from 'components/Task/Task';
import './Column.scss'

const Column = () => {
    return (
        <div className="column">
          <header className="">Brainstorm</header>
          <ul className="task-list">
            <Task />
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below</li>
          </ul>
          <footer>Add another card to your list</footer>
        </div>
    );
}
 
export default Column;