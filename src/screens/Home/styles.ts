import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1A1A1A',
    fontFamily: 'Inter-Regular',
  },
  header: {
    width: '100%',
    height: 173,
    backgroundColor: '#0D0D0D',
    position: "absolute",
    top: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    flex: 1,
    height: 54,
    width: 271,
    backgroundColor: '#262626',
    color: '#FFF',
    borderRadius: 6,
    padding: 16,
    flexGrow: 1,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: '#0D0D0D',
    fontSize: 16,
    marginLeft: 24,
    marginTop: 142,
    fontFamily: 'Inter-Regular',
  },
  button: {
    height: 52,
    width: 52,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    padding: 18,
    marginTop: 142,
    marginRight: 24,
    marginLeft: 4,
  },
  inputComponent: {
    width: '100%',
    flexDirection: 'row',
    //caution with margin here, because I use at input and button
  },
  list: {
    marginTop: 39,
  }
})
