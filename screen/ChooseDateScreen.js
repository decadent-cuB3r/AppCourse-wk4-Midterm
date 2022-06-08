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
    Box
} from "native-base";
import { StyleSheet } from "react-native";
import React, { useState } from 'react'
import DatePicker from 'react-native-datepicker';

const ChooseDateScreen = ({ route, navigation }) => {
    const {
        brand,
        model,
        image,
        grade,
        rating,
        basicPrice
    } = route.params;

    const Star = require("../assets/Star.png");
    let [service, setService] = React.useState("");

    const [date, setDate] = useState('09-10-2020');
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
                <VStack w="95%" marginLeft="3%">
                    <Text bold fontSize="xs" color="#707070">
                        取車日期
                    </Text>
                    <Text bold fontSize="xs" color="#707070">
                        還車日期
                    </Text>
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
                            <Text bold>TWD</Text>
                            <Text bold color="#F9595F">300</Text>
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
                            <Text bold color="#F9595F">{basicPrice}</Text>
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
                        <Text bold>第1至50公里: TWD 10/公里</Text>
                    </VStack>
                   
                    <DatePicker
                        style={styles.datePickerStyle}
                        date={date} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-01-2016"
                        maxDate="01-01-2019"
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
                        }}
                        onDateChange={(date) => {
                            setDate(date);
                        }}
                    />
                    <VStack>

                        <Button
                            marginBottom={3}
                            colorScheme="red"
                            onPress={""} >
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
});

export default ChooseDateScreen;
