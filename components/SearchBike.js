import { View, Text, TextInput, StyleSheet } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const SearchBike = () => {
    return (
        <View style={styles.SearchWrapper}>
            <Text style={styles.SearchPrompt}>尋找你的愛車</Text>
            <Text style={styles.SearchPrompt}>開啟一趟快樂新旅程！</Text>
            <TextInput
                placeholder='Search a car...'
                style={styles.SerachInput}
            />
        </View>
    );
}

export default SearchBike;

const styles = StyleSheet.create({
    SearchWrapper: {
        backgroundColor: "#F9595F",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 136,
        alignItems: 'baseline',
        justifyContent: 'center',
        paddingLeft: 20
    },
    SearchPrompt: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "700"
    },
    SerachInput: {
        borderRadius: 10,
        backgroundColor: "#FFF",
        width: 320,
        height: 40,
    }
});