import { VStack, Center, Button, Image, Pressable, Text } from "native-base";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";



const WelcomeScreen = ({ navigation }) => {
    return (
        <Center _light={{ bg: "#F9595F" }} h="100%" >
            <VStack>
                <LottieView  source={require("../assets/welcomeTop.json")} autoPlay loop="false" style={(styles.topLottie)} />
                <Image source={require("../assets/splash.png")} alt="Logo" style={(styles.logo)} />
                <Button onPress={() => navigation.navigate('LoginScreen')}  borderRadius={10} mb={5} backgroundColor="#fff" _text={{ color: "#F9595F" }}>會員登入</Button>
                <Button onPress={()=>navigation.navigate('RegisterScreen')} borderRadius={10} backgroundColor="#fff" _text={{ color: "#F9595F" }}>會員註冊</Button>
                <LottieView source={require("../assets/welcomeBottom.json")} autoPlay loop="false" style={(styles.bottomLottie)} />
            </VStack>
        </Center>
    )
}

const styles = StyleSheet.create({
    topLottie: {
        position: "absolute",
        top: -150,
        left: -10,
        zIndex: -10
    },
    logo: {
    },
    bottomLottie: {
        position: "absolute",
        bottom: -300,
        right: -30,
        zIndex: -10
    }
});

export default WelcomeScreen;