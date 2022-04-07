import { Text, StyleSheet, View } from "react-native";
import HondaBikes from '../json/honda.json';
import YamahaBikes from '../json/yamaha.json';

const BrandScreen = ({ route }) => {
    let getJson = (route) => {
        switch(route.params.brand){
            case Honda:
                return(HondaBikes);
                break;
            case Yamaha:
                return(YamahaBikes);
                break;
            default:
                return(null);
        }
    } 
    return(
        <Text>{getJson.nakedBikes}</Text>
    )
};

export default BrandScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });