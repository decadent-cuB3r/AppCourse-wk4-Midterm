import { Box, AspectRatio, Image, Text, Pressable } from 'native-base';


const BrandScreenDetail = ({ data, navigation }) => {
    return (
        <Pressable onPress={() => navigation.navigate('ProductScreen', data)}>
            <Text>
                {data.model}
            </Text>
            <AspectRatio w={100}>
                <Image
                    source={{uri: data.image}}
                    alt='picture of bike'
                />
            </AspectRatio>
        </Pressable>
    );
};

export default BrandScreenDetail;