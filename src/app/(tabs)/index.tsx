import { StyleSheet, Text, View } from "react-native"

export default function Screen() {
   return (
      <View className="flex-1 p-10 gap-5 bg-gray-600">
         <Text className="text-3xl text-center text-blue-600 font-bold">
            Saudações Camadaras 🤝🇷🇺
         </Text>

         <Text className="text-xl text-gray-300 font-bold">
            O objetivo do aplicativo <Text>OmniRN</Text> é reunir algumas aplicações no qual eu venha a desenvolver em React Native.
         </Text>

         <Text className="text-xl text-gray-300 font-bold">
            Em resumo é uma aplicação com diversas funcionalidade com o foco em demonstrar as aplicações em que desenvolvi em apena uma aplicação.
         </Text>

      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
})