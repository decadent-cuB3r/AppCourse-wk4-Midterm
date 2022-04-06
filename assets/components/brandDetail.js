import { Pressable, View, Image, StyleSheet } from "react-native";

const BrandDetail = ({data}) => {
    return (
        <Pressable style={styles.brandWrapper}>
            <View>
                <Image source={{ uri: data.image }} style={styles.imageBox} />
            </View>
        </Pressable>
    );
}

export default BrandDetail;

const styles = StyleSheet.create({
    brandWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});