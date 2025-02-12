import { Button, Image, StyleSheet, TextInput, View, Text } from 'react-native';
import { useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StorageScreen() {
	const [name, setName] = useState('');
	const [savedName, setSavedName] = useState('');

	const saveData = async () => {
		await AsyncStorage.setItem('username', name);
	};

	const loadData = async () => {
		const storedName = await AsyncStorage.getItem('username');
		setSavedName(storedName || 'Aucun nom enregistré');
	};

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Stockage Local</ThemedText>
			</ThemedView>

			<View style={styles.view}>
				<TextInput placeholder="Entrer un nom" value={name} onChangeText={setName} style={styles.textinput} />
				<Button title="Enregistrer" onPress={saveData} />
				<Button title="Charger" onPress={loadData} />
				<Text>Nom sauvegardé : {savedName}</Text>
			</View>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
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
	view: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textinput: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	errortext: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'red'
	}
});
