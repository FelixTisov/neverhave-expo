import React from 'react'
import Main from './src/pages/Main'
import Settings from './src/pages/Settings'
import Game from './src/pages/Game'
import Mix from './src/pages/Mix'
import Custom from './src/pages/Custom'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
const Stack = createNativeStackNavigator()

// Дефолтные состояния хранилища
const defaultState = {
  selectedQuestionGroups: [],
}

// Редюсер выбора групп вопросов
const selectReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECT_GROUP':
      return { ...state, selectedQuestionGroups: [action.payload] }

    case 'ADD_GROUP':
      console.log(state.selectedQuestionGroups)
      return {
        ...state,
        selectedQuestionGroups: [
          ...state.selectedQuestionGroups,
          action.payload,
        ],
      }

    case 'DELETE_GROUP':
      console.log(state.selectedQuestionGroups)
      const indexDeleted = state.selectedQuestionGroups.indexOf(action.payload)
      if (indexDeleted === -1)
        return {
          ...state,
          selectedQuestionGroups: state.selectedQuestionGroups,
        }
      else {
        let arrayCopy = [...state.selectedQuestionGroups]
        arrayCopy.splice(indexDeleted, 1)
        return {
          ...state,
          selectedQuestionGroups: arrayCopy,
        }
      }

    case 'ADD_ALL':
      console.log(state.selectedQuestionGroups)
      return {
        ...state,
        selectedQuestionGroups: ['Love', 'Crazy', 'Sex', 'Custom'],
      }

    case 'DELETE_ALL':
      console.log(state.selectedQuestionGroups)
      return {
        ...state,
        selectedQuestionGroups: [],
      }

    default:
      return state
  }
}

// Хранилище состояний
const store = configureStore({
  reducer: {
    selection: selectReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

let App = () => {
  return (
    <Provider store={store}>
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
            name="Game"
            component={Game}
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
    </Provider>
  )
}
export default App
