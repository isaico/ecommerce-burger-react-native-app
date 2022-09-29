import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { colors } from "../../constants/colors";

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <View style={styles.label}>
          <FontAwesome5 name="hamburger" size={24} color={colors.tertiary} />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
