import { Button, Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Camera from 'expo-camera';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { CameraView } from 'expo-camera';

export default function FlashlightScreen() {
	const [facing, setFacing] = useState<Camera.CameraType>('back');
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [flashEnabled, setFlashEnabled] = useState(false);

	if (!permission) {
		// Camera permissions are still loading.
		return <View />;
	}

	if (!permission.granted) {
		// Camera permissions are not granted yet.
		return (
			<View style={styles.container}>
				<Text style={styles.message}>Besoin de la permission d'utiliser la caméra</Text>
				<Button onPress={requestPermission} title="grant permission" />
			</View>
		);
	}

	// Permet de changer entre la caméra face avant et face arrière
	// function toggleCameraFacing() {
	// 	setFacing((current) => (current === 'back' ? 'front' : 'back'));
	// }

	function flashLight() {
		setFlashEnabled(!flashEnabled);
	}

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}
		>
			<ThemedView style={styles.container}>
				<ThemedText type="title">Lampe torche</ThemedText>
			</ThemedView>

			<View style={styles.container}>
				<CameraView style={styles.camera} facing={facing} enableTorch={flashEnabled}>
					<View style={styles.buttonContainer}>
						{/* Permet de changer entre la caméra face avant et face arrière */}
						{/* <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
							<Text style={styles.text}>Flip Camera</Text>
						</TouchableOpacity> */}
						<TouchableOpacity style={styles.button} onPress={flashLight}>
							<Text style={styles.text}>Flash</Text>
						</TouchableOpacity>
					</View>
				</CameraView>
				{flashEnabled && (
					<View style={styles.image}>
						<Image source={require('@/assets/images/icon-torche.png')} />
					</View>
				)}
			</View>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute'
	},
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	message: {
		textAlign: 'center',
		paddingBottom: 10
	},
	camera: {
		flex: 1
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'transparent',
		margin: 64
	},
	button: {
		flex: 1,
		alignSelf: 'flex-end',
		alignItems: 'center'
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white'
	},
	image: {
		opacity: 0.5,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
