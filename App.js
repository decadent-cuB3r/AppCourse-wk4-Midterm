import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './navigation/DrawerNavigator';


export default function App() {
  return (
    <SafeAreaProvider>
        <Navigation />
    </SafeAreaProvider>
  );
}
