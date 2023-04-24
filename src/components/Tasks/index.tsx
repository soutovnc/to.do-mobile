import { Text, TouchableOpacity, View } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
}

export function Task({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        { name }
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onRemove}
      >
        <EvilIcons name="trash" size={24} color="#808080" />
      </TouchableOpacity>


    </View>
  )
}
