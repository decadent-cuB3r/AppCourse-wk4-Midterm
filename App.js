import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './screen/home';
import BrandList from './assets/components/brandList';
import { FlatList } from 'react-native-web';
import Brands from "./assets/json/Brands.json"

export default function App() {
  return (
    <Home />
  );
}

