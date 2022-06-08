import { VStack, Center, Button, Image } from "native-base";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";


const WelcomeScreen = () => {
    return (
        <Center _light={{ bg: "#F9595F" }} h="100%" >
            <VStack h="100%">
                <LottieView source={require("../assets/welcomeTop.json")} autoPlay loop="false" style={(styles.topLottie)} />
                <Image source={require("../assets/splash.png")} alt="Logo" style={(styles.logo)} />
                <Button backgroundColor="#fff" _text={{color: "#F9595F"}}>會員登入</Button>
                <Button backgroundColor="#fff" _text={{color: "#F9595F"}}>會員註冊</Button>
                <LottieView source={require("../assets/welcomeBottom.json")} autoPlay loop="false" style={(styles.bottomLottie)} />
            </VStack>
        </Center>
    )
}

const styles = StyleSheet.create({
    topLottie: {
        
    },
    logo: {

    },
    bottomLottie: {

    }
});

export default WelcomeScreen;