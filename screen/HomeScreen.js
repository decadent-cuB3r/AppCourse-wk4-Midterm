import { Text, ScrollView } from "native-base"
import SearchBike from "../components/searchBike";
import BrandList from "../components/brandList";
import PopularList from "../components/popularList";
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
