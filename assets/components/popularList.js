import { FlatList, ScrollView, TextInput, View } from "react-native";


export default function PopularList({navigation, data}){
    const renderItem = ({ item }) => <BookDetail data={item} navigation={navigation} />;

    return(
        <FlatList 
            data = {data}
            renderItem={renderItem}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            
        />
    );
};