import { Text, StyleSheet, Box } from "native-base";

const ProfileScreen = () => {
    return (
        <Box style={styles.container}>
            <Text>Profile Screen</Text>
        </Box>
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