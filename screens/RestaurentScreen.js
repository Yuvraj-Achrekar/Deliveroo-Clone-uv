import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	TouchableOpacity,
} from "react-native";

import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { ArrowLeftIcon, StarIcon } from "react-native-heroicons/solid";
import {
	ChevronRightIcon,
	MapIcon,
	MapPinIcon,
	QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";

export default function RestaurentScreen() {
	const navigation = useNavigation();
	const {
		params: {
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
		},
	} = useRoute();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
	return (
		<ScrollView>
			<View className="relative bg-white">
				<Image
					source={{
						uri: urlFor(imgUrl).url(),
					}}
					className="w-full h-56 bg-gray-500 p-4"
				/>
				<TouchableOpacity
					onPress={navigation.goBack}
					className="absolute left-5 top-14 bg-gray-100 rounded-full p-2 ">
					<ArrowLeftIcon size={20} color="#00CCBB" />
				</TouchableOpacity>
				<View>
					<View className="px-4 pt-4">
						<Text className="text-3xl font-bold">{title}</Text>
						<View className="flex-row space-x-2 my-1">
							<View className="flex-row space-x-2 items-center">
								<StarIcon size={20} opacity={0.5} color="green" />
								<Text className="text-gray-500 text-xs">
									<Text className="text-green-500">{rating}</Text> • {genre}
								</Text>
							</View>
							<View className="flex-row space-x-2 items-center">
								<MapPinIcon size={20} color="gray" />
								<Text className="text-xs text-gray-500">
									Nearby • {address}
								</Text>
							</View>
						</View>

						<Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
					</View>
				</View>
				<TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
					<QuestionMarkCircleIcon size={20} opacity={0.5} color="gray" />
					<Text className="flex-1 font-bold text-base pl-2  ">
						Have a food alergy?
					</Text>
					<ChevronRightIcon size={20} color="#00CCBB" />
				</TouchableOpacity>
			</View>
			<View>
				<Text className="font-bold text-xl px-4 pt-6 mb-3">Menu</Text>
				{/* Dish Row */}
				{dishes.map((dish) => (
					<DishRow
						key={dish._id}
						id={dish._id}
						name={dishes.name}
						description={dishes.short_description}
						price={dishes.price}
						image={dishes.image}
					/>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({});
