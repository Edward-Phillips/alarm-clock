import { observer } from 'mobx-react-lite'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { View, Button } from 'react-native'
import { StyleSheet } from 'react-native'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { FormattedTimeDisplay } from '../../components/FormattedTimeDisplay'
import useViewModel from '../../viewModels/useViewModel'
import timeScreenVM from '../../viewModels/timeScreenVM/timeScreenVM'


export default observer(function timeScreen ()  {
  const viewModel = useViewModel(timeScreenVM)

  const {
    alarmDate,
    showTimePicker,
    dispose,
    setAlarmTime,
    toggleTimePicker,
    alarmTriggered,
    toggleAlarmEnabled,
  } = viewModel

  useEffect(() => {
    return () => dispose()
  }, [viewModel])

  const handleDateChange = (event: DateTimePickerEvent, date?: Date) => {
    const { type } = event
    if (type === 'set' && !!date) {
      setAlarmTime(date)
      toggleTimePicker()
    }
  }

  return <View style={styles.container}>
    <FormattedTimeDisplay viewModel={viewModel} />
    <Button onPress={toggleTimePicker} title={`Set a new alarm time`}/>
    {showTimePicker && <DateTimePicker 
      mode='time'
      value={alarmDate}
      onChange={handleDateChange}
    />}
    {alarmTriggered && <View> 
      <Button onPress={toggleAlarmEnabled} title={'Turn alarm off'}/>
    </View>
    }
  </View>
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
