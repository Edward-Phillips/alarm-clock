import timeScreenVM from "@/viewModels/timeScreenVM/timeScreenVM"
import { observer } from "mobx-react-lite"
import { StyleSheet, Text } from "react-native"


export const FormattedTimeDisplay = observer((props: {viewModel: timeScreenVM}) => {
  const { formattedTime } = props.viewModel
  return <Text style={styles.title}>The time is currently: {formattedTime}</Text>
})

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'red',
    color: 'white',
    padding: 6,
  },
})