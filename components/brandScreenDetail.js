import { Box, AspectRatio, Image, Text, Pressable, View, HStack } from 'native-base';
import {StyleSheet} from "react-native";
//react-redux 
import { useDispatch } from 'react-redux';
import { Store } from '../redux/store';
import { useState } from 'react';
//import Icons
import IonIcons from 'react-native-vector-icons/Ionicons';
//import add favorite action
import { addFavoriteBike, removeFavoriteBike } from '../redux/actions';


const BrandScreenDetail = ({ data, navigation }) => {
    // destructure popularBike
    const {
        brand,
        ID,
        model,
        image,
        grade,
        rating,
        exhaust,
        engine,
        dryWeight,
        horsePower,
        seatHeight,
        dimensions
    } = data;
    //initiallize actions dispatch
    const dispatch = useDispatch();

    const [isFav, setIsFav] = useState(false);
    const toggleFav = () => {
        if (isFav == false) {
            setIsFav(true)
            dispatch(addFavoriteBike({ brand, ID, model, image, grade, rating, exhaust, engine, dryWeight, horsePower, seatHeight, dimensions }));
        }
        else {
            setIsFav(false)
            dispatch(removeFavoriteBike(ID));
        }
        console.log(Store.getState());
    };

    const Star = require("../assets/Star.png");
    return (
            <View style={styles.boxWrapper}>
                <Pressable 
                w={150} 
                h={185}
                borderRadius={20}
                paddingTop={3}
                paddingLeft={2}
                paddingRight={2}
                _dark={{ bg: "blueGray.800", borderColor: 'blueGray.500', borderWidth: 0.6 }}
                _light={{ bg: "white" }}
                onPress={() => navigation.navigate('ProductScreen', data)}
                style={{ position: 'absolute' }}>
                    <Pressable 
                    onPress={toggleFav}
                    marginLeft="80%"
                    height="5"
                    marginTop="-1"
                    >
                            {
                                isFav == false ?
                                    <IonIcons name='heart-outline' size={22} />
                                    : <IonIcons name='heart' size={22} color="#F9595F"/>
                            }
                    </Pressable>
                    <AspectRatio w={120} h={90}>
                        <Image
                            source={{uri: data.image}}
                            alt='picture of bike'
                            width="130"
                            justifyContent="center" 
                            />
                    </AspectRatio>
                    <Text  fontSize="sm" lineHeight="xs" color="#989898">
                        {data.brand}
                    </Text>
                    <Text bold fontSize="md" lineHeight="xs">
                        {data.model}
                    </Text>
                    <HStack justifyContent="space-between">
                        <Text fontSize="xs" lineHeight="xs" bold>{data.grade}</Text>
                        <HStack >
                            <Image
                                    source={Star}
                                    alt='star'
                                    marginTop={0}
                                />
                            <Text lineHeight="xs" bold fontSize="xs">
                                {data.rating}
                            </Text>
                        </HStack>
                    </HStack>
                </Pressable>
            </View>
    );
};

const styles = StyleSheet.create({
    boxWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 185,
        backgroundColor: "#fff",
        borderRadius: 20,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 0,
            width: 0
        }
    },
})

export default BrandScreenDetail;
