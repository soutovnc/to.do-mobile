import { Image, View } from "react-native";

import { styles } from './styles'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        // source={logoImg}
        source={require('@assets/logo.png')}
      />

    </View>
  )
}
