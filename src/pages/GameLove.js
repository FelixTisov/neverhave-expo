import React, { useState }from 'react';
import MyButton from '../components/MyButton'
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

let questions = new Array()
questions = require('../components/questions').Sex
let k = randomInt((questions.length)-1) //рандомный первый вопрос

function randomInt(max) {
  min = Math.ceil(0);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const GameLove = ({navigation}) => {
  //const [quest, setQuest] = useState(questions)
  const [myText, setMyText] = useState(`${questions[k]}`)
  //questions.splice(k, 0) //удалеям из массива первый рандомный вопрос

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
                // if(questions.length==0)
                // questions = require('../components/questions').Sex

                // questions.splice(k, 1)
                // if (questions.length>0)
                k = randomInt((questions.length)-1)
                setMyText(`${questions[k]}`) 
                
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
      fontFamily:'roboto',
      fontStyle: 'normal',
    },

    mainText: {
        paddingHorizontal: '5%',
        color: 'white',
        fontSize: 28,
        fontFamily:'roboto',
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


  // let words = ['one', 'two', 'three', 'four']
  // words.splice(1,1)
  // console.log(words[1])

export default GameLove