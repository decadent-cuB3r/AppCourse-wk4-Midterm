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
                <HStack>
                    <VStack>
                        <Text>排氣量</Text>
                        <Text>{exhaust}</Text>
                        <Text>乾燥重量</Text>
                        <Text>{dryWeight}</Text>
                        <Text>座高</Text>
                        <Text>{seatHeight}</Text>
                    </VStack>
                    <VStack>
                        <Text>引擎形式</Text>
                        <Text>{engine}</Text>
                        <Text>最大馬力</Text>
                        <Text>{horsePower}</Text>
                        <Text>車長X車高X車寬</Text>
                        <Text>{dimensions}</Text>
                    </VStack>
                </HStack>
            </ScrollView>
        </Center>
    );
};

export default ProductScreen;