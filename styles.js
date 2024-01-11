import { StyleSheet, StatusBar, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    padding: 10,
  },
  judul: {
    fontSize: 25,
  },
  textInput: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginTop: 10,
  },
  containerButton: {
    marginTop: 10,
    ...Platform.select({
      ios: {
        borderColor: "black",
        borderWidth: 1,
      },
    }),
  },
  textItem: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  containerItem: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
});
