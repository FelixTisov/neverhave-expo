import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MyButton from '../components/MyButton';
import CustomItem from '../components/CustomItem';

const Custom = ({navigation}) => {

    let questions = ['Текст 1...','Текст 2...','Текст 3...','Текст 4...',]
    const [questList, setQuestList] = useState(questions)

    const addQuestion = () => {
      setQuestList([...questList, 'новый'])
    }

    return (
    <View style={styles.container}>
      <ImageBackground source={require('../../src/images/bg.png')} style={{flex: 1}}>
        
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: '5%'}}>
          <View style={styles.settingsCont}/>    
          <View style={styles.categories}>
            <Text style={styles.txt}>CUSTOM</Text>
          </View>
          <View style={styles.settingsCont}>
            <View style={{flex: 1, width: '30%', padding: 1, marginLeft: '35%'}}>
              <TouchableOpacity style={{flex: 1, width: '100%', height: '100%'}} onPress={() => {navigation.navigate('Main')}}>
                <ImageBackground source={require('../../src/images/close.png')} style={{flex: 1}}>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{flex: 8, flexDirection: 'column', alignItems: 'center',}}> 

          {/* Лист с вопросами */}
          <View style={{flex:4, flexDirection: 'column', width: '100%', marginTop: '6%'}}>
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center',}}>
              {
                  questList.map((item) => {
                    return <CustomItem text={item}></CustomItem>
                  })
              }
            </View>
          </View>
          
          <View style={{flex: 1, }}>
            <View style={styles.btnCont}>
                <MyButton text={"добавить"} func={() => {
                    addQuestion()
                }}></MyButton>
            </View>
          </View>
          
        </View>

      </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },  
  
    categories: {
      flex: 4,
      height: '100%',
      flexDirection: 'column',
      alignItems:'center', 
      justifyContent: 'center',
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
      fontWeight: 'bold',
    },
    
    btnCont: {
        flex: 2, 
        flexDirection: 'column', 
        alignItems:'center', 
        justifyContent: 'flex-end',
        marginBottom: '10%',
    },

  })

export default Custom