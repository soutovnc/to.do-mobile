import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles'

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('@assets/logo.png')}
          />
        </View>
        <View style={styles.inputComponent}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity
            style={styles.button}
          >
            <AntDesign name="pluscircleo" size={16} color="white"/>
          </TouchableOpacity>
        </View>

      </View>

    </>
  )
}
