import { AspectRatio, Image, Text, Pressable, View, HStack, VStack } from 'native-base';
import { StyleSheet } from "react-native";

//import Icons
import IonIcons from 'react-native-vector-icons/Ionicons';

//react-redux 
import { useDispatch } from 'react-redux';
import { Store } from '../redux/store';
//import add favorite action
import { addFavoriteBike } from '../redux/actions';

const PopularDetail = ({ popularBike, navigation }) => {
    
    const dispatch = useDispatch();

    const addToFav = () => {    
        alert('add to favorite!');
        console.log(Store.getState());
        dispatch(addFavoriteBike(popularBike));
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
                            source={{ uri: popularBike.image }}
                            style={styles.imageBox}
                            width="155"
                            alt='picture of bike'
                        />
                    </AspectRatio>
                    <VStack justifyContent="center" marginLeft={7} w={140}>
                        <HStack justifyContent="space-between" >
                            <Text fontSize="md" lineHeight="xs" color="#989898">{popularBike.brand}</Text>
                            <Pressable  onPress={addToFav}>
                                <IonIcons name='heart-outline' size={20} />
                            </Pressable>
                        </HStack>
                        <Text bold fontSize="lg">{popularBike.model}</Text>
                        <HStack justifyContent="space-between">
                            <Text bold fontSize="sm" lineHeight="xs">{popularBike.grade}</Text>
                            <HStack>
                                <Image
                                    source={Star}
                                    alt='star'
                                    marginTop={0}
                                />
                                <Text lineHeight="xs" bold fontSize="xs">
                                    {popularBike.rating}
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

export default PopularDetail;
