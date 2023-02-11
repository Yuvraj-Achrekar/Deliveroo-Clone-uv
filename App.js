import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import SafeViewAndroid from "./SafeViewAndroid";
import RestaurentScreen from "./screens/RestaurentScreen";
import { Provider } from "react-redux";
import store from "./store";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Restaurent" component={RestaurentScreen} />
					<Stack.Screen
						name="Basket"
						component={BasketScreen}
						options={{ presentation: "modal", headerShown: false }}
					/>
					<Stack.Screen
						name="PreparingOrderScreen"
						component={PreparingOrderScreen}
						options={{ presentation: "fullScreenModal", headerShown: false }}
					/>
					<Stack.Screen
						name="DeliveryScreen"
						component={DeliveryScreen}
						options={{ presentation: "fullScreenModal", headerShown: false }}
					/>
				</Stack.Navigator>
			</Provider>
		</NavigationContainer>
	);
}
