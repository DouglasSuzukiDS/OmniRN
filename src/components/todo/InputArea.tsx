import { Dispatch, SetStateAction, useState } from "react"
import { Text, TextInput, View } from "react-native"
import { Button } from "./Button"
import * as taskController from '../../controllers/taskController'
import { Task } from "../../types/task"

type Props = {
   tasks: Task[]
   setTasks: Dispatch<SetStateAction<Task[]>>
}
export const InputArea = ({ tasks, setTasks }: Props) => {
   const [inputValue, setInputValue] = useState('')

   const handleNewTask = async () => {
      if (inputValue.length < 3) {
         alert('A tarefa precisa ter pelo menos 3 caracteres.')
      } else {
         await taskController.newTask(inputValue)
            .then(async () => {
               let tasksList = await taskController.getTasks()
               tasksList = tasksList.sort((a: any, b: any) => a.completed - b.completed)
               setTasks(tasksList)

               setInputValue('')
            })
      }
   }

   return (
      <View className="gap-4 items-center border-b border-gray-300 pb-4">
         <TextInput
            value={inputValue}
            className="py-2 px-4 w-full text-2xl text-center text-slate-300  md:text-left bg-transparent outline-none border placeholder:text-slate-400"
            placeholder="Digite a tarefa ..."
            onChange={(e) => setInputValue(e.nativeEvent.text)}
         />

         <Button
            label="Criar"
            type="Confirm"
            className="w-auto"
            onPress={handleNewTask}
         />
      </View>
   )
}