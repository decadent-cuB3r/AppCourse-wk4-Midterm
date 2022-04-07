import { Text, StyleSheet, View } from "react-native";

const FavoriteBikeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Favorite Bike Screen</Text>
        </View>
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