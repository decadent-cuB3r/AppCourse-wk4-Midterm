import { Center, Box, AspectRatio, Text, Image, HStack } from 'native-base';

//import Json for getJson Api(fail)
import HondaBikes from '../json/honda.json';
import YamahaBikes from '../json/yamaha.json';

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
            <HStack>
                <AspectRatio>
                    <Image
                        source={{ uri: image }}
                        alt='Brand Logo'
                    />
                </AspectRatio>
                <Text>
                    {brand}
                </Text>
            </HStack>
            <Text>街車</Text>
            <BrandScreenList data={nakedBikes} navigation={navigation} />
            <Text>跑車</Text>
            <BrandScreenList data={raceBikes} navigation={navigation} />
            <Text>速可達</Text>
            <BrandScreenList data={scooters} navigation={navigation} />
        </Box>
    )
};

export default BrandScreen;
