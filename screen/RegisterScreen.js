import { useState } from "react"
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Button,
    HStack,
    Center,
    useColorMode,
    Pressable
} from "native-base";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
    Easing,
} from 'react-native-reanimated';
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { gotoLogin, registerAsync } from "../redux/accountSlice"

const AnimatedButton = Animated.createAnimatedComponent(Button);

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const [loginRequest, setLoginRequest] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const { colorMode } = useColorMode();
    const rotation = useSharedValue(0);
    const btnWidth = useSharedValue("100%");
    const animatedSpinnerStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotateZ: `${rotation.value}deg`,
                },
            ],
        };
    }, [rotation.value]);

    const animatedButtonStyles = useAnimatedStyle(() => {
        return {
            width: btnWidth.value,
        };
    }, [btnWidth.value]);

    const onSignUp = () => {
        dispatch(registerAsync({ name, email, password }))
        setLoginRequest(!loginRequest);
        if (loginRequest) {
            rotation.value = withTiming(0, {
                duration: 1000,
                easing: Easing.linear,
            });
            btnWidth.value = withTiming('100%', {
                duration: 400,
                easing: Easing.linear,
            });
        } else {
            rotation.value = withRepeat(
                withTiming(360, {
                    duration: 1000,
                    easing: Easing.linear,
                }),
                -1
            );
            btnWidth.value = withTiming("15", {
                duration: 300,
                easing: Easing.linear,
            });
        }
    }


    const goToLogin = () => {
        dispatch(gotoLogin())
    }


    return (
        <Center w="100%" flex={1}
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "#F9595F" }}
        >
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <VStack alignItems={'center'} mb="4">
                    <Heading size="lg" fontWeight="600" color="white">
                        會員註冊
                    </Heading>
                </VStack>

                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label _text={{ color: "white" }}>姓名</FormControl.Label>
                        <Input value={name}
                            onChangeText={text => setName(text)} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label _text={{ color: "white" }}>Email ID</FormControl.Label>
                        <Input value={email}
                            onChangeText={text => setEmail(text)} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label _text={{ color: "white" }}>Password</FormControl.Label>
                        <Input type="password" value={password}
                            onChangeText={text => setPassword(text)} />
                    </FormControl>
                    <AnimatedButton mt="12" h="10" w="100%" mx="auto" backgroundColor="white" size="md" _text={{ color: "#F9595F" }}
                        borderRadius={loginRequest ? 48 : null}
                        height={loginRequest ? "10" : null}
                        style={animatedButtonStyles}
                        onPress={onSignUp}
                    >
                        {
                            loginRequest
                                ? <Animated.View style={[styles.spinner, animatedSpinnerStyles]} />
                                : '註冊'
                        }
                    </AnimatedButton>
                </VStack>
            </Box>
        </Center>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        color: "white",
        backgroundColor: 'black',
        textAlign: 'center',
        paddingVertical: 10,
        width: '100%',
        borderRadius: 200,
    },
    spinner: {
        height: 20,
        width: 20,
        borderRadius: 30,
        borderWidth: 4,
        borderTopColor: '#f5f5f5',
        borderRightColor: '#f5f5f5',
        borderBottomColor: 'lightblue',
        borderLeftColor: 'lightblue',
    },
})

export default RegisterScreen;
