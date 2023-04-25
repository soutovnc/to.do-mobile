import { Text, TouchableOpacity, View } from "react-native";
import { EvilIcons, Entypo } from '@expo/vector-icons';

import { styles } from "./styles";
import { TaskProps } from "src/screens/Home";

type Props = {
  task: TaskProps;
  onRemove: (id: string) => void;
  onCheckChanged: (id: string) => void;
}

export function Task({ task, onRemove, onCheckChanged }: Props) {

  function handleCheck() {
    onCheckChanged(task.id)
  }

  function handleRemove() {
    onRemove(task.id)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleCheck}>

      <View style={styles.checkboxContainer}>
        {task.isDone ? (
          <View style={{ ...styles.checkbox, ...styles.checked }}>
            <Entypo name="circle" size={24} color="#F2F2F2"/>
          </View>

        ) : (
          <View style={{ ...styles.checkbox, ...styles.unchecked }}/>
        )}

        <Text style={styles.name}>
          { task.title }
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleRemove}
      >
        <EvilIcons name="trash" size={24} color="#808080" />
      </TouchableOpacity>


    </TouchableOpacity>
  )
}
