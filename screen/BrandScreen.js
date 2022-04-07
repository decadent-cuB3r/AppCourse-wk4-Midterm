import { Text, StyleSheet, View } from "react-native";

const BrandScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Brand Screen</Text>
        </View>
    );
};

export default BrandScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });