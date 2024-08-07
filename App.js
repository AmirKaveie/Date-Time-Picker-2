import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setTime(currentTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Date:</Text>
      <DateTimePicker
        testID="datePicker"
        value={date}
        mode="date"
        display="default"
        onChange={onDateChange}
      />
      <Text style={styles.label}>Select Time:</Text>
      <DateTimePicker
        testID="timePicker"
        value={time}
        mode="time"
        is24Hour={true}
        display="default"
        onChange={onTimeChange}
      />
      <Text style={styles.selectedText}>
        Selected Date: {date.toLocaleDateString()}
      </Text>
      <Text style={styles.selectedText}>
        Selected Time: {time.toLocaleTimeString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default App;
