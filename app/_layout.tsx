import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function RootLayout() {
   return (
      <GestureHandlerRootView>
         <Drawer screenOptions={{
            drawerLabelStyle: { // Estilização da Label
               color: '#d1d5db',
               fontWeight: 'bold',
            },
            drawerContentContainerStyle: { // Area que contem o menu
               backgroundColor: '#4b5563',
               
            },
            drawerStyle: { // Container do Drawer
               backgroundColor: '#4b5563'
            }
         }}>
            <Drawer.Screen
               name="(tabs)"
               options={{
                  drawerLabel: 'Home',
                  headerTitle: 'Informações',
                  drawerIcon: () => <FontAwesome name="home" color={'#d1d5db'} size={24} className="bg-blue-600" />
                  // drawerItemStyle: { display: 'none' }
               }}
            />

            <Drawer.Screen
               name="imc"
               options={{
                  title: 'IMC',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: '#4b5563' },
                  headerTintColor: '#d1d5db',
                  drawerIcon: () => <FontAwesome name="balance-scale" size={24} color={'#d1d5db'} className="bg-blue-600" />

               }} />
         </Drawer>
      </GestureHandlerRootView>
   )
}