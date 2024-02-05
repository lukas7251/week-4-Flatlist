import React, {useState} from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

export default function Search({executeSearch}) {

	const [search, setSearch] = useState('')

	return(
		<View style = {styles.searchBox}>
			<TextInput
			value={search}
			onChangeText={text => setSearch(text)}
			placeholder='Search...'
			returnKeyType='search'
			onSubmitEditing={() => executeSearch(search)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	searchBox: {
		marginBottom: 20,
		borderRadius: 10,
		backgroundColor: '#f0f0f0',
		paddingHorizontal: 10,
	},
})