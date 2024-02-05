import React, {useEffect, useState} from 'react'
import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native'
import { DATA } from './Data'
import Row from './components/Row.js'
import Search from './components/Search.js'

export default function App() {

	const [items, setItems] = useState([])

	useEffect(() => {
		setItems(DATA)
	}, [])
	const executeSearch = (search) => {
		const searchArray = DATA.filter((item) => item.name.startsWith(search) || item.index.toString().startsWith(search))
		setItems(searchArray)
	}

  return (
    <SafeAreaView style={styles.container}>
			<Search executeSearch={executeSearch}/>
      <FlatList
        data={items}
        renderItem = {({ item }) => (
					<View style={styles.item}>
						<Row fruit={item} />
					</View>
				)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '50%',
  },
  item: {
    backgroundColor: '#dff2ff',
    marginBottom: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
})
 