import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import MyButton from '../components/MyButton'

const Game = ({ navigation }) => {
  let allQuestions = require('../components/questions')
  let questions = []

  const selectedGroups = useSelector(
    (state) => state.selection.selectedQuestionGroups
  )

  // Добавить выбранные группы вопросов
  selectedGroups.forEach((item) => {
    let questionsForAdd = allQuestions[item]
    questions = questions.concat(questionsForAdd)
  })

  const [myText, setMyText] = useState('')
  const [usedIndexes, setUsedIndexes] = useState([])

  // Получить случайный номер вопроса
  const randomInt = (max) => {
    let newIndex
    while (true) {
      newIndex = Math.floor(Math.random() * max)
      if (usedIndexes.length === questions.length) return
      if (usedIndexes.indexOf(newIndex) === -1) return newIndex
      else continue
    }
  }

  // Когда страница открыта впервые, отобразить рандомный первый вопрос
  if (usedIndexes.length === 0) {
    let k = randomInt(questions.length)
    usedIndexes.push(k)
    setMyText(`${questions[k]}`)
  }

  // Обработчик нажатия на кнопку далее
  const nextHandler = () => {
    if (usedIndexes.length === questions.length) {
      setUsedIndexes([])
    }
    k = randomInt(questions.length)
    usedIndexes.push(k)
    setMyText(`${questions[k]}`)
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../src/images/bg.png')}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop: '5%',
          }}
        >
          <View style={styles.settingsCont}></View>
          <View style={styles.categories}>
            <Text style={styles.txt}></Text>
          </View>
          <View style={styles.settingsCont}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Settings')
              }}
            >
              <View style={styles.settingsDot}></View>
              <View style={styles.settingsDot}></View>
              <View style={styles.settingsDot}></View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 7, flexDirection: 'column' }}>
          <View
            style={{
              flex: 2,
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingBottom: '5%',
            }}
          >
            <Text style={styles.txt}>Я никогда не...</Text>
          </View>

          <View
            style={{ flex: 3, flexDirection: 'column', alignItems: 'center' }}
          >
            <View style={styles.radiusCont}>
              <Text style={styles.mainText}>{myText}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <MyButton text="далее" func={nextHandler}></MyButton>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  categories: {
    flex: 4,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
  },

  settingsCont: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  settingsDot: {
    backgroundColor: 'white',
    width: 5,
    height: 5,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },

  txt: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Galvji',
    fontStyle: 'normal',
  },

  mainText: {
    paddingHorizontal: '5%',
    color: 'white',
    fontSize: 28,
    fontFamily: 'Galvji',
    fontStyle: 'normal',
    textAlign: 'center',
  },

  radiusCont: {
    backgroundColor: 'rgba(255, 255, 255, 0.36)',
    width: '89%',
    height: '32%',
    borderRadius: 20,
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Game
