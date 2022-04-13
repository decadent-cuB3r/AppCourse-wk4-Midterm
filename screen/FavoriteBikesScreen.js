import { Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import PopularDetail from "../components/popularDetail";

const FavoriteBikeScreen = ({navigation}) => {
    const renderItem = ({ item }) => <PopularDetail popularBike={item} navigation={navigation} />;
    const bikes = useSelector((state) => state.favBike.bikes);

    return (
        <FlatList
            data={bikes}
            renderItem={renderItem}
            keyExtractor={item => item.ID}
        />
    );
};

export default FavoriteBikeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});