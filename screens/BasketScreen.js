import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
	ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurent } from "../features/restaurentSlice";
import {
	removeFromBasket,
	selectBasketItems,
	selectBasketTotal,
} from "../features/basketSlice";
import SafeViewAndroid from "../SafeViewAndroid";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import PreparingOrderScreen from "./PreparingOrderScreen";

const BasketScreen = () => {
	const navigation = useNavigation();
	const restaurent = useSelector(selectRestaurent);
	const items = useSelector(selectBasketItems);
	const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
	const dispatch = useDispatch();
	const basketTotal = useSelector(selectBasketTotal);

	useEffect(() => {
		const groupedItems = items.reduce((results, item) => {
			(results[item.id] = results[item.id] || []).push(item);
			return results;
		}, {});
		setGroupedItemsInBasket(groupedItems);
	}, [items]);

	return (
		<SafeAreaView
			style={SafeViewAndroid.AndroidSafeArea}
			className="flex-1 bg-white">
			<View className="flex-1 bg-gray-100">
				<View className="p-5 bordder-bottom border-[#00CCBB] bg-white shadow-xs">
					<View>
						<Text className="text-center font-bold text-lg">Basket</Text>
						<Text className="text-center text-gray-400">
							{restaurent.title}
						</Text>
					</View>
					<TouchableOpacity
						onPress={navigation.goBack}
						className="rounded-full bg-gray-100 absolute top-3 right-5 ">
						<XCircleIcon height={50} width={50} color="#00CCBB" />
					</TouchableOpacity>
				</View>
				<View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
					<Image
						source={{
							uri: "https://links.papareact.com/wru",
						}}
						className="h-7 w-7 p-4 rounded-full bg-gray-300"
					/>
					<Text className="flex-1">Deliver in 50-70 mins</Text>
					<TouchableOpacity>
						<Text className="text-[#00CCBB]">Change</Text>
					</TouchableOpacity>
				</View>
				<ScrollView className="divide-y divide-gray-200">
					{Object.entries(groupedItemsInBasket).map(([key, items]) => (
						<View
							key={key}
							className="flex-row items-center space-x-3 bg-white py-2 px-5">
							<Text className="text-[#00CCBB]">{items.length} x</Text>
							<Image
								source={{
									uri: urlFor(items[0]?.image).url(),
								}}
								className="h-12 w-12 rounded-full"
							/>
							<Text className="flex-1">{items[0]?.name} </Text>
							<Text>
								<Currency quantity={items[0]?.price} currency={"INR"} />
							</Text>

							<TouchableOpacity>
								<Text
									className="text-[#00CCBB] text-xs"
									onPress={() => dispatch(removeFromBasket({ id: key }))}>
									remove
								</Text>
							</TouchableOpacity>
						</View>
					))}
				</ScrollView>
				<View className="p-5 bg-white mt-5 space-y-4">
					<View className="flex-row justify-between">
						<Text className="text-gray-400">Subtotal</Text>
						<Text className="text-gray-400">
							<Currency quantity={basketTotal} currency={"INR"} />
						</Text>
					</View>
					<View className="flex-row justify-between">
						<Text className="text-gray-400">Delivery Fee</Text>
						<Text className="text-gray-400">
							<Currency quantity={100} currency={"INR"} />
						</Text>
					</View>
					<View className="flex-row justify-between">
						<Text>Order Total</Text>
						<Text className="font-extrabold">
							<Currency quantity={basketTotal + 100} currency={"INR"} />
						</Text>
					</View>
					<TouchableOpacity
						onPress={() => navigation.navigate("PreparingOrderScreen")}
						className="bg-[#00CCBB] rounded-lg p-4">
						<Text className="text-center text-lg font-bold text-white">
							Place Order
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default BasketScreen;
