import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import Navigation from './navigation/MyDrawers';

//import store
import { Store } from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={Store}>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </Provider>
  );
}
