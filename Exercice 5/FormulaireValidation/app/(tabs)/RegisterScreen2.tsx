import { Image, StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
				initialValues={{ name: '', email: '', password: '', confirmpassword: '' }}
				validationSchema={Yup.object({
					name: Yup.string().required('Nom requis'),
					email: Yup.string().email('Email invalide').required('Email requis'),
					password: Yup.string().min(6, '6 caractères minimum').required('Mot de passe requis'),
					confirmpassword: Yup.string()
						.min(6, '6 caractères minimum')
						.required('Mot de passe de confirmation requis')
				})}
				onSubmit={(values) => console.log(values)}
				validate={(values) => {
					const errors = {} as any;
					if (values.password !== values.confirmpassword) {
						errors.confirmpassword = 'Les mots de passe ne correspondent pas';
					}
					return errors;
				}}
			>
				{({ handleChange, handleSubmit, values, errors }) => (
					<View style={styles.view}>
						<Text>Entrer le nom :</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Nom"
							value={values.name}
							onChangeText={handleChange('name')}
						/>
						{errors.name ? <Text style={styles.errortext}>{errors.name}</Text> : null}

						<Text>Entrer l'email :</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Email"
							value={values.email}
							onChangeText={handleChange('email')}
						/>
						{errors.email ? <Text style={styles.errortext}>{errors.email}</Text> : null}

						<Text>Entrer le mot de passe :</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Mot de passe"
							value={values.password}
							onChangeText={handleChange('password')}
						/>
						{errors.password ? <Text style={styles.errortext}>{errors.password}</Text> : null}

						<Text>Confirmer le mot de passe :</Text>
						<TextInput
							style={styles.textinput}
							placeholder="Confirmer le Mot de passe"
							value={values.confirmpassword}
							onChangeText={handleChange('confirmpassword')}
						/>
						{errors.confirmpassword ? <Text style={styles.errortext}>{errors.confirmpassword}</Text> : null}

						<Button title="Valider" onPress={() => handleSubmit()} />
					</View>
				)}
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
