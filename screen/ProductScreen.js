import { Text, StyleSheet, View } from "react-native";

const ProductScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Product Screen</Text>
        </View>
    );
};

export default ProductScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });