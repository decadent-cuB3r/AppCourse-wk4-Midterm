import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeStack from './navigation/index'

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeStack />
    </SafeAreaProvider>
  );
}

