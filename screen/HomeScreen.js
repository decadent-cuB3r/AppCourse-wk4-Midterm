import { StyleSheet } from "react-native";
import { Text, Box } from "native-base"
import SearchBike from "../components/SearchBike";
import BrandList from "../components/BrandList";
import PopularList from "../components/PopularList";
import Products from '../json/products.json'
import PopularBike from "../json/popularBikes.json";

const HomeScreen = ({ navigation }) => {
    return (
        <Box >
            <SearchBike />
            <Box>
                <Text marginTop={4} marginLeft={5} bold fontSize="lg">品牌</Text>
                <BrandList data={Products.Brands} navigation={navigation} />
                <Text style={styles.boldText}>熱門車款</Text>
                <PopularList list={PopularBike.Bikes} navigation={navigation} />
            </Box>
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
    boldText: {
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 5
    }
});
