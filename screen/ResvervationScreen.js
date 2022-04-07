import { Text, StyleSheet, View } from "react-native";

const ReservationScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Reservation Screen</Text>
        </View>
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