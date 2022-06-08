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
} from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from 'react'
import DatePicker from 'react-native-datepicker';
import CheckBox from "expo-checkbox";

const ChooseDateScreen = ({ route,navigation }) => {
    const {
        brand,
        model,
        image,
        grade,
        rating,
        basicPrice,
        service
    } = route.params;
    const Star = require("../assets/Star.png");
    

    const [date, setDate] = useState('10-06-2022');
    const [date2, setDate2] = useState('10-06-2022');
    const [agree, setAgree] = useState(false);
    const [agree2, setAgree2] = useState(false);
    const [btn, setbtn] = useState(false);
    const total = btn ? basicPrice:
    parseInt(basicPrice) + 300 ;

    const CheckAndPay = () => {
        if (agree==false||agree2==false) {
          alert("請閱讀並勾選同意相關規定");
    
        }else if(date2<date) {
            alert("還車日期不得小於租車日期");
        }
        else {
          navigation.navigate('PaymentScreen', {date: date ,date2: date2, total: total});
        }
      };
    return (
        <Center>
            <ScrollView
                width="90%"
                showsVerticalScrollIndicator={false}
            >
                <VStack marginTop={2}>
                    <HStack justifyContent="space-between">
                        <Text bold fontSize="md" color="#989898">
                            {brand}
                        </Text>
                        <HStack>
                            <Image source={Star} alt="star" marginTop={1.5} marginRight={1} />
                            <Text bold fontSize="md">
                                {rating}
                            </Text>
                        </HStack>
                    </HStack>
                    <HStack justifyContent="space-between">
                        <Text bold fontSize="xl">
                            {model}
                        </Text>
                        <Text bold fontSize="md" marginTop={1}>
                            {grade}
                        </Text>
                    </HStack>
                </VStack>
                <AspectRatio w="300">
                    <Image
                        source={{ uri: image }}
                        width="330"
                        marginLeft={2}
                        alt="Picture of bike"
                    />
                </AspectRatio>
                <VStack w="95%" marginLeft="3%" >
                    <HStack justifyContent="space-between"
                        borderBottomWidth={1}
                        borderBottomColor="#707070"
                        paddingBottom="2"
                        marginBottom={2}>
                        <VStack>
                            <Text bold fontSize="xs" color="#707070">
                                取車日期(DD/MM/YYYY)
                            </Text>
                            <DatePicker
                                style={styles.datePickerStyle}
                                date={date} //initial date from state
                                mode="date" //The enum of date, datetime and time
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate="10-06-2022"
                                maxDate="20-06-2022"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        //display: 'none',
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0,
                                    },
                                    dateInput: {
                                        marginLeft: 36,
                                    },
                                    dateText: {
                                        color: "#F9595F"
                                    },
                                }}
                                onDateChange={(date) => {
                                    setDate(date);
                                }}
                            />
                        </VStack>
                        <VStack>
                            <Text bold fontSize="xs" color="#707070">
                                還車日期(DD/MM/YYYY)
                            </Text>
                            <DatePicker
                                style={styles.datePickerStyle}
                                date={date2} //initial date from state
                                mode="date" //The enum of date, datetime and time
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate="10-06-2022"
                                maxDate="20-06-2022"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        //display: 'none',
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0,
                                    },
                                    dateInput: {
                                        marginLeft: 36,
                                    },
                                    dateText: {
                                        color: "#F9595F"
                                    },
                                }}
                                onDateChange={(date2) => {
                                    setDate2(date2);
                                }}

                            />
                        </VStack>
                    </HStack>
                    <Text bold fontSize="xs" color="#707070">
                        費用計算
                    </Text>
                    <HStack
                        justifyContent="space-between"
                    >
                        <Text bold fontSize="sm">
                            基本金額
                        </Text>
                        <HStack>
                            <Text bold>TWD</Text>
                            <Text bold color="#F9595F">{basicPrice}</Text>
                        </HStack>
                    </HStack>
                    <HStack
                        justifyContent="space-between"
                        borderBottomWidth={1}
                        borderBottomColor="#707070"
                        paddingBottom="1"
                        marginBottom={1}
                    >
                        <Text bold fontSize="sm">
                            安心方案
                        </Text>
                        <HStack>
                            <Text bold>+TWD</Text>
                            <Text bold color="#F9595F">300</Text>
                            <TouchableOpacity onPress={() => setbtn(!btn)}>
                                {
                                    btn ? <Text style={styles.btn}>加購</Text> :
                                        <Text style={styles.btn2}>已加購</Text>
                                }
                            </TouchableOpacity>
                        </HStack>
                    </HStack>
                    <HStack
                        justifyContent="space-between"
                    >
                        <Text bold fontSize="sm">
                            總計
                        </Text>
                        <HStack>
                            <Text bold>TWD</Text>
                            <Text bold color="#F9595F">{
                                total 
                            }</Text>
                        </HStack>
                    </HStack>
                    <VStack
                        justifyContent="space-between"
                        borderBottomWidth={1}
                        borderBottomColor="#707070"
                        paddingBottom="2"
                        marginBottom={2}
                    >
                        <Text bold fontSize="xs" color="#707070">
                            里程費用
                        </Text>
                        <Text bold>第1至50公里: TWD 10/公里</Text>
                        <Text bold>第51至150公里: TWD 8/公里</Text>
                        <Text bold>第151公里以上: TWD 6/公里</Text>
                    </VStack>
                    <VStack
                        justifyContent="space-between"
                        borderBottomWidth={1}
                        borderBottomColor="#707070"
                        paddingBottom="2"
                        marginBottom={2}
                    >
                        <Text bold fontSize="xs" color="#707070">
                            取車地點
                        </Text>
                        <Text bold>{service}</Text>
                    </VStack>
                    <HStack>
                        <CheckBox
                            value={agree}
                            onValueChange={() => setAgree(!agree)}
                            color={agree ? "#F9595F" : undefined}
                            marginBottom={10}
                        />
                        <Text style={styles.agreetext}>
                            我已閱讀並同意<Text style={styles.redtext} bold>租賃相關規定</Text>
                        </Text>

                    </HStack>
                    <HStack>
                        <CheckBox
                            value={agree2}
                            onValueChange={() => setAgree2(!agree2)}
                            color={agree2 ? "#F9595F" : undefined}
                            marginBottom={10}
                        />
                        <Text style={styles.agreetext}>
                            未滿20歲者租車需<Text style={styles.redtext} bold>監護人同意書</Text>
                        </Text>

                    </HStack>
                    <VStack>
                        <Button
                            marginBottom={3}
                            backgroundColor='#F9595F'
                            onPress={CheckAndPay} >
                            前往付款
                        </Button>
                    </VStack>
                </VStack>
            </ScrollView>
        </Center>
    );
};



const styles = StyleSheet.create({
    boxWrapper: {
        alignItems: "center",
        width: "95%",
        height: 170,
        backgroundColor: "#fff",
        borderRadius: 20,
        marginLeft: "3%",
        marginTop: 10,
        marginBottom: 10,
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    },
    agreetext: {
        marginLeft: 5,
        fontSize: 14
    },
    redtext: {
        color: "#F9595F"

    },
    datePickerStyle: {
        color: "#F9595F",
    },
    btn: {
        color: "#8E8E8E",
        borderWidth: 1,
        fontSize: 12,
        paddingRight: 2,
        paddingLeft: 2,
        marginLeft: 5,
        borderColor: "#8E8E8E"
    },
    btn2: {
        color: "#F9595F",
        borderWidth: 1,
        fontSize: 12,
        paddingRight: 2,
        paddingLeft: 2,
        marginLeft: 5,
        borderColor: "#F9595F"
    }
});

export default ChooseDateScreen;
