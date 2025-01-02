import React from 'react'
import { View } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';
import { RegisterScreen } from './src/Screens/RegisterScreen';

const App = () => {
  return (
    <PaperProvider>
      <RegisterScreen/>
    </PaperProvider>
  )
}

export default App;
