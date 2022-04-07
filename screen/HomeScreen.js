import { Text, ScrollView, StyleSheet } from "react-native";
import BrandList from "../components/BrandList";
import SearchBike from "../components/SearchBike";

import Brands from "../json/brands.json";

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <SearchBike />
            <BrandList data={Brands.Brands}/>
            <Text>Home Screen</Text>
            {/* <PopularList /> */}
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