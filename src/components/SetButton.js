import React from 'react';
import PropTypes, { func, number, object, string } from 'prop-types'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const SetButton = ({ text, func = () => {}}) => {
    return (
      <View style={styles.btn}>
        <TouchableOpacity style={styles.tchop} onPress={func}>
            <Text style={styles.txt}>{text}</Text>     
        </TouchableOpacity>
      </View>
    )
}

SetButton.propTypes = {
  text: string,
  func: func,

}
const styles = StyleSheet.create({
    btn: {
        alignItems:'center',
        justifyContent:'center',

      },

    tchop: {
        marginBottom: 10,
        height: '100%', 
        width: '100%', 
        alignItems:'center',
        justifyContent:'center',
    },

    txt: {
      color: 'white',
      fontSize: 24,
      fontFamily:'roboto',
      fontStyle: 'normal',
    }
})

export default SetButton