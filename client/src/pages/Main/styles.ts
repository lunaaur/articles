import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  articles: {
    width: "42%",
    height: "28%",
    backgroundColor: "#ebebff",
    borderRadius: 8,
    marginBottom: 100,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: "600",
  },
  textView: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
