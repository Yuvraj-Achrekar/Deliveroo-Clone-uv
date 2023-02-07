import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurentCard from "./RestaurentCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ title, description, id }) => {
	const [restaurents, setRestaurents] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "featured" && _id == $id]{
		...,
		restaurents[]->{
		  ...,
		  dishes[]->,
			type->{name}
			}
	  }[0]
	  `,
				{ id }
			)
			.then((data) => {
				setRestaurents(data?.restaurents);
			});
	}, [id]);

	return (
		<View>
			<View className="flex-row mt-4 items-center justify-between px-4">
				<Text className="font-bold text-lg">{title}</Text>
				<ArrowRightIcon size={20} color="#00CCBB" />
			</View>
			<Text className="text-xs text-gray-500 px-4">{description}</Text>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					paddingHorizontal: 15,
				}}
				className="pt-4">
				{/* RestaurentsCards */}
				{restaurents?.map((restaurent) => (
					<RestaurentCard
						key={restaurent._id}
						id={restaurent._id}
						imgUrl={restaurent.image}
						title={restaurent.name}
						rating={restaurent.rating}
						address={restaurent.address}
						short_description={restaurent.short_description}
						genre={restaurent.type?.name}
						dishes={restaurent.dishes}
						long={restaurent.long}
						lat={restaurent.lat}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
