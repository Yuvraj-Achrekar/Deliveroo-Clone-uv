import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import sanityClient from "../sanity";
import { urlFor } from "../sanity";

export default function Categories() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`
		*[_type == "category"]`
			)
			.then((data) => {
				setCategories(data);
			});
	});

	return (
		<ScrollView
			horizontal
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingTop: 10,
			}}
			showsHorizontalScrollIndicator={false}>
			{/* CategoriesCard */}
			{categories.map((category) => (
				<CategoriesCard
					key={category._id}
					imgUrl={urlFor(category.image).url()}
					title={category.name}
				/>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({});
