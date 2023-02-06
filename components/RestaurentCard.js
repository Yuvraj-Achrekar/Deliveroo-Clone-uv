import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurentCard = ({
	id,
	imgUrl,
	title,
	rating,
	genre,
	address,
	short_description,
	dishes,
	long,
	lat,
}) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate("Restaurent", {
					id,
					imgUrl,
					title,
					rating,
					genre,
					address,
					short_description,
					dishes,
					long,
					lat,
				});
			}}
			className="bg-white mr-3 shadow">
			<Image source={{ uri: urlFor(imgUrl).url() }} className="h-36 w-64" />
			<View className="px-3 pb-4">
				<Text className="font-bold text-lg pt-2">{title}</Text>
				<View className="flex-row">
					<StarIcon color="green" opacity={0.5} size={22} />
					<Text className="text-gray-500 text-xs pt-1">
						<Text className="text-green-500">{rating}</Text> • {genre}
					</Text>
				</View>
				<View className="flex-row items-center space-x-1 ">
					<MapPinIcon color="gray" opacity={0.5} size={22} />
					<Text className="text-xs text-gray-500 ">Nearby • {address}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default RestaurentCard;
