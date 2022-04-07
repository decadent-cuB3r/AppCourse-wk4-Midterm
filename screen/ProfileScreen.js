import { Text, StyleSheet, View } from "react-native";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });