import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: 327,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  taskCounterContainer: {
    flexDirection: 'row',
    gap: 10
  },
  textCreated: {
    fontWeight: 'bold',
    fontSize: 14,
    // fontFamily: 'Inter-Regular',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#4EA8DE',
  },
  counter: {
    backgroundColor: '#333333',
    borderRadius: 999,
    paddingHorizontal: 10,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  counterText: {
    fontSize: 12,
    color: '#D9D9D9',
    fontWeight: 'bold'
  },
  textFinish: {
    fontWeight: 'bold',
    fontSize: 14,
    // fontFamily: 'Inter-Regular',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#8284FA',
  },
})
