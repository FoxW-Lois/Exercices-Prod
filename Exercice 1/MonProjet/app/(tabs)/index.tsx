import { View, Text, StyleSheet, Image } from 'react-native';
export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Bienvenue sur mon app React Native ! 🎉</Text>
			<Text style={styles.subtitle}>Première modification réussie ✅</Text>
			<Image source={require('../../assets/images/icon_carton.png')} style={styles.image} />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3C3C3C'
	},
	image: {
		width: 100,
		height: 100,
		marginBottom: 20
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#007bff',
		textAlign: 'center'
	},
	subtitle: {
		fontSize: 18,
		color: '#7E80E7',
		marginTop: 10
	}
});
