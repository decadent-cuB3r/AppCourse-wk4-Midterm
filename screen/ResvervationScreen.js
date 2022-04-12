import SegmentedControlTab from "react-native-segmented-control-tab";
import { Center, useColorMode } from 'native-base';
import { useState } from "react";

//theme implements
import { useTheme } from "@react-navigation/native";

//import screens for segmented control
import CanceledOrderScreen from "./CanceledOrderScreen";
import FinishedOrderScreen from "./FinishedOrderScreen";
import MyOrdersScreen from "./MyOrdersScreen";

const ReservationScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const colorMode = useColorMode();
    const { colors } = useTheme();

    const SegmentedContent = () => {
        switch (selectedIndex) {
            case 0:
                return <MyOrdersScreen />
                break;
            case 1:
                return <FinishedOrderScreen />
                break;
            case 2:
                return <CanceledOrderScreen />
                break;
            default:
                return <MyOrdersScreen />
        }
    };

    return (
        <Center>
            <SegmentedControlTab
                values={["已下訂", "完成", "已取消"]}
                tabStyle={{
                    marginTop: 10, borderColor: colorMode == "light" ? colors.primary700 : colors.primary700,
                    borderWidth: 2,
                    backgroundColor: null,
                    height: 32
                }}
                firstTabStyle={{ marginLeft: 20 }}
                lastTabStyle={{ marginRight: 20 }}
                tabTextStyle={{ fontSize: 16, color: colorMode == "light" ? colors.primary700 : colors.primary700, }}
                activeTabStyle={{ backgroundColor: colorMode == "light" ? colors.primary700 : colors.primary700 }}
                activeTabTextStyle={{ color: "white" }}
                selectedIndex={selectedIndex}
                onTabPress={(index) => setSelectedIndex(index)}
            />
            <SegmentedContent />
        </Center >
    );
};

export default ReservationScreen;