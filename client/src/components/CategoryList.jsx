import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { setTitle } from "../customHooks";
//...
import Shop from "../pages/Shop";
import Products from "./Products";
import Newsletter from "./Newsletter";
import Filtercontailer from "./FilterContailer";
import CarouselList from "./CarouselList";

//.....
const Container = styled.div``;

const Title = styled.h3`
	text-transform: capitalize;
	margin: 20px;
`;

const CategoryList = (props) => {
	const [filteredProducts, setFilteredProducts] = useState([]);
	const location = useLocation();
	const [carousel, setCarousel] = useState(props.carousel);
	const [topics, setTopics] = useState(props.topics);
	const mainCategory = props.cat ? props.cat : location.pathname.split("/")[1];
	const subCategory = props.cat ? props.cat : location.pathname.split("/")[2];

	setTitle(subCategory ? subCategory : "All Products");
	return (
		<>
			{subCategory === "book" ? (
				<Shop default="0" />
			) : (
				<Container>
					<Title className="text-capitalize">
						{subCategory} && {mainCategory}
					</Title>

					<Filtercontailer
						filterOptions={props.filters}
						setFilteredProducts={setFilteredProducts}
						category={subCategory}
					>
						{carousel ? (
							<CarouselList
								topics={topics}
								filteredProducts={filteredProducts}
							/>
						) : (
							<Products filteredProducts={filteredProducts} />
						)}
					</Filtercontailer>
					<Newsletter />
				</Container>
			)}
		</>
	);
};

export default CategoryList;
