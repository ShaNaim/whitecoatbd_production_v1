import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMobile } from "../../customHooks";
import { mobile } from "../../responsive";
//... UI
import { Badge } from "@material-ui/core";
import Profile from "./Profile";
import SideNav from "./SideNav";
import Searchcontainer from "../SearchContainer";
//... Icon
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { FaBars } from "react-icons/fa";
//....
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background: #58a5d8;
	${({ isMobile }) => isMobile && "position: -webkit-sticky;"}
	${({ isMobile }) => isMobile && "position: sticky;"}
	${({ isMobile }) => isMobile && "top: 0;"}
	z-index: 20;
	padding: 1px 15% 1px 15%;
	color: white;
	margin-bottom: 10px;
	${mobile({
		flexDirection: "column",
		width: "100%",
		padding: "0 0 0 0",
		marginBottom: 4,
	})}
`;

const TitleConatiner = styled.div`
	flex: 2;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 2px 30px 2px 30px;
	background: #58a5d8;
	color: white;
	${mobile({
		flexDirection: "column",
		padding: "2px 0px 0 0px",
		justifyContent: "space-evenly",
	})};
`;

const Container = styled.div`
	flex: 1;
	max-height: 60px;
	min-height: 60px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	${mobile({ justifyContent: "space-around" })}
`;

const MenuConatiner = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 2px 30px 2px 30px;
	background: #58a5d8;
	color: white;
	${mobile({ display: "none" })}
`;

const LinkContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	color: white;
	margin-left: 20px;
	margin-right: 20px;
	> span {
		margin-top: -1px;
		font-size: 12px;
		${mobile({ marginLeft: "5px", marginTop: "2px" })}
	}
`;

const LinkContainerMobile = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: flex-end;
	${mobile({ marginRight: "18px" })}
`;

const AppTitle = styled.span`
	font-size: 22px;
	font-weight: 700;
	color: #fffefe;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	text-shadow: -4px 4px 1px rgba(31, 29, 29, 0.27);
`;

const NavIcon = styled(Link)`
	font-size: 1.7rem;
	max-height: 80px;
	color: white;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	transition: 0.8s ease-in-out;
	margin: 2rem;
	&:hover {
		color: #f6f9fa;
		cursor: pointer;
	}
`;

const NavBar = () => {
	const isMobile = useMobile(1000);
	const quantity = useSelector((state) => state.cart.quantity);
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	// const { isFetching, error } = useSelector((state) => state.user);
	return (
		<Wrapper isMobile={isMobile}>
			<TitleConatiner>
				<Container>
					{isMobile && (
						<NavIcon to="#">
							<FaBars onClick={showSidebar} />
						</NavIcon>
					)}

					<SideNav sidebar={sidebar} showSidebar={showSidebar} />

					<Link to="/">
						<AppTitle>WhiteCoatBD</AppTitle>
					</Link>
					{isMobile && (
						<LinkContainerMobile>
							<Link to="/cart">
								<LinkContainer>
									<Badge badgeContent={quantity} color="primary">
										<ShoppingCartOutlined />
									</Badge>
									<span>Cart</span>
								</LinkContainer>
							</Link>
							<Profile />
						</LinkContainerMobile>
					)}
				</Container>
				<Searchcontainer />
			</TitleConatiner>
			<MenuConatiner>
				<Link to="/shop">
					<LinkContainer>
						<ShoppingBasketIcon />
						<span>Shop</span>
					</LinkContainer>
				</Link>
				<Link to="/cart">
					<LinkContainer>
						<Badge badgeContent={quantity} color="primary">
							<ShoppingCartOutlined />
						</Badge>
						<span>Cart</span>
					</LinkContainer>
				</Link>
				<Profile />
			</MenuConatiner>
		</Wrapper>
	);
};

export default NavBar;
