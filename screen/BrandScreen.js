import { Center, Box, AspectRatio, Text, Image, HStack, ScrollView, Button } from 'native-base';

//import components
import BrandScreenList from '../components/brandScreenList';

const BrandScreen = ({ route, navigation }) => {
    const {
        brand,
        image,
        nakedBikes,
        raceBikes,
        scooters
    } = route.params;

    return (

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
                <HStack justifyContent="space-between" marginRight="5%">
                    <Text bold fontSize="xl" marginLeft={5}>街車</Text>
                    <Button size="sm" marginTop="1.5" paddingTop="0" paddingBottom="0" borderRadius={10} h={6} backgroundColor='#F9595F'>查看更多</Button>
                </HStack>
                <BrandScreenList data={nakedBikes} navigation={navigation} />
                <HStack justifyContent="space-between" marginRight="5%">
                    <Text bold fontSize="xl" marginLeft={5}>跑車</Text>
                    <Button size="sm" marginTop="1.5" paddingTop="0" paddingBottom="0" borderRadius={10} h={6} backgroundColor='#F9595F'>查看更多</Button>
                </HStack>
                <BrandScreenList data={raceBikes} navigation={navigation} />
                <Text bold fontSize="xl" marginLeft={5}>速可達</Text>
                <BrandScreenList data={scooters} navigation={navigation} />
            </ScrollView>
    )
};

export default BrandScreen;
