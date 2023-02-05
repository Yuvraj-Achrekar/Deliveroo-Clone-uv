import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import SafeViewAndroid from "./SafeViewAndroid";
import RestaurentScreen from "./screens/RestaurentScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<View style={SafeViewAndroid.AndroidSafeArea}>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Restaurent" component={RestaurentScreen} />
				</Stack.Navigator>
			</View>
		</NavigationContainer>
	);
}
