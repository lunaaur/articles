import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    borderTopWidth: 0.6,
    display: "flex",
  },
  modalWindow: {
    backgroundColor: '#ebebff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    display: "flex",
    borderRadius: 16,
    padding: 9,
    height: 250,
    width: "92%",
  },
  modal: {
    display: "flex",
    position: "relative",
    marginRight: 20,
    marginBottom: 20,
    width: "100%",
    height: 40,
  },
  elem: {
    height: 160,
    width: "100%",
  },
});

export default styles;
