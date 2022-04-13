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
                latitude: 23.697809,
                longitude: 120.960518,
                latitudeDelta: 2,
                longitudeDelta: 2
            }}  
            showsUserLocation={true}
        >
        <MapView.Marker
            coordinate={{latitude: 25.025597,
            longitude: 121.536455}}
            title={"台北大安分店"}
            description={"台北市大安區和平東路二段34號"}
            
         />
         <MapView.Marker
            coordinate={{latitude: 25.058046,
            longitude: 121.488620}}
            title={"新北三重分店"}
            description={"新北市三重區重新路四段268號"}
         />
         <MapView.Marker
            coordinate={{latitude: 24.159835,
            longitude: 120.636641}}
            title={"台中西屯分店"}
            description={"台中市西屯區市政路539號"}
         />
         <MapView.Marker
            coordinate={{latitude: 24.961723,
            longitude: 121.226936}}
            title={"桃園中壢分店"}
            description={"桃園市中壢區延平路20號"}
         />
         <MapView.Marker
            coordinate={{latitude: 22.584217,
            longitude: 120.320516}}
            title={"高雄前鎮分店"}
            description={"高雄市前鎮區康定路20巷12號"}
         />
         
        </MapView>
    );
};