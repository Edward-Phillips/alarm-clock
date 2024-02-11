
import timeScreenVM from '@/viewModels/timeScreenVM/timeScreenVM'
import useViewModel from '@/viewModels/useViewModel'
import { observer } from 'mobx-react-lite'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { StyleSheet } from 'react-native'


export default observer(function timeScreen ()  {
  const viewModel = useViewModel(timeScreenVM)

  const { formattedTime, clickCount, incrementClickCount, dispose } = viewModel

  useEffect(() => {
    return () => dispose()
  }, [viewModel])

  return <View style={styles.container}>
    <Text style={styles.title}>The time is currently: {formattedTime}</Text>
    <Button onPress={incrementClickCount} title={`You have clicked this button: ${clickCount} times`}/>
  </View>
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'red',
    color: 'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
