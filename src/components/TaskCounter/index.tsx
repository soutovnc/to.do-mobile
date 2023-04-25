import { Text, View } from "react-native";

import { styles } from './styles'

interface TaskCounterProps {
  createdCount: number;
  finishCount: number;
}

export function TaskCounter({ createdCount, finishCount }: TaskCounterProps) {
  return (
    <View style={styles.container}>
      <View style={styles.taskCounterContainer}>
        <Text style={styles.textCreated}>Criadas</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{createdCount}</Text>
        </View>
      </View>

      <View style={styles.taskCounterContainer}>
        <Text style={styles.textFinish}>Concluídas</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{finishCount}</Text>
        </View>
      </View>
    </View>
  )
}
