import { ScrollView, StyleSheet } from "react-native";
import BrandList from "../components/BrandList";
import SearchBike from "../components/SearchBike";
import PopularList from "../components/PopularList";
import Brands from "../json/brands.json";
import PopularBike from "../json/popularBikes.json";

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} >
            <SearchBike />
            <BrandList data={Brands.Brands} navigation={navigation} />
            <PopularList list={PopularBike.Bikes} />
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });