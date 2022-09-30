import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from './styles';

const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
};

const OrderItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>{formatDate(item.date)}</Text>
            </View>
            <View style={styles.containerDetail}>
                <View>
                    <Text style={styles.detail}>$ {item.total}</Text>
                </View>
                <View style={styles.info}>
                    {item.items.map((i) => (
                        <View key={i.id}>
                            <Text style={styles.textDetail}>
                                Producto:{' '}
                                <Text style={styles.textDetailBlack}>
                                    {i.name}
                                </Text>{' '}
                            </Text>
                            <Text style={styles.textDetail}>
                                Categoria: <Text style={styles.textDetailBlack}>{i.category}</Text>
                            </Text>
                            <Text style={styles.textDetail}>
                                Cantidad: <Text style={styles.textDetailBlack}>{i.quantity}</Text>
                            </Text>
                            <Text style={styles.textDetail}>
                                Direccion: <Text style={styles.textDetailBlack}>{item.address}</Text>
                            </Text>
                        </View>
                    ))}
                </View>

                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={20} color={colors.primary} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default OrderItem;
