import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider, MD3DarkTheme} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './src/navigators/Navigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={MD3DarkTheme}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
