import React, { useState } from 'react';
// eslint-disable-next-line import/namespace
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { CartItem } from '../../components';
import { confirmCart, removeItem } from '../../store/actions/cart.actions';
import { styles } from './styles';
import { LocationSelector } from '../../components';
// import { formatLocation } from '../../utils/formatLocation';
import { URL_GEOCODING } from '../../utils/maps';

// const adress = 'calle siempre viva 2256';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);
    const disabledButton = total === 0;
    const [address, setAddress] = useState(null);
    const [location, setLocation] = useState(null);

    const onHandleDelete = (id) => {
        dispatch(removeItem(id));
    };

    const onHandleConfirm = async () => {
        try {
            await formatLocation(location);
            dispatch(confirmCart(items, total, address));
        } catch (error) {
            throw new Error('error parseando la location a una address');
        }
    };

    const formatLocation = async (coords) => {
        try {
            const response = await fetch(
                URL_GEOCODING(coords?.lat, coords?.lng)
            );
            const data = await response.json();
            const formatAddress = data.results[0].formatted_address;
            setAddress(formatAddress);
        } catch (error) {
            throw new Error('Error de conexion con el servidor');
        }
    };

    const keyExtractor = (item) => item.id.toString();
    const renderItem = ({ item }) => (
        <CartItem item={item} onDelete={onHandleDelete} />
    );
    const onHandleLocation = async (location) => {
        setLocation(location);
        try {
            await formatLocation(location);
        } catch (error) {
            throw new Error('error parseando la location a una address');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                />
            </View>
            <View>
                {/* <Text></Text> */}
                <LocationSelector onLocation={onHandleLocation} />
                <Text>
                    {address ? (
                        <View style={styles}>
                            <Text>{address}</Text>
                            <Button style={styles.buttonConfirm}
                            title = "modificar direccion"
                            />
                        
                            
                        </View>
                    ) : (
                        <View>
                            <Text>No se ha seleccionado direccion</Text>
                        </View>
                    )}
                </Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    disabled={disabledButton}
                    style={
                        disabledButton
                            ? styles.buttonConfirmDisabled
                            : styles.buttonConfirm
                    }
                    onPress={() => onHandleConfirm()}
                >
                    <Text style={styles.buttonText}>Confirm</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalTitle}>Total</Text>
                        <Text style={styles.total}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Cart;
