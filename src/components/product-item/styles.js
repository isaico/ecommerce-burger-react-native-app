import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";
import { isAndroid } from "../../utils/functions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
    height: 100,
  },
  containerTouchable: {
    flex: 1,
    backgroundColor: isAndroid ? colors.tertiary : colors.primary,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
  price: {
    fontSize: 14,
    paddingVertical:10,
    fontFamily: "Lato-Regular",
  },
  weight: {
    fontSize: 12,
    fontFamily: "Lato-Regular",
  },
});
