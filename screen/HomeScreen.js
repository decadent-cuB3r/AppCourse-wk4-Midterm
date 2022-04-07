import { View, ScrollView, StyleSheet } from "react-native";
import SearchBike from "../components/SearchBike";
import BrandList from "../components/BrandList";
import PopularList from "../components/PopularList";
import Brands from "../json/brands.json";
import PopularBike from "../json/popularBikes.json";
import { max } from "react-native-reanimated";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SearchBike />
            <ScrollView showsHorizontalScrollIndicator={true} style={styles.ScrollView} >
                <BrandList data={Brands.Brands} navigation={navigation} />
                <PopularList list={PopularBike.Bikes} />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 900,
        width: "100%"
    },
    ScrollView: {
        minHeight: 900
    }
});