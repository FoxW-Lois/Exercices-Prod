import { Button, Image, StyleSheet, TextInput, View, Text } from 'react-native';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AuthScreen() {
	const auth = getAuth(app);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState('');

	const signUp = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const email = userCredential.user.email ?? 'Email inconnu';
				setUser(email);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	const signIn = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const email = userCredential.user.email ?? 'Email inconnu';
				setUser(email);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	const logout = () => {
		setUser('');
	};

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Stockage Firebase</ThemedText>
			</ThemedView>

			<View style={styles.view}>
				<TextInput
					placeholder="Entrer un email"
					value={email}
					onChangeText={setEmail}
					style={styles.textinput}
				/>
				<TextInput
					placeholder="Entrer un mot de passe"
					secureTextEntry
					value={password}
					onChangeText={setPassword}
					style={styles.textinput}
				/>
				<Button title="Inscription" onPress={signUp} />
				<Button title="Connexion" onPress={signIn} />
				<Button title="Deconnexion" onPress={logout} />
				{user ? (
					<Text style={styles.textinput}>Utilisateur connecté : {user}</Text>
				) : (
					<Text style={styles.textinput}>Aucun utilisateur connecté</Text>
				)}
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
