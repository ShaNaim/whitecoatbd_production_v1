import React from "react";
import { setTitle } from "../customHooks";
//.. UI
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import HomeSlider from "../components/HomeSlider";
import ProductCard from "../components/Product/ProductCard";
import { Row, Col } from "react-bootstrap";
import CategoryItem from "../components/CategoryItem";
import Subjectlist from "../components/SubjectList";
import Homepagecarousel from "../components/HomePageCarousel";
const item = {
	title: "Grey's Anatomy Part 1 Section",
	price: 500,
	description: "Gorge RR Thomas",
	img: "/images/Product/Arifs_Representation_on_Human_Anatomy_Volume-l_13th_edition.jpg",
};

const category = [
	{ name: "book", img: "books.jpg" },
	{ name: "accessory", img: "accessory.png" },
	{ name: "clothing", img: "vlothes2.svg" },
	{ name: "stationary", img: "stationary.jpg" },
	{ name: "bundle", img: "bookimage.png" },
	{ name: "gifts", img: "gifts.png" },
];

const Home = () => {
	setTitle("Home");
	return (
		<div>
			<HomeSlider />
			<CategoryItem />
			<Homepagecarousel />
			<Categories />
			<Newsletter />
			<Row className="  justify-content-center">
				<Col className="justify-content-center" xs={6} sm={"auto"}>
					<ProductCard item={item} />
				</Col>
				<Col className="justify-content-center" xs={6} sm={"auto"}>
					<ProductCard item={item} />
				</Col>
				<Col className="justify-content-center" xs={6} sm={"auto"}>
					<ProductCard item={item} />
				</Col>
				<Col className="justify-content-center" xs={6} sm={"auto"}>
					<ProductCard item={item} />
				</Col>
				<Col className="justify-content-center" xs={6} sm={"auto"}>
					<ProductCard item={item} />
				</Col>
				<Col className="justify-content-center" xs={6} sm={"auto"}>
					<ProductCard item={item} />
				</Col>
				<Col className="justify-content-center" xs={6} sm={"auto"}>
					<ProductCard item={item} />
				</Col>
				<Col className="justify-content-center" xs={6} sm={"auto"}>
					<ProductCard item={item} />
				</Col>
				<Col className="justify-content-center" xs={6} sm={"auto"}>
					<ProductCard item={item} />
				</Col>
				<Col className="justify-content-center" xs={6} sm={"auto"}>
					<ProductCard item={item} />
				</Col>
			</Row>
		</div>
	);
};

export default Home;
