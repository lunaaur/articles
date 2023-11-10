import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  block: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    marginBottom: "2%",
  },
  header: {
    fontWeight: "600",
    marginBottom: "2%",
    fontSize: 20,
  },
  text: {
    fontSize: 17,
  },
  textView: {
    display: "flex",
    justifyContent: "center",
    borderBottomWidth: 0.6,
    height: 40,
  },
  textViewEditable: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.6,
    height: 40,
  },
});

export default styles;
