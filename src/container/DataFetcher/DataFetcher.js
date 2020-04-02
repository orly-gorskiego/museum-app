import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import sendRequest from '@api/client'

const Item = ({ name }) => (
  <View style={{
    padding: 10, borderWidth: 1, borderColor: 'tomato', backgroundColor: 'pink',
  }}
  >
    <Text>{name}</Text>
  </View>
)

const DataFetcher = () => {
  const [galleries, setGalleries] = useState([])

  const fetchData = async () => {
    const data = await sendRequest('GET', 'gallery')
    const formattedData = await data.json()
    const { records } = formattedData
    setGalleries(records)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View>
      <FlatList
        data={galleries}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        renderItem={({ item }) => <Item {...item} />}
      />
    </View>
  )
}

export default DataFetcher
