import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SafeViewAndroid from "../SafeViewAndroid";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
	const navigation = useNavigation();

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate("DeliveryScreen");
		}, 4000);
	});

	return (
		<SafeAreaView
			className="bg-[#00CCBB] flex-1 justify-center items-center"
			style={SafeViewAndroid.AndroidSafeArea}>
			<Animatable.Image
				source={require("../assets/orderLoading.gif")}
				className="h-96 w-96"
				animation="slideInUp"
				iterationCount={1}
			/>
			<Animatable.Text
				animation="slideInUp"
				iterationCount={1}
				className="text-white text-lg text-center font-bold my-10">
				Waiting for Restaurent to accept your order!
			</Animatable.Text>

			<Progress.Circle size={60} indeterminate={true} color="white" />
		</SafeAreaView>
	);
};

export default PreparingOrderScreen;
