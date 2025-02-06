import {
	Image,
	StyleSheet,
	Text,
	View,
	TextInput,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
	Button
} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function RegisterScreen() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorName, setErrorName] = useState('');
	const [errorEmail, setErrorEmail] = useState('');
	const [errorPassword, setErrorPassword] = useState('');
	const [msgValid, setMsgValid] = useState('');

	const nameNotNull = () => {
		if (name === '') {
			setErrorName('Nom requis');
		} else {
			setErrorName('');
		}
	};

	const validateEmail = () => {
		if (!email.includes('@')) {
			setErrorEmail('Email invalide');
		} else {
			setErrorEmail('');
		}
	};

	const validatePassword = () => {
		if (password.length < 6) {
			setErrorPassword('Mot de passe trop court');
		} else {
			setErrorPassword('');
		}
	};

	const handleSubmit = () => {
		if (name !== '' && email.includes('@') && password.length >= 6) {
			setMsgValid('Toutes les données sont valides : ' + name + ' - ' + email + ' - ' + password);
			alert(msgValid);
		} else {
			setMsgValid('');
		}
	};

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Register</ThemedText>
			</ThemedView>

			<View style={styles.view}>
				<Text>Entrer le nom :</Text>
				<KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
					<TextInput
						style={styles.textinput}
						placeholder="Nom"
						value={name}
						onChangeText={setName}
						onBlur={nameNotNull}
					/>
				</KeyboardAvoidingView>
				{errorName ? <Text style={styles.textinput}>{errorName}</Text> : null}
			</View>

			<View style={styles.view}>
				<Text>Entrer l'email :</Text>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<TextInput
						style={styles.textinput}
						placeholder="Email"
						value={email}
						onChangeText={setEmail}
						onBlur={validateEmail}
					/>
				</TouchableWithoutFeedback>
				{errorEmail ? <Text style={styles.errortext}>{errorEmail}</Text> : null}
			</View>

			<View style={styles.view}>
				<Text>Entrer le mot de passe :</Text>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<TextInput
						style={styles.textinput}
						placeholder="Mot de passe"
						value={password}
						onChangeText={setPassword}
						onBlur={validatePassword}
					/>
				</TouchableWithoutFeedback>
				{errorPassword ? <Text style={styles.errortext}>{errorPassword}</Text> : null}
			</View>

			<View style={styles.view}>
				<Button
					title="Valider"
					onPress={handleSubmit}
					disabled={name === '' || !email.includes('@') || password.length < 6}
				/>
				{/* {msgValid ? <Text style={styles.errortext}>{msgValid}</Text> : null} */}
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
