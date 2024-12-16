import { Pressable, Text } from "react-native"

type Props = {
   title: string
   onPress: () => void
}
export const CustomButton = ({ title, onPress }: Props) => {
   return (
      <Pressable
         className='my-4 p-4 w-auto bg-blue-600 rounded-lg'
         onPress={onPress}>
         <Text className='text-gray-100 text-lg text-center'>{title}</Text>
      </Pressable>
   )
}