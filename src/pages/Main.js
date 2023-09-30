import React, { useState } from 'react'
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { useDispatch } from 'react-redux'
import MyButton from '../components/MyButton'
import Swiper from 'react-native-swiper'

let currentIndex = 0

const Main = ({ route, navigation }) => {
  //Принимаем параметр setCustom из Settings
  React.useEffect(() => {
    if (route.params?.setCustom) {
    }
  }, [route.params?.setCustom])

  const dispatch = useDispatch()

  const [myText, setMyText] = useState('начать')
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
            <Text style={styles.txt}>категории</Text>
          </View>
          <View style={styles.settingsCont}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate({
                  name: 'Settings',
                  params: { setCustom: route.params?.setCustom },
                })
              }}
            >
              <View style={styles.settingsDot}></View>
              <View style={styles.settingsDot}></View>
              <View style={styles.settingsDot}></View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 8,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            showsPagination={true}
            dotStyle={styles.dot}
            activeDotStyle={styles.dotActive}
            loop={false}
            onIndexChanged={(index) => {
              currentIndex = index
              if (index >= 0 && index <= 2) setMyText('начать')
              else if (index == 3) setMyText('выбрать')
              else if (index == 4) setMyText('изменить')
            }}
          >
            <View style={styles.slide1}>
              <View style={styles.middleBox}>
                <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
                  <View
                    style={{
                      flex: 2,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        width: '102%',
                        height: '100%',
                        padding: 15,
                      }}
                    >
                      <ImageBackground
                        source={require('../../src/images/love.png')}
                        style={{ flex: 1 }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 4,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        color: '#fde32a',
                        fontSize: 72,
                        fontWeight: 'bold',
                      }}
                    >
                      LOVE
                    </Text>
                  </View>
                </View>
                <View
                  style={{ flex: 3, flexDirection: 'column', width: '100%' }}
                >
                  <View style={{ flex: 1, marginTop: '5%', marginLeft: '5%' }}>
                    <Text style={styles.description}>
                      Вопросы для пар, чтобы
                    </Text>
                    <Text style={styles.description}>лучше узнать своего</Text>
                    <Text style={styles.description}>партнёра</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.slide1}>
              <View style={styles.middleBox}>
                <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
                  <View
                    style={{
                      flex: 2,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        width: '80%',
                        height: '100%',
                        padding: 15,
                        marginLeft: '-30%',
                      }}
                    >
                      <ImageBackground
                        source={require('../../src/images/crazy.png')}
                        style={{ flex: 1 }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 4,
                      marginLeft: '-17%',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        color: '#fde32a',
                        fontSize: 72,
                        fontWeight: 'bold',
                      }}
                    >
                      CRAZY
                    </Text>
                  </View>
                </View>
                <View
                  style={{ flex: 3, flexDirection: 'column', width: '100%' }}
                >
                  <View style={{ flex: 1, marginTop: '5%', marginLeft: '5%' }}>
                    <Text style={styles.description}>Самые сумасшедшие</Text>
                    <Text style={styles.description}>вопросы для большой</Text>
                    <Text style={styles.description}>компании</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.slide1}>
              <View style={styles.middleBox}>
                <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
                  <View
                    style={{
                      flex: 2,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        width: '70%',
                        height: '80%',
                        padding: 5,
                        marginLeft: '-15%',
                      }}
                    >
                      <ImageBackground
                        source={require('../../src/images/sex.png')}
                        style={{ flex: 1 }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 4,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginLeft: '-5%',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        color: '#fde32a',
                        fontSize: 75,
                        fontWeight: 'bold',
                      }}
                    >
                      SEX
                    </Text>
                  </View>
                </View>
                <View
                  style={{ flex: 3, flexDirection: 'column', width: '100%' }}
                >
                  <View style={{ flex: 1, marginTop: '5%', marginLeft: '5%' }}>
                    <Text style={styles.description}>
                      Самые грязные вопросы,
                    </Text>
                    <Text style={styles.description}>чтобы узнать все</Text>
                    <Text style={styles.description}>пошлые секреты твоих</Text>
                    <Text style={styles.description}>друзей</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.slide1}>
              <View style={styles.middleBox}>
                <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
                  <View
                    style={{
                      flex: 2,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        width: '92%',
                        height: '92%',
                        padding: 10,
                      }}
                    >
                      <ImageBackground
                        source={require('../../src/images/mix.png')}
                        style={{ flex: 1 }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 4,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        color: '#fde32a',
                        fontSize: 72,
                        fontWeight: 'bold',
                      }}
                    >
                      MIX
                    </Text>
                  </View>
                </View>
                <View
                  style={{ flex: 3, flexDirection: 'column', width: '100%' }}
                >
                  <View style={{ flex: 1, marginTop: '5%', marginLeft: '5%' }}>
                    <Text style={styles.description}>Выберите несколько</Text>
                    <Text style={styles.description}>
                      категорий, чтобы сделать
                    </Text>
                    <Text style={styles.description}>игру ещё интереснее</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.slide1}>
              <View style={styles.middleBox}>
                <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
                  <View
                    style={{
                      flex: 2,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        width: '70%',
                        height: '82%',
                        padding: 20,
                        marginLeft: '-50%',
                      }}
                    >
                      <ImageBackground
                        source={require('../../src/images/custom.png')}
                        style={{ flex: 1 }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 4,
                      marginLeft: '-25%',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        color: '#fde32a',
                        fontSize: 62,
                        fontWeight: 'bold',
                      }}
                    >
                      CUSTOM
                    </Text>
                  </View>
                </View>
                <View
                  style={{ flex: 3, flexDirection: 'column', width: '100%' }}
                >
                  <View style={{ flex: 1, marginTop: '5%', marginLeft: '5%' }}>
                    <Text style={styles.description}>Создайте свои</Text>
                    <Text style={styles.description}>собственные вопросы</Text>
                  </View>
                </View>
              </View>
            </View>
          </Swiper>

          <View
            style={{
              flex: 2,
              flexDirection: 'column',
              position: 'absolute',
              elevation: 3,
              width: '100%',
            }}
          >
            <View style={styles.btnCont}>
              <MyButton
                text={myText}
                func={() => {
                  let link
                  switch (currentIndex) {
                    case 0:
                      link = 'Game'
                      dispatch({ type: 'SELECT_GROUP', payload: 'Love' })
                      break
                    case 1:
                      link = 'Game'
                      dispatch({ type: 'SELECT_GROUP', payload: 'Crazy' })
                      break
                    case 2:
                      link = 'Game'
                      dispatch({ type: 'SELECT_GROUP', payload: 'Sex' })
                      break
                    case 3:
                      link = 'Mix'
                      break
                    case 4:
                      link = 'Custom'
                      break
                  }
                  navigation.navigate(`${link}`)
                }}
              ></MyButton>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
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

  btnCont: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '19%',
  },

  dot: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 3,
    marginBottom: 3,
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

  dotActive: {
    backgroundColor: 'white',
    width: 16,
    height: 16,
    borderRadius: 8,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 3,
    marginBottom: 3,
  },

  wrapper: {
    elevation: 0,
    position: 'absolute',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  middleBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: '30%',
    marginTop: '40%',
    width: '100%',
  },

  description: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Galvji',
  },

  txt: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Galvji',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
})

export default Main
