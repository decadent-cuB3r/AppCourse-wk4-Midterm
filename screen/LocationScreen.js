import React from "react";
import MapView from 'react-native-maps';
import { Box, Text, Center, View } from "native-base";

export default function LocationScreen () {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <View style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Box></Box>
            </GoogleMapReact>
        </View>
    );
};