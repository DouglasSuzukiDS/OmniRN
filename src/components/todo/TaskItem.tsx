import { Dispatch, SetStateAction, useState } from "react"
import { TextInput, View } from "react-native"
import * as taskController from '../../controllers/taskController'

import { Button } from "./Button"
import Checkbox from "expo-checkbox"
import { Task } from "../../types/task"

type Props = {
   task: Task
   tasks: Task[]
   setTasks: Dispatch<SetStateAction<Task[]>>
}
export const TaskItem = ({ task, tasks, setTasks }: Props) => {
   const [completed, setCompleted] = useState(task.completed)
   const [edit, setEdit] = useState(false)
   const [inputValue, setInputValue] = useState(task.task)

   // Usado para caso o usuário estiver editando a task e ele clicar para marcar como concluída ou cancelar a edição
   const input = task.task

   const toggleCompleted = async (taskId: number) => {

      await taskController.toogleCompletedTask(taskId)
         .then(() => {
            setCompleted(!completed)
            setEdit(false)
            setInputValue(input)
         })
   }

   const editTask = async (taskId: number) => {
      setEdit(true)

      if (inputValue.length < 3) {
         alert('A tarefa precisa ter no mínimo 3 caracteres')
      } else {
         await taskController.updateTask(taskId, inputValue)
            .then(() => {
               setEdit(false)
            })
            .catch(() => alert('Ocorreu um erro ao tentar editar a tarefa. Tente novamente.'))
      }
   }

   const cancelEditTask = async (taskId: number) => {
      setEdit(false)
      setInputValue(input)
   }

   const delTask = async (taskId: number) => {
      await taskController.deleteTask(taskId)
         .then(() =>
            setTasks(
               tasks.filter(task => task.id !== taskId)
            )
         )
   }

   return (
      <View className="border-b border-slate-300">
         {/* CheckBox and Input */}
         <View className="flex-row items-center gap-10">
            <View className="py-5">
               <Checkbox
                  value={completed}
                  onValueChange={() => toggleCompleted(task.id)}
                  className="h-10 "
               />
            </View>

            <TextInput
               value={inputValue}
               onChange={e => setInputValue(e.nativeEvent.text)}
               readOnly={!edit}
               className={` ${edit && 'text-yellow-300'} flex w-full items-center py-2 px-4 text-lg text-slate-300 font-bold bg-transparent outline-none ${completed && ' italic opacity-75'}`}

            />
         </View>

         {/* Buttons */}
         <View className=" flex-row justify-between gap-5 pb-5">
            <Button
               label={edit ? 'Ok' : 'Editar'}
               type={edit ? 'Edit' : 'Update'}
               className={`${completed && 'opacity-60'}`}
               disabled={completed}
               onPress={() => { edit ? editTask(task.id) : setEdit(true) }}
            />

            <Button
               label={edit ? 'Cancelar' : 'Excluir'}
               type="Delete"
               className="w-1/2"
               onPress={() => edit ? cancelEditTask(task.id) : delTask(task.id)}
            />
         </View>
      </View>
   )
}