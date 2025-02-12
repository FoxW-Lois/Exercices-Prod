import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBK_6XYb4t_RLOgsvjEIgSNd55ZUK-KbW8',
	authDomain: 'exercice7-stockagefirebase.firebaseapp.com',
	projectId: 'exercice7-stockagefirebase',
	storageBucket: 'exercice7-stockagefirebase.firebasestorage.app',
	messagingSenderId: '924594221374',
	appId: '1:924594221374:web:7c6f07e54c0ed43d03fc6f',
	measurementId: 'G-3BCGVG96GR'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
