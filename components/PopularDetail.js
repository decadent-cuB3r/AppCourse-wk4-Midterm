import { Pressable, View, Image, StyleSheet, Text } from "react-native";

const PopularDetail = ({ popularBike }) => {

    return (
        <View style={styles.boxWrapper}>
            <Pressable style={styles.infoBox}>
                <View>
                    <Image source={{ uri: popularBike.image }} style={styles.imageBox} />
                </View>
                <View>
                    <Text>{popularBike.brand}</Text>
                    <Text>{popularBike.model}</Text>
                    <Text>{popularBike.grade}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    boxWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
        height: 200,
        backgroundColor: "#fff",
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 4,
        marginTop: 10,
        marginBottom: 10,
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 0,
            width: 0
        }
    },
    infoBox: {
        flex: 1,
        flexDirection: "row",


    },
    imageBox: {
        flex: 1,
        width: 87,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default PopularDetail;
