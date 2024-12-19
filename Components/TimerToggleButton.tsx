import React from 'react'
import { Button, Pressable, View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

//. Eğer TypeScript kullanmıyorsanız, props'ların türlerini belirtmek zorunlu değildir ve
//  React bunu JavaScript ortamında doğrudan çalıştırır.
const TimerToggleButton = ({ isTimerRunning, stopTimer, startTimer }) => {
    return (
        <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
            <View style={styles.container}>
                <FontAwesome style={styles.icon} name={isTimerRunning ? 'pause' : 'play'} size={125} />
            </View>
        </Pressable>

    )
}
export default TimerToggleButton;

const styles = StyleSheet.create({
    icon: {
        alignSelf: "center",
        color:"#fff"
    },
    container: {
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        justifyContent: "center",
        borderColor: 'black',
        marginVertical: 50
    }
});

