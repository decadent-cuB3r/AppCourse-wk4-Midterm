import { Text, ScrollView, StyleSheet } from "react-native";
import PopularList from "../components/popularList";
import BrandList from "../components/brandList";
import Brands from "../json/Brands.json";

const Home = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <BrandList data={Brands.Brands}/>
            {/* <PopularList /> */}
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });