import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: "Lato-Regular",
    marginBottom: 10,
  },
  message: {},
  helperText: {
    fontFamily: "Lato-Bold",
    fontSize: 12,
    color: colors.error,
  },
});
