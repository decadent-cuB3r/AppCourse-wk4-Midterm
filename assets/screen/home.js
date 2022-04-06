import { Text, View, StyleSheet } from "react-native";
import PopularList from "../components/popularList";
import BrandList from "../components/brandList";

const Home = () => {
    return (
        <View style={styles.container}>
            <BrandList />
            <Text>Home Screen</Text>
            <PopularList />
        </View>
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