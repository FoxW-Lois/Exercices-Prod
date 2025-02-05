import 'react-native-gesture-handler';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen2 from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type TypeList = {
	Home: undefined;
	Details: undefined;
	Profile: { id: number };
};

const Stack = createStackNavigator<TypeList>();

export default function HomeScreen() {
	return (
		<NavigationIndependentTree>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={HomeScreen2}
						options={{ title: 'Appli', headerStyle: { backgroundColor: 'blue' }, headerTintColor: 'white' }}
					/>
					<Stack.Screen
						name="Details"
						component={DetailsScreen}
						options={{ title: 'Appli', headerStyle: { backgroundColor: 'blue' }, headerTintColor: 'white' }}
					/>
					<Stack.Screen
						name="Profile"
						component={ProfileScreen}
						options={{ title: 'Appli', headerStyle: { backgroundColor: 'blue' }, headerTintColor: 'white' }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</NavigationIndependentTree>
	);
}
