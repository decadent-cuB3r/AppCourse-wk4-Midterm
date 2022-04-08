import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, HStack, VStack } from "native-base";

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

    return (
        <Center>
            <ScrollView>
                <VStack>
                    <HStack>
                        <Text>{brand}</Text>
                        <Text>{model}</Text>
                    </HStack>
                    <HStack>
                        <Text>{rating}</Text>
                        <Text>{grade}</Text>
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
                        <Text bold fontSize="md">排氣量</Text>
                        <Text bold fontSize="md">{exhaust}</Text>
                        <Text bold fontSize="md">乾燥重量</Text>
                        <Text bold fontSize="md">{dryWeight}</Text>
                        <Text bold fontSize="md">座高</Text>
                        <Text bold fontSize="md">{seatHeight}</Text>
                    </VStack>
                    <VStack>
                        <Text bold fontSize="md">引擎形式</Text>
                        <Text bold fontSize="md">{engine}</Text>
                        <Text bold fontSize="md">最大馬力</Text>
                        <Text bold fontSize="md">{horsePower}</Text>
                        <Text bold fontSize="md">車長X車高X車寬</Text>
                        <Text bold fontSize="md">{dimensions}</Text>
                    </VStack>
                </HStack>
            </ScrollView>
        </Center>
    );
};

export default ProductScreen;