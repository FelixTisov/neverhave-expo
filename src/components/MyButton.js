import React from 'react'
import { func, string } from 'prop-types'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const MyButton = ({ text, func = () => {} }) => {
  return (
    <View style={styles.btn}>
      <TouchableOpacity style={styles.tchop} onPress={func}>
        <Text style={styles.txt}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

MyButton.propTypes = {
  text: string,
  func: func,
}
const styles = StyleSheet.create({
  btn: {
    borderWidth: 3,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 190,
    height: 60,
    borderRadius: 35,
  },

  tchop: {
    marginBottom: 10,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Galvji',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
})

export default MyButton
