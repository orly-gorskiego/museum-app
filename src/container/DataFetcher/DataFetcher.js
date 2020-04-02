import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { API_KEY } from 'react-native-dotenv'

const DataFetcher = () => {
  console.log(API_KEY)
  const [data, setData] = useState({})

  return (
    <View>
      <Text>Data</Text>
    </View>
  )
}

export default DataFetcher
