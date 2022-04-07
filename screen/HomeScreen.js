import { Box, StyleSheet } from "native-base";
import SearchBike from "../components/SearchBike";
import BrandList from "../components/BrandList";
import PopularList from "../components/PopularList";
import Brands from "../json/brands.json";
import PopularBike from "../json/popularBikes.json";

const HomeScreen = ({ navigation }) => {
    return (
        <Box style={styles.container}>
            <SearchBike />
            <BrandList data={Brands.Brands} navigation={navigation} />
            <PopularList list={PopularBike.Bikes} />
        </Box>
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