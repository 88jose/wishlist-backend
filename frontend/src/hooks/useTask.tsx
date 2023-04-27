import axios  from 'axios';

type Prop = {
   title: string,
   description: string
}

function useTask() {
   const { VITE_APP_SERVICE_URL } = import.meta.env

   const addTask = async ({ title, description }:Prop) => {
      const userID = window.localStorage.getItem("userID");
      try {
         const response  = await axios.post(`${VITE_APP_SERVICE_URL}/task/create/${userID}`,{
            title,
            description
         });
                     
         const data = response.data.data;
         return data;

      } catch (error) {
         console.log((error as Error).message);
      }
   };

   const getTasksOfUser = async () => {
      const userID = window.localStorage.getItem("userID");
      try {
         const response = await axios.get(`${VITE_APP_SERVICE_URL}/task/${userID}`);
         const data = response.data.data;
         
         return data;
         
      }catch (error) {
         console.log((error as Error).message);
      }
   };

   const updateTask = async (id:string, { title, description }:Prop) => {
      const userID = window.localStorage.getItem("userID")

      const response = await axios.put(`${VITE_APP_SERVICE_URL}/task/${id}`,{
         title,
         description,
         userID
      });
      const data = response.data;
      return data;
   }


   const deleteTask = async (id:string) => {
      const userID = window.localStorage.getItem("userID")

      const response = await axios.delete(`${VITE_APP_SERVICE_URL}/task/${id}`,{
         data: {
            userID
         }
      });
      const data = response.data;
      return data;
   }

   return {
      addTask,
      getTasksOfUser,
      deleteTask,
      updateTask
   };
}

export default useTask;
