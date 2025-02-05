import { Image, StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
	const [count, setCount] = useState(0);

	const DATA = [
		{ id: '1', title: 'Item1' },
		{ id: '2', title: 'Item2' },
		{ id: '3', title: 'Item3' },
		{ id: '4', title: 'Item4' },
		{ id: '5', title: 'Item5' }
	];

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={<Image source={require('@/assets/images/icon_carton.png')} style={styles.reactLogo} />}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title" style={styles.titleText}>
					Exercice 2
				</ThemedText>
			</ThemedView>

			<View style={styles.view}>
				<Text>Compteur : {count}</Text>
			</View>
			<View style={styles.view}>
				<Button title="+ 1" onPress={() => setCount(count + 1)} />
				<Button title="+ 2" onPress={() => setCount(count + 2)} />
				<Button title="Reset" onPress={() => setCount(0)} />
			</View>

			<FlatList
				contentContainerStyle={styles.flatlist}
				data={DATA}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Text>{item.title}</Text>}
			/>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute'
	},
	titleText: {
		display: 'flex',
		fontSize: 32
	},
	view: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	flatlist: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
