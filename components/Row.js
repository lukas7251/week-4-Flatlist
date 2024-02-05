import { Text } from 'react-native'
	
export default function Row({fruit}) {
	return (
    <Text>
      {fruit.index}. {fruit.name}
    </Text>
	)
}