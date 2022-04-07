import { Text, StyleSheet, Box } from "native-base";

const FavoriteBikeScreen = () => {
    return (
        <Box style={styles.container}>
            <Text>Favorite Bike Screen</Text>
        </Box>
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