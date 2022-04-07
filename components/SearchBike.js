import { View, Text, TextInput, StyleSheet } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import IonIcons from 'react-native-vector-icons/Ionicons'; 

const SearchBike = () => {
    return (
        <View style={styles.SearchWrapper}>
            <Text style={styles.SearchPrompt}>尋找你的愛車</Text>
            <Text style={styles.SearchPrompt}>開啟一趟快樂新旅程！</Text>
            <View style={styles.SearchBox}>
                <IonIcons name="search" color={color} size={28} style={styles.SearchIcon} />
                <TextInput
                
                    placeholder='Search a car...'
                    style={styles.SerachInput}
                />
                <IonIcons name="options" color={color} size={28} style={styles.SearchIcon} />
            </View>
        </View>
    );
}

export default SearchBike;

const styles = StyleSheet.create({
    SearchWrapper: {
        backgroundColor: "#F9595F",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 156,
        alignItems: 'baseline',
        justifyContent: 'center',
        paddingLeft: 20
    },
    SearchPrompt: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "700",
        marginTop: 3 , 
    },
    SerachInput: {
        borderRadius: 10,
        backgroundColor: "#FFF",
        marginTop: 10 ,
        marginBottom: 10 ,
        width: 275,
        height: 40,
    },
    SearchBox: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 10
    },
    SearchIcon: {
        margin: 5
    }
});