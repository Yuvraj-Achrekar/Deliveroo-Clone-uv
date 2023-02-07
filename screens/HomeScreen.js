import {
	SafeAreaView,
	Text,
	View,
	StyleSheet,
	Image,
	TextInput,
	ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	AdjustmentsVerticalIcon,
	ChevronDownIcon,
	MagnifyingGlassIcon,
	UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import SafeViewAndroid from "../SafeViewAndroid";

export default function HomeScreen() {
	const navigation = useNavigation();
	const [featuredCategories, setFeaturedCategories] = useState([]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'featured']{
			...,
			restaurents[]->{
			  ...,
			  dishes[]->,
				}
		  }`
			)
			.then((data) => {
				setFeaturedCategories(data);
			});
	}, []);

	return (
		<SafeAreaView
			style={SafeViewAndroid.AndroidSafeArea}
			className="bg-white pt-5">
			{/* {header} */}
			<View className="flex-row pb-3 items-center mx-4 space-x-2">
				<Image
					source={{ uri: "https://links.papareact.com/wru" }}
					className="h-7 w-7 bg-gray-300 p-4 rounded-full"
				/>
				<View className="flex-1">
					<Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
					<Text className="font-bold text-xl">
						Current Location <ChevronDownIcon size={20} color="#00CCBB" />
					</Text>
				</View>
				<UserIcon size={35} color="#00CCBB" />
			</View>
			{/* {SearchBar} */}
			<View className="flex-row items-center space-x-2 pb-2 mx-4">
				<View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
					<MagnifyingGlassIcon color="gray" size={20} />
					<TextInput
						placeholder="Restaurent and Cuisines"
						keyboardType="default"
					/>
				</View>
				<AdjustmentsVerticalIcon color="#00CCBB" />
			</View>
			{/* Body */}
			<ScrollView
				vertical
				showsVerticalScrollIndicator={false}
				className="bg-gray-100">
				{/* Categories */}
				<Categories />
				{/* Featured */}
				{featuredCategories?.map((category) => (
					<FeaturedRow
						key={category._id}
						id={category._id}
						title={category.name}
						description={category.short_description}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}
