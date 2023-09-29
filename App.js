import React from 'react'
import Main from './src/pages/Main'
import Settings from './src/pages/Settings'
import GameLove from './src/pages/GameLove'
import Mix from './src/pages/Mix'
import Custom from './src/pages/Custom'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

let App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animationEnabled: false }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GameLove"
          component={GameLove}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mix"
          component={Mix}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Custom"
          component={Custom}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
