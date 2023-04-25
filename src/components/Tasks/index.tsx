import { Text, TouchableOpacity, View } from "react-native";
import { EvilIcons, AntDesign, Entypo } from '@expo/vector-icons';

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
            <AntDesign name="checkcircle" size={20} color="#5E60CE"/>
          </View>

        ) : (
          <View style={{ ...styles.checkbox, ...styles.unchecked }}>
            <Entypo name="circle" size={20} color="#4EA8DE"/>
          </View>
        )}

        <Text style={task.isDone ? styles.textCheck : styles.text}>
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
