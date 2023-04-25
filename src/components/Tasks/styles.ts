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
    padding: 12,
    fontFamily: 'Inter-Regular'
  },
  button: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkboxContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  checkbox: {
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checked: {
    backgroundColor: '#F2F2F2',
    fontFamily: 'Inter-Regular'
  },
  unchecked: {
    borderColor: '#4EA8DE',
    fontFamily: 'Inter-Regular'
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#F2F2F2',
    marginLeft: 16,
    fontFamily: 'Inter-Regular'
  },
  textCheck: {
    fontSize: 16,
    color: '#808080',
    marginLeft: 16,
    fontFamily: 'Inter-Regular',
    textDecorationLine: 'line-through'
  },

})
