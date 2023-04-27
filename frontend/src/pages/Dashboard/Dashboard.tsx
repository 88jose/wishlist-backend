import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import useTask from "../../hooks/useTask";
import useUser from "../../hooks/useUser";
import { TaskContext } from "../../context/TasksContext/TasksProvider";
import { TasksLists } from "../../components";

type TaskFormInputs = {
  title: string;
  description: string;
};

export default function Home() {
  const { setTasks }: any = useContext(TaskContext);
  const { register, handleSubmit, reset } = useForm<TaskFormInputs>();

  const { checkUser }: any = useUser();
  const { addTask, getTasksOfUser }: any = useTask();

  const onSubmit = async (data: any) => {
    await addTask(data);
    const tasks = await getTasksOfUser();
    setTasks(tasks);
    reset();
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <h1>You tasklist</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Insert title here"
          {...register("title")}
        />
        <input
          type="text"
          placeholder="Insert description here"
          {...register("description")}
        />
        <button type="submit">Add Task</button>
      </form>

      <TasksLists />
    </div>
  );
}
