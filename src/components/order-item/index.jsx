import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { URL_GEOCODING } from '../../utils/maps';
import { colors } from '../../constants/colors';
import { styles } from './styles';

const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
};


const OrderItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{formatDate(item.date)}</Text>
            </View>
            <View style={styles.containerDetail}>
                <View style={styles.detail}>
                    <Text style={styles.detailTotal}>$ {item.total}</Text>
                </View>
                <View>
                    <Text>
                        {item.items.map((i) => (
                          <View key={i.id}>
                            <Text>Producto:{i.name}</Text>
                            <Text>Categoria:{i.category}</Text>
                            <Text>Cantidad:{i.quantity}</Text>
                          </View>
                            ))}
                    </Text>
                            <Text>Direccion:{item.address}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.detailTotal}> {item.category}</Text>
                </View>
                {/* <View style={styles.detail}>
          <Text style={styles.detailTotal}> {item.name}</Text>
        </View> */}
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={20} color={colors.primary} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default OrderItem;
