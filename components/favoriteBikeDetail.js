import { Text, View, HStack, VStack, Pressable, AspectRatio, Image } from "native-base";
import { StyleSheet } from "react-native";
import { useState } from 'react';

//import Icons
import IonIcons from 'react-native-vector-icons/Ionicons';

//react-redux 
import { useDispatch } from 'react-redux';
import { Store } from '../redux/store';
//import add favorite action
import { removeFavoriteBike } from '../redux/actions';


const FavoriteBikeDetail = ({ popularBike, navigation }) => {
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
    } = popularBike;
    //initiallize actions dispatch
    const dispatch = useDispatch();

    const [isFav, setIsFav] = useState(true);
    const removeFav = () => {
        setIsFav(false)
        dispatch(removeFavoriteBike(ID));
        console.log(Store.getState());
    };


    const Star = require("../assets/Star.png");
    return (
        <View style={styles.boxWrapper}>
            <Pressable w={350}
                borderRadius="20"
                _dark={{ bg: "blueGray.800", borderColor: 'blueGray.500', borderWidth: 0.6 }}
                _light={{ bg: "white" }}
                onPress={() => navigation.navigate('ProductScreen', popularBike)} >
                <HStack marginLeft={4}>
                    <AspectRatio w={140}>
                        <Image
                            source={{ uri: image }}
                            style={styles.imageBox}
                            width="155"
                            alt='picture of bike'
                        />
                    </AspectRatio>
                    <VStack justifyContent="center" marginLeft={7} w={140}>
                        <HStack justifyContent="space-between" >
                            <Text fontSize="md" lineHeight="xs" color="#989898">{brand}</Text>
                            <Pressable onPress={removeFav}>
                                {
                                    isFav == false ?
                                        <IonIcons name='heart-outline' size={22} />
                                        : <IonIcons name='heart' size={22} color="#f9595f" />
                                }
                            </Pressable>
                        </HStack>
                        <Text bold fontSize="lg">{model}</Text>
                        <HStack justifyContent="space-between">
                            <Text bold fontSize="sm" lineHeight="xs">{grade}</Text>
                            <HStack>
                                <Image
                                    source={Star}
                                    alt='star'
                                    marginTop={0}
                                />
                                <Text lineHeight="xs" bold fontSize="xs">
                                    {rating}
                                </Text>
                            </HStack>
                        </HStack>
                    </VStack>
                </HStack>
            </Pressable >
        </View >
    );
};

const styles = StyleSheet.create({
    boxWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 350,
        height: 100,
        backgroundColor: "#fff",
        borderRadius: 20,
        marginLeft: "5%",
        marginTop: 10,
        marginBottom: 10,
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 0,
            width: 0
        }
    },
    infoBox: {
        flex: 1,
        flexDirection: "row",



    },
    imageBox: {
        flex: 1,
        width: 87,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default FavoriteBikeDetail;