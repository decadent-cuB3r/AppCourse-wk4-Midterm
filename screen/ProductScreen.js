import { Center, ScrollView, AspectRatio, Text, Image, HStack, VStack } from "native-base";

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
            <ScrollView width="85%">
                <VStack>
                    <HStack justifyContent="space-between">
                        <Text bold fontSize="md">{brand}</Text>
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
                        <Text bold fontSize="sm">{grade}</Text>
                    </HStack>
                </VStack>
                <AspectRatio w='300'>
                    <Image
                        source={{ uri: image }}
                        alt='Picture of bike'
                    />
                </AspectRatio>
                <HStack justifyContent="space-around">
                    <VStack>
                        <Text bold fontSize="sm">排氣量</Text>
                        <Text bold fontSize="sm" color="#F9595F">{exhaust}</Text>
                        <Text bold fontSize="sm">乾燥重量</Text>
                        <Text bold fontSize="sm" color="#F9595F">{dryWeight}</Text>
                        <Text bold fontSize="sm">座高</Text>
                        <Text bold fontSize="sm" color="#F9595F">{seatHeight}</Text>
                    </VStack>
                    <VStack>
                        <Text bold fontSize="sm">引擎形式</Text>
                        <Text bold fontSize="sm" color="#F9595F">{engine}</Text>
                        <Text bold fontSize="sm">最大馬力</Text>
                        <Text bold fontSize="sm" color="#F9595F">{horsePower}</Text>
                        <Text bold fontSize="sm">車長X車高X車寬</Text>
                        <Text bold fontSize="sm" color="#F9595F">{dimensions}</Text>
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

export default ProductScreen;