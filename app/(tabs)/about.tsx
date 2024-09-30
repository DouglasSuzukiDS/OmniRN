import { Image, StyleSheet, Text, View } from "react-native"

export default function Screen() {
   return(
      <View className="flex-1 justify-center items-center p-10 bg-gray-600">
         <Image
            source={ require('../../assets/Texugo.png') }
            alt="Imagem do Texugo"
            className="w-[180px] h-[200px] mb-2"
         />

         <Text className="text-xl text-blue-600 font-bold">Douglas Suzuki</Text>

         <Text className="text-[18px] text-justify text-blue-300 font-bold my-4">Formado como Técnico em Informática, graduando em Engenharia de Software, é um Desenvolvedor Fullstack com Javascript.</Text>

         <Text className="text-base text-justify text-gray-300 mb-4">Possui conhecimentos no desenvolvimento Frontend com React/Next, preferindo utilizar bibliotecas para estilização sendo elas TailwindCSS/CHADCN-UI ou até mesmo SCSS. Já no Backend utilizana Node com Express e PrismaORM. Também se aventura no desenvolvimento Mobile com React Native para assim se tornar um desenvolvedor completo na lingagem Javascript/Typescript.</Text>

         <Text className="text-xl text-blue-600 font-bold">Desenvolvido com ❤️ por ニッキエ </Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   }
})