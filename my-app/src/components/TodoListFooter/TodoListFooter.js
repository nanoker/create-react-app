import { Fragment } from 'react';
import StatusToggleBtns from './StatusToggleBtns/StatusToggleBtns';

const TodoListFooter = ({ existingListOfTodos }) => {
    let sumOfUnfinishedTodos = existingListOfTodos.filter(item => !item.completed).length;
    return (
      <Fragment>
        <p>{sumOfUnfinishedTodos} item{sumOfUnfinishedTodos === 1 ? ' ' : 's'} left</p>
        <StatusToggleBtns /> 
       </Fragment>
    )
  };
  
  export default TodoListFooter;