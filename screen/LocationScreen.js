import React from "react";
import MapView from 'react-native-maps';
import { Box, Text, Center, View } from "native-base";
import { StyleSheet } from "react-native";

  
export default function LocationScreen () {
    const onRegionChange=(region)=> {
        this.setState({ region });
      }
    return (
        // Important! Always set the container height explic
        <View >
            <MapView
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                onRegionChange={onRegionChange}
            />
            
        </View>
    );
};