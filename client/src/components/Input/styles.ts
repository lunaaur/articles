import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "60%",
  },
  inputViewElems: {
    backgroundColor: "white",
    borderRadius: 10,
    width: '100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputView: {
    width: "85%",
  },
  input: {
    paddingLeft: '4%',
    height: 40,
  },
  rightElement: {
    height: 40,
    width: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
