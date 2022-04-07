import { Box } from "native-base";
import { Text, StyleSheet, View } from "react-native";

const SettingScreen = () => {
    return (
        <Box style={styles.container}>
            <Text>Setting Screen</Text>
        </Box>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });