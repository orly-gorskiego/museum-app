import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>
      Museum App
    </Text>
    <Icon name="check" size={20} />
  </View>
)

export default App
