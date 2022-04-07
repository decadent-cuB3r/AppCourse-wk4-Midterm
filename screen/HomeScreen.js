import { View, ScrollView, StyleSheet } from "react-native";
import SearchBike from "../components/SearchBike";
import BrandList from "../components/BrandList";
import PopularList from "../components/PopularList";
import Brands from "../json/brands.json";
import PopularBike from "../json/popularBikes.json";

const HomeScreen = ({ navigation }) => {
    return (
        <View >
            <SearchBike />
            <BrandList data={Brands.Brands} navigation={navigation} />
            <PopularList list={PopularBike.Bikes} />
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
});