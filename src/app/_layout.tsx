import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import '../../global.css'

export default function RootLayout() {
   return (
      <GestureHandlerRootView>
         <Drawer screenOptions={{
            drawerLabelStyle: { // Estilização da Label
               color: '#D1D5DB',
               fontWeight: 'bold',
            },
            drawerContentContainerStyle: { // Area que contem o menu
               backgroundColor: '#4B5563',

            },
            drawerStyle: { // Container do Drawer
               backgroundColor: '#4B5563'
            }
         }}>
            <Drawer.Screen
               name="(tabs)"
               options={{
                  drawerLabel: 'Home',
                  headerTitle: 'Home',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: '#4B5563' },
                  headerTintColor: '#D1D5DB',
                  drawerIcon: () => <FontAwesome name="home" color={'#D1D5DB'} size={24} />
                  // drawerItemStyle: { display: 'none' }
               }}
            />

            <Drawer.Screen
               name="imc"
               options={{
                  title: 'IMC',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: '#4B5563' },
                  headerTintColor: '#D1D5DB',
                  drawerIcon: () => <FontAwesome name="balance-scale" size={24} color={'#D1D5DB'} />

               }} />

            <Drawer.Screen
               name="todo"
               options={{
                  title: 'Todo List',
                  headerTitleAlign: 'center',
                  headerTitleStyle: { color: '#06AEAD' },
                  headerStyle: { backgroundColor: '#000' },
                  headerTintColor: '#D1D5DB',
                  drawerIcon: () => <FontAwesome name="list" size={24} color={'#D1D5DB'} />

               }} />

         </Drawer>
      </GestureHandlerRootView>
   )
}