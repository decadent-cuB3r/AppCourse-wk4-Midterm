import { Text, ScrollView, Box, FlatList } from "native-base";
import SearchBike from "../components/searchBike";
import BrandList from "../components/brandList";
import PopularList from "../components/popularList";
import Products from '../json/products.json'
import PopularBike from "../json/popularBikes.json";
import VirtualList from "../json/virtualList.json"

const VirtualizedList = ({ children }) => {
    return (
        <FlatList
            data={[]}
            keyExtractor={children.key}
            renderItem={null}
            ListHeaderComponent={
                <>{children}</>
            }
        />
    )
}


const HomeScreen = ({ navigation }) => {
    return (
        <VirtualizedList children={VirtualList.list}>
            <SearchBike />
            <Text bold fontSize="2xl" marginLeft="1.5" >品牌</Text>
            <BrandList data={Products.Brands} navigation={navigation} />
            <Text bold fontSize="2xl" marginLeft="1.5" >熱門車款</Text>
            <PopularList list={PopularBike.Bikes} navigation={navigation} />
        </VirtualizedList>
    );
};

export default HomeScreen;
