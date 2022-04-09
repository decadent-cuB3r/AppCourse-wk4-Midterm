import SegmentedControlTab from "react-native-segmented-control-tab";
import { Text, Box, Center } from 'native-base';
import { useState } from "react";

const ReservationScreen = () => {
    const [state, setState] = useState(0);

    return (
        <Center>
            <SegmentedControlTab
                values={["First", "Second", "Third"]}
            />
            < Text > Reservation Screen</Text>
        </Center >
    );
};

export default ReservationScreen;