import { Image, StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
	const [count, setcount] = useState(0);

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title" style={styles.titleText}>
					useState
				</ThemedText>
			</ThemedView>

			<View style={styles.view}>
				<Text>Compteur : {count}</Text>
			</View>
			<View style={styles.view}>
				<Button title="Incrémenter" onPress={() => setcount(count + 1)} />
				<Button title="Décrémenter" onPress={() => setcount(count - 1)} />
				<Button title="Reset" onPress={() => setcount(0)} />
			</View>
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
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
