import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import MyButton from '../components/MyButton'

const Mix = ({ navigation }) => {
  const [isLove, setLove] = useState(false)
  const [isCrazy, setCrazy] = useState(false)
  const [isSex, setSex] = useState(false)
  const [isCustom, setCustom] = useState(false)
  const [isAll, setAll] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!(isLove && isCrazy && isSex && isCustom)) setAll(false)
  }, [isLove, isCrazy, isSex, isCustom])

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
            <Text style={styles.txt}>MIX</Text>
          </View>
          <View style={styles.settingsCont}>
            <View
              style={{
                flex: 1,
                width: '30%',
                padding: 1,
                marginLeft: '35%',
                marginTop: '2%',
              }}
            >
              <TouchableOpacity
                style={{ flex: 1, width: '100%', height: '100%' }}
                onPress={() => {
                  navigation.navigate('Main')
                }}
              >
                <ImageBackground
                  source={require('../../src/images/close.png')}
                  style={{ flex: 1 }}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{ flex: 8, flexDirection: 'column', alignItems: 'center' }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              width: '100%',
              marginTop: '6%',
            }}
          >
            <View style={styles.params}>
              <View
                style={{
                  flex: 2,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 24,
                    fontFamily: 'Galvji',
                    fontStyle: 'normal',
                    marginBottom: '6%',
                  }}
                >
                  Love
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2%',
                }}
              >
                <ToggleSwitch
                  isOn={isLove}
                  onColor="yellow"
                  offColor="gray"
                  size="medium"
                  onToggle={(isOn) => {
                    setLove(isOn)
                    isOn
                      ? dispatch({ type: 'ADD_GROUP', payload: 'Love' })
                      : dispatch({ type: 'DELETE_GROUP', payload: 'Love' })
                  }}
                />
              </View>
            </View>

            <View style={styles.params}>
              <View
                style={{
                  flex: 2,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 24,
                    fontFamily: 'Galvji',
                    fontStyle: 'normal',
                    marginBottom: '6%',
                  }}
                >
                  Crazy
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2%',
                }}
              >
                <ToggleSwitch
                  isOn={isCrazy}
                  onColor="yellow"
                  offColor="gray"
                  size="medium"
                  onToggle={(isOn) => {
                    setCrazy(isOn)
                    isOn
                      ? dispatch({ type: 'ADD_GROUP', payload: 'Crazy' })
                      : dispatch({ type: 'DELETE_GROUP', payload: 'Crazy' })
                  }}
                />
              </View>
            </View>

            <View style={styles.params}>
              <View
                style={{
                  flex: 2,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 24,
                    fontFamily: 'Galvji',
                    fontStyle: 'normal',
                    marginBottom: '6%',
                  }}
                >
                  Sex
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2%',
                }}
              >
                <ToggleSwitch
                  isOn={isSex}
                  onColor="yellow"
                  offColor="gray"
                  size="medium"
                  onToggle={(isOn) => {
                    setSex(isOn)
                    isOn
                      ? dispatch({ type: 'ADD_GROUP', payload: 'Sex' })
                      : dispatch({ type: 'DELETE_GROUP', payload: 'Sex' })
                  }}
                />
              </View>
            </View>

            <View style={styles.params}>
              <View
                style={{
                  flex: 2,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 24,
                    fontFamily: 'Galvji',
                    fontStyle: 'normal',
                    marginBottom: '6%',
                  }}
                >
                  Custom
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2%',
                }}
              >
                <ToggleSwitch
                  isOn={isCustom}
                  onColor="yellow"
                  offColor="gray"
                  size="medium"
                  onToggle={(isOn) => {
                    setCustom(isOn)
                    isOn
                      ? dispatch({ type: 'ADD_GROUP', payload: 'Custom' })
                      : dispatch({ type: 'DELETE_GROUP', payload: 'Custom' })
                  }}
                />
              </View>
            </View>

            <View style={styles.params}>
              <View
                style={{
                  flex: 2,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 24,
                    fontFamily: 'Galvji',
                    fontStyle: 'normal',
                    marginBottom: '6%',
                  }}
                >
                  Все категории
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2%',
                }}
              >
                <ToggleSwitch
                  isOn={isAll}
                  onColor="yellow"
                  offColor="gray"
                  size="medium"
                  onToggle={(isOn) => {
                    setAll(isOn)
                    setCustom(isOn)
                    setSex(isOn)
                    setCrazy(isOn)
                    setLove(isOn)
                    isOn
                      ? dispatch({ type: 'ADD_ALL' })
                      : dispatch({ type: 'DELETE_ALL' })
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ flex: 1, width: '100%', height: '100%' }}>
            <View style={{ flex: 1 }}>
              <View style={styles.btnCont}>
                <MyButton
                  text={'начать'}
                  func={() => {
                    navigation.navigate('Game')
                  }}
                ></MyButton>
              </View>
            </View>
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

  params: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    width: '100%',
    marginLeft: '5%',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
  },

  settingsCont: {
    flex: 2,
    marginTop: '7%',
    height: '35%',
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
    fontSize: 22,
    fontFamily: 'Galvji',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },

  btnCont: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '10%',
  },
})

export default Mix
