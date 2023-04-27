import { createContext, useState } from "react";

interface Task {
  title: string;
  description: string;
}

interface TaskContextValue {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<never[]>>;
}

export const TaskContext = createContext<TaskContextValue | null>(null);

type Props = {
  children: JSX.Element | JSX.Element[];
};

const TasksProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;
