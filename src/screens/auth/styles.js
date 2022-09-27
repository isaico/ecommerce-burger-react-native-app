import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    height: 340,
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 18,
    fontFamily: "Lato-Regular",
    marginBottom: 15,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontFamily: "Lato-Regular",
    marginVertical: 5,
  },
  prompt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  promptMessage: {
    fontSize: 14,
    fontFamily: "Lato-Bold",
    color: colors.text,
    marginRight: 15,
  },
  promptButton: {},
});
