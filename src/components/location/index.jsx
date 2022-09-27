import { useNavigation, useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';

import React, { useState, useEffect } from 'react';
import { View, Button, Text, Alert } from 'react-native';

import { colors } from '../../constants/colors';
import { styles } from './styles';

const LocationSelector = ({ onLocation }) => {
    const [pickedLocation, setPickedLocation] = useState(null);
   

    const onHandleGetLocation = async () => {
        const isLocationPermissionGranted = await verifyPermissions();
        if (!isLocationPermissionGranted) return;

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        });

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
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
            {/* <View>
                {!pickedLocation ? (
                    <View>
                        <Text>no hay direccion seleccionada</Text>
                    </View>
                ) : (
                    <Text>
                        {`Latitud: ${pickedLocation.lat},Longitude:${pickedLocation.lng}`}s
                    </Text>
                )}
            </View> */}
            {/* <MapPreview location={pickedLocation} style={styles.preview}>
                <Text>No has seleccionado una ubicacion</Text>
            </MapPreview> */}
            <View style={styles.container}>
                <Button
                    title="Obtener ubicación"
                    onPress={onHandleGetLocation}
                    color={colors.primary}
                />
                {/* <Button
                    title="Elegir desde el mapa"
                    onPress={onHandlePickLocation}
                    color={colors.secondary}
                /> */}
            </View>
        </View>
    );
};

export default LocationSelector;
