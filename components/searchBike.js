import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Center, Box } from 'native-base';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import IonIcons from 'react-native-vector-icons/Ionicons';

const SearchBike = () => {
    return (
        <Center backgroundColor="#F9595F" roundedBottomLeft="20" roundedBottomRight="20" h="150" >
            <Box width="90%">
                <Text style={styles.SearchPrompt}>尋找你的愛車</Text>
                <Text style={styles.SearchPrompt}>開啟一趟快樂新旅程！</Text>
            </Box>
            <Box style={styles.SearchBox}>
                <IonIcons name="search" color={color} size={28} style={styles.SearchIcon} />
                <TextInput
                    placeholder='Search a car...'
                    style={styles.SerachInput}
                />
                <IonIcons name="options" color={color} size={28} style={styles.SearchIcon} />
            </Box>
        </Center>
    );
}

export default SearchBike;

const styles = StyleSheet.create({
    SearchPrompt: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "700",
        marginTop: 3,
    },
    SerachInput: {
        borderRadius: 10,
        backgroundColor: "#FFF",
        marginTop: 10,
        marginBottom: 10,
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
