import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NewPostScreen from './screens/NewPostScreen';
import SignedInStack from './Navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <NewPostScreen/> */}
      <SignedInStack/>
    </SafeAreaProvider>
  )
}

export default App
