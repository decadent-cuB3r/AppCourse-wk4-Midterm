import { Text, StyleSheet, Box } from "native-base";

const ReservationScreen = () => {
    return (
        <Box style={styles.container}>
            <Text>Reservation Screen</Text>
        </Box>
    );
};

export default ReservationScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });