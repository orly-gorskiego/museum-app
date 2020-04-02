import React from 'react'
import { View } from 'react-native'
import DataFetcher from './src/container/DataFetcher/DataFetcher';

const App = () => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <DataFetcher />
  </View>
)

export default App
