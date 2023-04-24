import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    width: 327,
    backgroundColor: '#262626',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center',
    padding: 12
  },
  button: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16
  },
})