import { Fragment } from 'react';

const StatusToggleBtns = ({ existingListOfTodos }) => {
    
    return (
    <Fragment>
        <button>All</button>
        <button>Active</button>
        <button>Unfinished</button>
    </Fragment>
    )
  };
  
  export default StatusToggleBtns;