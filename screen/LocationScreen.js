import React from "react";
import MapView from 'react-native-maps';
import { Box, Text, Center, View } from "native-base";
import { StyleSheet } from "react-native";


export default function LocationScreen() {
    const onRegionChange = (region) => {
        this.setState({ region });
    }
    return (
        <MapView
            style={{ flex: 1 }}
            region={{
                latitude: 42.882004,
                longitude: 74.582748,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
            showsUserLocation={true}
        />
    );
};