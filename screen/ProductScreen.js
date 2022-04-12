import { Center, ScrollView, AspectRatio, Text, Image, HStack, VStack } from "native-base";
import { StyleSheet } from "react-native";

const ProductScreen = ({ route }) => {
    const {
        brand,
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
    } = route.params;
    const Star = require("../assets/Star.png");
    return (
        <Center>
            <ScrollView width="90%">
                <VStack marginTop={2}>
                    <HStack justifyContent="space-between">
                        <Text bold fontSize="md" color="#989898">{brand}</Text>
                        <HStack>
                            <Image
                                        source={Star}
                                        alt='star'
                                        marginTop={1.5}
                                        marginRight={1}
                                    />
                            <Text bold fontSize="md">{rating}</Text>
                        </HStack>
                    </HStack>
                    <HStack justifyContent="space-between">
                        <Text bold fontSize="xl">{model}</Text>
                        <Text bold fontSize="md" marginTop={1}>{grade}</Text>
                    </HStack>
                </VStack>
                <AspectRatio w='300'>
                    <Image
                        source={{ uri: image }}
                        width="330"
                        marginLeft={2}
                        alt='Picture of bike'
                    />
                </AspectRatio>
                <HStack justifyContent="space-around" style={styles.boxWrapper}>
                    <VStack paddingLeft={5}>
                        <Text bold fontSize="xs" color="#707070">排氣量</Text>
                        <Text bold fontSize="xs" marginLeft={6} color="#F9595F">{exhaust}</Text>
                        <Text bold fontSize="xs" color="#707070">乾燥重量</Text>
                        <Text bold fontSize="xs" marginLeft={6} color="#F9595F">{dryWeight}</Text>
                        <Text bold fontSize="xs" color="#707070">座高</Text>
                        <Text bold fontSize="xs" marginLeft={6} color="#F9595F">{seatHeight}</Text>
                    </VStack>
                    <VStack paddingRight={5}>
                        <Text bold fontSize="xs" color="#707070">引擎形式</Text>
                        <Text bold fontSize="xs" marginLeft={6} color="#F9595F">{engine}</Text>
                        <Text bold fontSize="xs" color="#707070">最大馬力</Text>
                        <Text bold fontSize="xs" marginLeft={6} color="#F9595F">{horsePower}</Text>
                        <Text bold fontSize="xs" color="#707070">車長X車高X車寬</Text>
                        <Text bold fontSize="xs" marginLeft={6} color="#F9595F">{dimensions}</Text>
                    </VStack>
                </HStack>
                <HStack justifyContent="space-between">
                    <VStack>
                        <Text>費用計算</Text>
                        <Text>基本金額</Text>
                    </VStack>
                    <VStack>
                        <Text>TWD 550</Text>
                    </VStack>
                </HStack>
                
            </ScrollView>
        </Center>
    );
};

const styles = StyleSheet.create({
    boxWrapper: {
        alignItems: 'center',
        width: "95%",
        height: 170,
        backgroundColor: "#fff",
        borderRadius: 20,
        marginLeft: "3%",
        marginTop: 10,
        marginBottom: 10,
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 0,
            width: 0
        }
    }
})

export default ProductScreen;