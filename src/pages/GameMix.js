import React, { useState }from 'react';
import MyButton from '../components/MyButton'
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

let randList= new Array()
randList = ['default']
let numb //номер последнего взятого списка
let listLove = require('../components/questions').Love
let listCrazy = require('../components/questions').Crazy
let listSex = require('../components/questions').Sex
let k = 0 // Рандомный вопрос

// Получить случайный номер вопроса
function randomInt(max) {
  min = Math.ceil(0);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

//Удалить вопрос из списка
function deleteQuest(index, arr) {
  let temp = [...arr] 
  temp.splice(index, 1)
  switch (numb) {
      case 0:
          listLove = temp
          break;
    case 1:
        listCrazy = temp
        break;
    case 2:
        listSex = temp
        break;
  }
}

const GameMix = ({route, navigation}) => {

    const {questList} = route.params

    // Получить случайный номер списка
    function randomList() {

        let res = -1
        min = Math.ceil(0);
        const max = 3

        while(res==-1) {
            let number = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
            //Если рандомный номер и включение листа = true, то выбираем этот лист
            if(questList[0] && number == 0) {
                res = [...listLove]
                numb = 0
                return res
            }
            else if(questList[1] && number == 1) {
                res = [...listCrazy]
                numb = 1
                return res
            }
            else if(questList[2] && number == 2) {
                res = [...listSex]
                numb = 2
                return res
            }
            else continue
        }
    }

    //Если страница рендерится при открытии
    if(randList[0]==='default') {
        randList = randomList() 
        k = randomInt((randList.length)-1)
    }

    const [myText, setMyText] = useState(`${randList[k]}`)

    return (
    <View style={styles.container}>
      <ImageBackground source={require('../../src/images/bg.png')} style={{flex: 1}}>
        
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: '5%'}}>
          <View style={styles.settingsCont}></View>
          <View style={styles.categories}>
            <Text style={styles.txt}></Text>
          </View>
          <View style={styles.settingsCont}>
            <TouchableOpacity onPress={() => {navigation.navigate('Settings')}}>
              <View style={styles.settingsDot}></View>
              <View style={styles.settingsDot}></View>
              <View style={styles.settingsDot}></View>         
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 7, flexDirection: 'column',}}> 

            <View style={{flex: 2, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '5%'}}>
                <Text style={styles.txt}>Я никогда не...</Text>
            </View>

            <View style={{flex: 3, flexDirection: 'column', alignItems: 'center',}}>
                <View style={styles.radiusCont}>
                    <Text style={styles.mainText}>{myText}</Text>
                </View>
            </View>

        </View>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',}}>
            <MyButton text="далее" func={() => {   
                deleteQuest(k, randList)            
                if(listLove.length==0) listLove = require('../components/questions').Love
                if(listCrazy.length==0) listCrazy = require('../components/questions').Crazy
                if(listSex.length==0) listSex = require('../components/questions').Sex
                randList = randomList() 
                k = randomInt((randList.length)-1)
                setMyText(`${randList[k]}`)                   
              }}>
            </MyButton>
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
      alignItems:'center', 
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
      backgroundColor:'white', 
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
      fontFamily:'Galvji',
      fontStyle: 'normal',
    },

    mainText: {
        paddingHorizontal: '5%',
        color: 'white',
        fontSize: 28,
        fontFamily:'Galvji',
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
      alignItems: 'center'
    }

  })

export default GameMix