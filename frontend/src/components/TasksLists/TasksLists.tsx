import { useContext } from "react";
import { TaskContext } from "../../context/TasksContext/TasksProvider";
import TasksItem from '../TasksItem/TasksItem'

interface Task {
   _id: string;
   title: string;
   description: string;
}

interface TasksContextProps {
   tasks: Task[];
}

const TasksLists = () => {
   const { tasks } = useContext <TasksContextProps | any> (TaskContext);

   return (
      <div>
         <h2>Task LIST</h2>
         <div>
            {tasks.map((task : Task)=> {
               return (
                  <TasksItem
                     key={task._id}
                     _id={task._id}
                     title={task.title}
                     description={task.description}
                  />
               )
            })}
         </div>
      </div>
   )
};

export default TasksLists;
