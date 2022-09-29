import * as Location from 'expo-location';
import React from 'react';
import { View, Button,  Alert } from 'react-native';

import { colors } from '../../constants/colors';
import { styles } from './styles';

const LocationSelector = ({ onLocation }) => {
    const onHandleGetLocation = async () => {
        const isLocationPermissionGranted = await verifyPermissions();
        if (!isLocationPermissionGranted) return;

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        });

        onLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        });
    };

    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                'Permiso insuficientes',
                'Necesitamos permisos para usar la localizacion',
                [{ text: 'Ok' }]
            );
            return false;
        }
        return true;
    };
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Button
                    title="Obtener ubicación"
                    onPress={onHandleGetLocation}
                    color={colors.primary}
                ></Button>
            </View>
        </View>
    );
};

export default LocationSelector;
