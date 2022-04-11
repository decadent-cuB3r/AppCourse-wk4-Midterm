import PopularList from "../components/popularList";
import PopularBike from "../json/popularBikes.json";

const HomeScreen = ({ navigation }) => {

    return (
        <PopularList list={PopularBike.Bikes} navigation={navigation} />
    );
};

export default HomeScreen;
