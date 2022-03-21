import React from 'react';
import propTypes, { func, number, object, string } from 'prop-types'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const CustomItem = ({text}) => {
    return (
      <View style={styles.radiusCont}>
        <Text style={styles.mainText}>{text}</Text>
      </View>
    )
}

CustomItem.propTypes = {
  text: string,
}

const styles = StyleSheet.create({
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
      height: '12%',
      borderRadius: 20,
      marginTop: '5%',
      justifyContent: 'center',
      alignItems: 'center'
    }
})

export default CustomItem