import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Row, Col } from "react-bootstrap";

const Wrapper = styled(Row)`
	display: flex;
	justify-content: space-between;
	${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Image = styled.img`
	width: 100%;
	border: 1px solid #a18cd1d1;
	max-height: 250px;
	height: 100%;
	object-fit: cover;
	transition: 0.4s ease-in-out;
	&:hover {
		transform: scale(1.05);
		-webkit-transform: scale(1.05);
		-moz-transform: scale(1.05);
		box-shadow: 10px 11px 13px -4px rgba(0, 0, 0, 0.38);
		-webkit-box-shadow: 10px 11px 13px -4px rgba(0, 0, 0, 0.38);
		-moz-box-shadow: 10px 11px 13px -4px rgba(0, 0, 0, 0.38);
	}
	${mobile({ maxHeight: "80%", height: "100%", width: "100%" })}
`;

const Info = styled.div`
	width: 100%;
	height: 70px;
	background-image: linear-gradient(to top, #a18cd145 0%, #fdf4fb 100%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	${mobile({ top: "-150px" })}
`;

const Container = styled.div`
	background-image: url(${({ imglink }) => imglink});
	background-position: center; /* Center the image */
	background-repeat: no-repeat; /* Do not repeat the image */
	background-size: cover;
	background-color: #fdfdff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 400px;
	&:hover {
		cursor: pointer;
	}
	border: 1px solid #a18cd1d1;
	transition: 0.4s ease-in-out;
	&:hover {
		transform: scale(1.05);
		-webkit-transform: scale(1.05);
		-moz-transform: scale(1.05);
		box-shadow: 10px 11px 13px -4px rgba(0, 0, 0, 0.38);
		-webkit-box-shadow: 10px 11px 13px -4px rgba(0, 0, 0, 0.38);
		-moz-box-shadow: 10px 11px 13px -4px rgba(0, 0, 0, 0.38);
	}
	${mobile({ height: " 400px", width: "100%" })}
`;

const Title = styled.span`
	font-size: 23px;
	color: #252323;
	font-weight: 600;
	text-transform: capitalize;
	cursor: pointer;
`;

const CategoryItem = () => {
	const category = [
		{ name: "book", img: "books.jpg" },
		{ name: "accessory", img: "accessory.png" },
		{ name: "clothing", img: "vlothes2.svg" },
		{ name: "stationary", img: "stationary.jpg" },
		{ name: "bundle", img: "bookimage.png" },
		{ name: "gifts", img: "gifts.png" },
	];
	return (
		<>
			<Wrapper fluid="md">
				{category.map((item) => {
					return (
						<Col xs={12} sm={12} md={6}>
							<Link to={`/categories/${item.name}`}>
								<Container imglink={`/images/${item.img}`}>
									<Info>
										<Title>{item.name}</Title>
									</Info>
								</Container>
							</Link>
						</Col>
					);
				})}
			</Wrapper>
		</>
	);
};

export default CategoryItem;
