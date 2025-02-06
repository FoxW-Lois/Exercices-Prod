import { Image, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function FileScreen() {
	const [content, setContent] = useState('');
	const [text, setText] = useState('');

	const saveFile = async () => {
		const path = FileSystem.documentDirectory + 'test.txt';
		await FileSystem.writeAsStringAsync(path, text, { encoding: FileSystem.EncodingType.UTF8 });
	};

	const readFile = async () => {
		const path = FileSystem.documentDirectory + 'test.txt';
		const fileContent = await FileSystem.readAsStringAsync(path, { encoding: FileSystem.EncodingType.UTF8 });
		setContent(fileContent);
	};

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Gestion de fichiers</ThemedText>
			</ThemedView>

			<View style={styles.view}>
				<Text>Entrer un texte :</Text>
				<TextInput style={styles.textinput} placeholder="Texte à rentrer" value={text} onChangeText={setText} />
			</View>

			<View style={styles.view}>
				<Button title="Sauvegarder" onPress={saveFile} />
				<Button title="Lire" onPress={readFile} />
				<Text>Contenu : {content}</Text>
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
