import React, {useState} from 'react';
import propTypes, { func, string } from 'prop-types'
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const CustomItem = ({text, func = () => {} }) => {

  let str
  const [getText, setText] = useState(text)

  if(getText.length==0) {
    return (
      <View style={{backgroundColor: 'rgba(255, 255, 255, 0.36)',width: '89%', height:60,borderRadius: 20,marginTop: '5%',justifyContent: 'center',alignItems: 'center', }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            {/* {
              () => {
                if(getText.length==0) {
                  return (
                    <TextInput style={styles.input} onSubmitEditing={() => {
                      setText('Новый текст!')
                    }}></TextInput>
                  )
                } else {
                  return (
                    <Text style={styles.mainText}>{getText}</Text>
                  )
                }
              }
            } */}
            <TextInput style={styles.input} onChangeText={(inp) => {str=inp}} onSubmitEditing={() => {
                setText(str)
              }}></TextInput>

          </View>
          <View style={{flex: 1, height: '100%',}}>
            <TouchableOpacity style={styles.tchop} onPress={func}>
              <View style={{flex: 1, width: '100%', height: '100%', backgroundColor: 'red', borderRadius: 20,}}>
              </View>
            </TouchableOpacity>
          </View> 
        </View>                       
      </View>
    )
  } else {
    return (
      <View style={{backgroundColor: 'rgba(255, 255, 255, 0.36)',width: '89%', height:60,borderRadius: 20,marginTop: '5%',justifyContent: 'center',alignItems: 'center', }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <Text style={styles.mainText}>{getText}</Text>
          </View>
          <View style={{flex: 1, height: '100%',}}>
            <TouchableOpacity style={styles.tchop} onPress={func}>
              <View style={{flex: 1, width: '100%', height: '100%', backgroundColor: 'red', borderRadius: 20,}}>
              </View>
            </TouchableOpacity>
          </View> 
        </View>                       
      </View>
    )
  }
}

CustomItem.propTypes = {
  text: string,
  func: func
}

const styles = StyleSheet.create({
  input: {
    borderWidth:1, 
    padding: 2, 
    margin: 2, 
    borderColor: 'rgb(255,186,255)', 
    width: '93%', 
    height: '70%', 
    borderRadius: 15
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
      height: '12%',
      borderRadius: 20,
      marginTop: '5%',
      justifyContent: 'center',
      alignItems: 'center'
    },

    tchop: {
      marginBottom: 10,
      height: '100%', 
      width: '100%', 
      alignItems:'center',
      justifyContent:'center',
      
  },
})

export default CustomItem