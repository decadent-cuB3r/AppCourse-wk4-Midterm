import { Text, StyleSheet, Box } from "native-base";

const BrandScreen = () => {
    return (
        <Box style={styles.container}>
            <Text>Brand Screen</Text>
        </Box>
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