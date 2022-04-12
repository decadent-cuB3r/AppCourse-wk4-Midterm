import { Pressable, View, Image, Text } from "native-base";
import {StyleSheet} from "react-native";
import { useTheme } from "@react-navigation/native";

const BrandDetail = ({ brand, navigation }) => {
    const { colors }  = useTheme();
    
    return (
        <View style={styles.brandWrapper}>
            <Pressable 
            w={87}
            h={70}
            borderRadius={20}
            _dark={{ bg: "blueGray.800", borderColor: 'blueGray.500', borderWidth: 0.6 }}
            _light={{ bg: "white" }}
            onPress={() => navigation.navigate('BrandScreen', brand)}>
                <Image source={{ uri: brand.image }} style={styles.imageBox} alt="brand logo"/>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    brandWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 87,
        height: 70,
        backgroundColor: "#fff",
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 4,
        marginTop: 10,
        marginBottom: 10,
        shadowOpacity: 0.3,
        shadowOffset:{
            height: 0,
            width: 0
        }
    },
    imageBox: {
        flex: 1,
        width: 87,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BrandDetail;