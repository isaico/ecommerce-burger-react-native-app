import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    // alignItems: "center",
    // padding:15,
    paddingHorizontal:40,
    // flexDirection: "row"
  },
  name:{
    fontFamily:"Lato-Bold",
    fontSize:22,
    marginVertical:15
  },
  description:{
    marginVertical:15,
    fontFamily:"Lato-Regular",
    fontSize:16,
    color:colors.text,
  },
  price:{
    color:"green",
    fontSize:16,
    marginVertical:5,
    fontFamily:"Lato-Bold",
    alignSelf:"center"
  },
  weight:{
    alignSelf:"center",
    marginBottom:20
  },
  images:{
    width:250,
    height:250,
    resizeMode: "contain",
    alignSelf:"center"
  }
});
