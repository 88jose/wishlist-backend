import { useEffect, useContext, useState } from 'react'
import useTask from "../../hooks/useTask";
import { TaskContext } from "../../context/TasksContext/TasksProvider";

type Props = {
   _id:string;
   title: string;
   description: string;
}

interface Task {
   _id: string;
   title: string;
   description: string;
}

interface TasksContextProps {
   tasks: Task[];
   setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TasksItem ({ _id, title, description }:Props) {
   const [isChecked, setIsChecked] = useState(false)
   const { getTasksOfUser, deleteTask } = useTask();
   const { tasks, setTasks } = useContext <TasksContextProps | any>(TaskContext);

   useEffect(() => {
      getTasksOfUser().then((data:Task[]) => {
         setTasks(data);
      });
   }, []);

   const handleDeleteTask = async (id: string): Promise<void> => {
      const data = await deleteTask(id);
      if (data.msg === "deleted task") {
         const newArrayTasks = tasks.filter((task: Task) => task._id !== id);
         setTasks(newArrayTasks);
      }
   };


   const handleCheckboxChange = (): void => {
      setIsChecked(!isChecked)
   }
   
   return (
      <div>
         <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
         <div key={_id}>
            <p>{title}</p>
            <p>{description}</p>
         </div>
         <button onClick={() => handleDeleteTask(_id)}>Delete task</button>
         <button>Update ask</button>
      </div>
   )
}

export default TasksItem

