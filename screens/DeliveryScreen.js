import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurent } from "../features/restaurentSlice";
import SafeViewAndroid from "../SafeViewAndroid";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
	const navigation = useNavigation();
	const restaurent = useSelector(selectRestaurent);

	return (
		<View className="bg-[#00CCBB] flex-1">
			<SafeAreaView style={SafeViewAndroid.AndroidSafeArea} className="z-50">
				<View className="flex-row justify-between items-center p-5">
					<TouchableOpacity onPress={() => navigation.navigate("Home")}>
						<XMarkIcon size={30} color="white" />
					</TouchableOpacity>
					<Text className="text-white font-light text-lg ">Order help</Text>
				</View>

				<View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
					<View className="flex-row justify-between">
						<View>
							<Text className="text-gray-400 text-lg">Estimated Arrivel</Text>
							<Text className="text-4xl font-bold">45-55 Minutes</Text>
						</View>
						<Image
							source={{
								uri: "https://links.papareact.com/fls",
							}}
							className="h-20 w-20"
						/>
					</View>
					<Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
					<Text className="text-gray-500 mt-3">
						Your Order at {restaurent.title} is being prepared{" "}
					</Text>
				</View>
			</SafeAreaView>
			<MapView
				initialRegion={{
					latitude: restaurent.lat,
					longitude: restaurent.long,
					latitudeDelta: 0.005,
					longitudeDelta: 0.005,
				}}
				className="flex-1 -mt-10 z-0"
				mapType="mutedStandard">
				<Marker
					coordinate={{
						latitude: restaurent.lat,
						longitude: restaurent.long,
					}}
					title={restaurent.title}
					description={restaurent.short_description}
					identifier="origin"
					pinColor="red"
				/>
			</MapView>
			<SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
				<Image
					source={{
						uri: "https://links.papareact.com/wru",
					}}
					className="bg-gray-300 h-12 w-12 p-4 rounded-full ml-5"
				/>
				<View className="flex-1">
					<Text className="text-lg">Yuvraj Achrekar</Text>
					<Text className="text-gray-400">Your Rider</Text>
				</View>
				<Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call </Text>
			</SafeAreaView>
		</View>
	);
};

export default DeliveryScreen;
