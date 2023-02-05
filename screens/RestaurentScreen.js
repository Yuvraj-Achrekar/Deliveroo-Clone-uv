import { StyleSheet, Text, View } from "react-native";

import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

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
		<View>
			<Text>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
