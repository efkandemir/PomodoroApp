import React from 'react'
import { Text,View,StyleSheet } from 'react-native'

const TimerCountDownDisplay= ({timerDate}) => {
  return (
    <View>
        <Text style={styles.timerCountDownText}>
            {timerDate.getMinutes().toString().padStart(2,"0")}:
            {timerDate.getSeconds().toString().padStart(2,"0")}
        </Text>
    </View>
  )
}
const styles=StyleSheet.create({
    timerCountDownText:{
        fontSize:30,
        fontWeight:'700'
    }
})


export default TimerCountDownDisplay