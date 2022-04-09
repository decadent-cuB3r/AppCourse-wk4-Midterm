import { Center, Box, AspectRatio, Text, Image, HStack, ScrollView } from 'native-base';

//import components
import BrandScreenList from '../components/BrandScreenList';

const BrandScreen = ({ route, navigation }) => {
    const {
        brand,
        image,
        nakedBikes,
        raceBikes,
        scooters
    } = route.params;

    return (
        <Box>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HStack margin={2}>
                    <AspectRatio>
                        <Image
                            source={{ uri: image }}
                            alt='Brand Logo'
                        />
                    </AspectRatio>
                    <Text bold fontSize="3xl" >
                        {brand}
                    </Text>
                </HStack>
                <Text bold fontSize="xl" marginLeft={5}>街車</Text>
                <BrandScreenList data={nakedBikes} navigation={navigation} />
                <Text bold fontSize="xl" marginLeft={5}>跑車</Text>
                <BrandScreenList data={raceBikes} navigation={navigation} />
                <Text bold fontSize="xl" marginLeft={5}>速可達</Text>
                <BrandScreenList data={scooters} navigation={navigation} />
            </ScrollView>
        </Box>
    )
};

export default BrandScreen;
