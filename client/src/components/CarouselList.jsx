import React from "react";
import ProductCarousel from "./ProductCarousel";
import Heading from "./Heading";
const CarouselList = ({ topics, filteredProducts }) => {
	return (
		<div>
			{topics.map((topic, index) => {
				return (
					<>
						{console.log("topic :::", topic)}
						<Heading key={topic} title={topic} />
						<ProductCarousel
							key={index}
							autoplay={false}
							items={filteredProducts}
							cat={topic}
						/>
					</>
				);
			})}
		</div>
	);
};

export default CarouselList;
