import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signupHeader: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "600",
    marginBottom: 10,
    color: "#6757ff",
  },
  signupSubtitle: {
    fontStyle: "italic",
    color: "gray",
  },
  btnView: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    marginTop: "2%",
  },
});

export default styles;
