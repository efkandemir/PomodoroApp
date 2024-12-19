import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import TimerCountDownDisplay from './Components/TimerCountDownDisplay';
import TimerToggleButton from './Components/TimerToggleButton';

const FOCUS_TIMES_MINUTES = 0.2 * 60 * 1000; // 12 saniye
const BREAK_TIMES_MINUTES = 0.1 * 60 * 1000; // 6 saniye

export default function App() {
  const [timerCount, setTimerCount] = useState(FOCUS_TIMES_MINUTES);
  const [timerInterval, setTimerInterval] = useState(null); // Null değeri başlangıçta
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerMode, setTimerMode] = useState("Focus"); // Burada tip belirtmeye gerek yok

  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode == "Focus") {
        setTimerMode("Break");
        setTimerCount(BREAK_TIMES_MINUTES);
      } else {
        setTimerMode("Focus");
        setTimerCount(FOCUS_TIMES_MINUTES);
      }
      stopTimer();
    }
  }, [timerCount]);

  const startTimer = () => {
    setIsTimerRunning(true);
    if (!timerInterval) {
      const id = setInterval(() => {
        setTimerCount((prev) => Math.max(prev - 1000, 0)); // 0'ın altına inmesini engelle
      }, 1000);
      setTimerInterval(id); // Interval id'sini kaydediyoruz
    }
  };

  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval); // Zamanlayıcıyı durduruyoruz
      setTimerInterval(null); // Interval id'sini sıfırlıyoruz
    }
    setIsTimerRunning(false);
  };

  return (
    <View style={{
      ...styles.container,
      backgroundColor: timerMode === 'Break' ? "#2a9d8f" : "#d95500"
    }}>
      <Text style={styles.textStyle}>{timerMode} Time</Text>
      <StatusBar style="auto" />
      <TimerCountDownDisplay timerDate={new Date(timerCount)} />
      <TimerToggleButton isTimerRunning={isTimerRunning} stopTimer={stopTimer} startTimer={startTimer} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
