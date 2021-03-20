
const Tasks = ({ existingListOfTodos, updateListOfTodos }) => {
  const handleClick = (e) => {
    const idOfElementToBeDeleted = e.target.parentNode.id;
    const result = existingListOfTodos.filter(todoObject => todoObject.id !== idOfElementToBeDeleted);
    updateListOfTodos(result);
    

  };
  return (
    <ul>
        {existingListOfTodos.map( todo => 
            <li key={todo.id} id={todo.id}><button className="deleteBtn" onClick={handleClick}>x</button>{todo.title} </li>
        )}
    </ul>
  )
};

export default Tasks;