import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  bacgroundCover: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#908599",
    padding: 16,
    opacity: 0.6,
    margin:8,
    borderRadius:12,
    shadowColor: '#372549D',
  shadowRadius: 10,
  shadowOpacity: 0.6,
  elevation: 8,
  shadowOffset: {
    width: 0,
    height: 4
  }
  },
  lightText: {
    color: "#fff",
  },
  header: {
    fontSize: 20,
  },
  textInput: {
    alignSelf: "stretch",
    padding: 8,
    borderBottomWidth: 2,
    marginVertical: 8,
  },
  lightTextInput: {
    borderBottomColor: "#ffffff",
  },
  pressedInlineButton: {
    color: "#4238ab",
    opacity: 0.4,
  },
  inlineTextButtons: {
    color: "#4238ab",
  },
  rowContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center",
    marginVertical:4
  },
  marginBottom:{
    marginBottom:15
  }
});
