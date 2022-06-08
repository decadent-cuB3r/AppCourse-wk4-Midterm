import {
    Center,
    ScrollView,
    AspectRatio,
    Text,
    Image,
    HStack,
    VStack,
    Button,
    Select,
    FormControl,
    CheckIcon,
    Box,
    View
} from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from 'react'
import DatePicker from 'react-native-datepicker';
import CheckBox from "expo-checkbox";
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = [{
    id: 1, 
    label: 'Linepay',
    value: 'line',
    color: '#F9595F',
    selected: true
}, {
    id: 2,
    label: '信用卡',
    value: 'credit',
    color: '#F9595F',

}, {
    id: 3,
    label: 'Apple pay',
    value: 'apple',
    color: '#F9595F',
}]


const PaymentScreen = ({ route }) => {
    const {
        date,
        date2,
        total
    } = route.params;


    const CheckAndGo = () => {

    };

    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    function onPressRadioButton(radioButtonsArray) {
        console.log(radioButtonsArray)
        setRadioButtons(radioButtonsArray);
    }
    return (
        <Center>
            <View
                width="90%"
                showsVerticalScrollIndicator={false}
            >
                <VStack marginTop={4}>
                    <Text bold>付款方式選擇：</Text>
                    <View style={styles.paybox}>
                        <RadioGroup
                            radioButtons={radioButtons}
                            onPress={onPressRadioButton}
                            layout='row'
                        />
                    </View>
                </VStack>
                <HStack justifyContent="space-between" marginBottom={2}>
                    <Text bold>訂金付款金額：</Text>
                    <HStack>
                        <Text bold>TWD</Text>
                        <Text bold color="#F9595F">{total}</Text>
                    </HStack>
                </HStack>
                <HStack justifyContent="space-between"  marginBottom={2}>
                    <Text bold>租車開始日期(MM/DD/YYYY)：</Text>
                    <HStack>
                        <Text bold color="#F9595F">{date}</Text>
                    </HStack>
                </HStack>
                <HStack justifyContent="space-between" marginBottom={2}>
                    <Text bold>租車結束日期(MM/DD/YYYY)：</Text>
                    <HStack>
                        <Text bold color="#F9595F">{date2}</Text>
                    </HStack>
                </HStack>
                <VStack>
                    <Button
                        marginBottom={3}
                        backgroundColor='#F9595F'
                        onPress={CheckAndGo} >
                        確認
                    </Button>
                </VStack>
            </View>
        </Center>
    );
};



const styles = StyleSheet.create({
    paybox: {
        width: "100%",
        height: 35,
        backgroundColor: "#FFEEEE",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
    },
});

export default PaymentScreen;
