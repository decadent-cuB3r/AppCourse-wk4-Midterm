import { Box, AspectRatio, Image, Text, Pressable, View, HStack } from 'native-base';
import {StyleSheet} from "react-native";

const BrandScreenDetail = ({ data, navigation }) => {
    const Star = require("../assets/Star.png");
    return (
            <View style={styles.boxWrapper}>
                <Pressable 
                w={150} 
                h={170}
                borderRadius={20}
                paddingTop={3}
                paddingLeft={2}
                paddingRight={2}
                _dark={{ bg: "blueGray.800", borderColor: 'blueGray.500', borderWidth: 0.6 }}
                _light={{ bg: "white" }}
                onPress={() => navigation.navigate('ProductScreen', data)}>
                    
                    <AspectRatio w={120} >
                        <Image
                            source={{uri: data.image}}
                            alt='picture of bike'
                            width="130"
                            justifyContent="center"                        />
                    </AspectRatio>
                    <Text  fontSize="sm" lineHeight="xs">
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
        height: 170,
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
