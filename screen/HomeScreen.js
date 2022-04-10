import { Text, ScrollView, Box } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBike from "../components/SearchBike";
import BrandList from "../components/BrandList";
import PopularList from "../components/PopularList";
import Products from '../json/products.json'
import PopularBike from "../json/popularBikes.json";

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
            <SearchBike />
            <Text bold fontSize="2xl" marginLeft="1.5" >品牌</Text>
            <BrandList data={Products.Brands} navigation={navigation} />
            <Text bold fontSize="2xl" marginLeft="1.5" >熱門車款</Text>
            <PopularList list={PopularBike.Bikes} navigation={navigation} />
        </ScrollView>

    );
};

export default HomeScreen;
