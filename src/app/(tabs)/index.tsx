import { StyleSheet, Text, View } from "react-native"

export default function Screen() {
   return(
      <View style={ styles.container }>
         <Text className="text-red-600">Home</Text>
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