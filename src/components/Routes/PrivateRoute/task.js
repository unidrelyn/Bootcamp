import React from 'react';

function Task ({task}) {

    //let {task, ...rest} = task;
    console.log(task);
   return (
   <ul>
       {task.map((item, key) => {
           console.log(item);
           return (
            <li key={key}>
                {item}
                <button>Delete</button>
            </li>
           )
       }
            )
       }
    </ul>
    );
  }

  export default Task;
