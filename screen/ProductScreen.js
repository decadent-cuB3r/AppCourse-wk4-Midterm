import { Text, StyleSheet, Box} from "native-base";

const ProductScreen = () => {
    return (
        <Box style={styles.container}>
            <Text>Product Screen</Text>
        </Box>
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