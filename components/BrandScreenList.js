import { FlatList } from "native-base";
import BrandScreenDetail from "./BrandScreenDetail";

const BrandScreenList = ({ data, navigation }) => {
    const renderItem = ({ item }) => <BrandScreenDetail data={item} navigation={navigation} />;

    return(
        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.model}
            horizontal={true}
            contentInset={{right: 20}}
            showsHorizontalScrollIndicator={false}
        />
    );

};

export default BrandScreenList;