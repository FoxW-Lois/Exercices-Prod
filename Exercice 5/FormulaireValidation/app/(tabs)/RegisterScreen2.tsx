import {
	Image,
	StyleSheet,
	Text,
	View,
	TextInput,
	Button
} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Formik } from 'formik';
import Yup from 'yup';

export default function RegisterScreen2() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Register</ThemedText>
			</ThemedView>

			<Formik
				initialValues={{ name: '', email: '', password: '' }}
				validationSchema={Yup.object({
					name: Yup.string().required('Nom requis'),
					email: Yup.string().email('Email invalide').required('Email requis'),
					password: Yup.string().min(6, '6 caractères minimum').required('Mot de passe requis')
				})}
				onSubmit={(values) => console.log(values)}
			>
				{({ handleChange, handleSubmit, values, errors }) => (
					<View style={styles.view}>
						<Text>Entrer le nom :</Text>
						<TextInput
							style={styles.textinput}
							value={values.name}
							onChangeText={handleChange('name')}
						/>
						{errors.name ? <Text style={styles.errortext}>{errors.name}</Text> : null}

						<Text>Entrer l'email :</Text>
						<TextInput
							style={styles.textinput}
							value={values.email}
							onChangeText={handleChange('email')}
						/>
						{errors.email ? <Text style={styles.errortext}>{errors.email}</Text> : null}

						<Text>Entrer le mot de passe :</Text>
						<TextInput
							style={styles.textinput}
							value={values.password}
							onChangeText={handleChange('password')}
						/>
						{errors.password ? <Text style={styles.errortext}>{errors.password}</Text> : null}

						<Button title="Valider" onPress={() => handleSubmit()} />
					</View>
				)
				}
			</Formik>
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
