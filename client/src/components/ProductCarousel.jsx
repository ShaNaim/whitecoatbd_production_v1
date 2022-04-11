import Slider from "react-slick";
import ProductCard from "./Product/ProductCard";
import styled from "styled-components";

const Arrow = styled.div`
	width: 40px;
	height: 80%;
	transition: 0.8s;
	border-radius: 5px;
	background-image: linear-gradient(to right, #a4b0be 33%, #57606f 100%);
	display: flex;
	align-items: center;
	justify-content: center;
	top: -1.5;
	bottom: -2;
	opacity: 1;
	cursor: pointer;
	opacity: 0.1;
	z-index: 2;
	:hover {
		height: 100%;
		opacity: 0.2;
		color: white;
		transition: 0.5s;
		background-image: linear-gradient(to right, #57606f 33%, #747d8c 100%);
		opacity: 0.3;
	}
`;

function SimpleArrow(props) {
	const { className, onClick } = props;
	return <Arrow className={className} onClick={onClick} />;
}

const ProductCarousel = ({ items, cat, autoplay, toShow }) => {
	const products = items;
	var slides = [5, 5];
	if (toShow) slides = [toShow[0], toShow[1]];
	var settings = {
		centerMode: false,
		centerPadding: "10px",
		autoplay: autoplay,
		speed: 1200,
		autoplaySpeed: 2000,
		infinite: false,
		slidesToShow: slides[0],
		slidesToScroll: slides[1],
		nextArrow: <SimpleArrow />,
		prevArrow: <SimpleArrow />,
		initialSlide: "0",
		className: "center",
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					infinite: false,
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 680,
				settings: {
					infinite: false,
					nextArrow: <SimpleArrow />,
					prevArrow: <SimpleArrow />,
					centerMode: false,
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					infinite: false,
					nextArrow: <SimpleArrow />,
					prevArrow: <SimpleArrow />,
					centerMode: false,
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<div className="pt-3 mb-4">
				<Slider
					{...settings}
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "start",
					}}
				>
					{cat
						? products.map((item) => {
								if (item.categories.includes(cat)) {
									return (
										<>
											<ProductCard item={item} />
										</>
									);
								}
						  })
						: products.map((item) => {
								return (
									<>
										{console.log(":ELSE:", cat)}
										<ProductCard item={item} />
									</>
								);
						  })}
				</Slider>
			</div>
		</>
	);
};

export default ProductCarousel;
