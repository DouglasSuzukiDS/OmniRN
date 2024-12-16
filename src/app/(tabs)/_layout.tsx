import { Stack, Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import '../../../global.css'
export default function TabsLayout() {
   return (
      <Tabs screenOptions={{
         tabBarActiveTintColor: 'blue',
         tabBarStyle: {
            backgroundColor: '#4b5563',
         },
         tabBarLabelStyle: {
            color: '#d1d5db'
         }
      }}>
         <Tabs.Screen
            name="index"
            options={{
               title: 'Home',
               headerShown: false,
               tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="home" color={'#d1d5db'} size={size} />
               ),
            }} />

         <Tabs.Screen
            name="about"
            options={{
               title: 'Sobre',
               headerShown: false,
               tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="user" color={'#d1d5db'} size={size} />
               ),
            }} />
      </Tabs >
   )
}