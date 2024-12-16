import { Pressable, Text } from "react-native"

type Props = {
   label: string
   type: 'Confirm' | 'Update' | 'Edit' | 'Delete'
   className: string
   disabled?: boolean
   onPress: () => void
}
export const Button = ({ label, type, className, disabled, onPress }: Props) => {
   return (
      <Pressable className={`
         p-3 rounded transition ease-linear justify-center items-center hover:opacity-80 text-green-600
         w-[120px] font-bold ${className}
         ${disabled && 'cursor-not-allowed'}
         ${type === 'Confirm' && 'bg-green-500 '}   
         ${type === 'Update' && 'bg-sky-500'}   
         ${type === 'Edit' && 'bg-purple-500'}   
         ${type === 'Delete' && 'bg-red-500'}   
         ${className}
      `}
         onPress={onPress}
         disabled={disabled}
      >
         <Text className={`text-center text-lg font-bold text-zinc-300
            ${type === 'Delete' ? 'text-zinc-300' : 'text-zinc-900'} `}>
            {label}
         </Text>
      </Pressable>
   )
}