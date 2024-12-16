import { Task } from "../types/task"
import { baseUrl } from "../utils/baseUrl"

export const getTasks = async () => {
   try {
      const tasks: Task[] = await baseUrl.get(`/task`)
         .then(response => response.data.tasks)
         .catch(err => console.error(err))

      return tasks
   } catch (err) {
      console.error(err)
      return []
   }
}

export const newTask = async (task: string) => {
   try {
      await baseUrl.post('/task', { task })
         .then(() => alert('Tarefa registrada'))
         .catch(err => console.error(err))
   } catch (err) {
      console.error(err)
   }
}

export const toogleCompletedTask = async (id: number) => {
   try {
      await baseUrl.put(`/task/toogle/${id} }`)
         .catch(() => alert('Não foi possível mudar o status da tarefa'))
   } catch (err) {
      console.error(err)
   }
}

export const updateTask = async (id: number, task: string) => {
   try {
      await baseUrl.put(`/task/${id}`, { task })
         .then(() => alert('Tarefa atualizada'))
         .catch(err => alert('Não foi possível fazer a edição da tarefa. Tente novamente mais tarde'))
   } catch (err) {
      console.error(err)
   }
}

export const deleteTask = async (id: number) => {
   try {
      await baseUrl.delete(`/task/${id}`)
         .then(() => alert('Tarefa excluída'))
         .catch(err => alert('Não foi possível excluir a tarefa. Tente novamente mais tarde'))
   } catch (err) {
      console.error(err)
   }
}