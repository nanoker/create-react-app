import axios from 'axios';

const Tasks = ({ existingListOfTodos, updateListOfTodos }) => {
  const handleClick = (e) => {
    const idOfElementToBeDeleted = e.target.parentNode.id;
    const result = existingListOfTodos.filter(todoObject => todoObject.id !== idOfElementToBeDeleted);
    updateListOfTodos(result);
    axios.delete(`http://localhost:4000/listOfTodos/${idOfElementToBeDeleted}`, result)
      .then(response => console.log(response), err => console.log(err));
  };
  return (
    <ul>
        {existingListOfTodos.map( todo => 
            <li key={todo.id} id={todo.id}>
              <button className="deleteBtn" onClick={handleClick}>x</button>
              {todo.title} 
            </li>
        )}
    </ul>
  )
};

export default Tasks;