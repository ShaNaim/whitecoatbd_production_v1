import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { SidebarData } from "./SidebarData";
import { AiOutlineClose } from "react-icons/ai";
import SubMenu from "./SubMenu";
import { mobile } from "../../responsive";

const NavIcon = styled(Link)`
	margin-left: 2rem;
	font-size: 1.7rem;
	height: 80px;
	color: black;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const SidebarNav = styled.nav`
	background: ${({ backgroundcolor }) =>
		backgroundcolor ? "white" : "#202b4b8b"};
	color: black;
	width: 290px;
	width: ${({ isMobile }) => isMobile && "100%"};
	height: 100vh;
	padding: 20px 0px 20px 0px;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	top: ${({ isMobile }) => isMobile && "0"};
	position: ${({ isMobile }) => isMobile && "relative"};
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	left: ${({ isMobile }) => isMobile && "0"};
	transition: 350ms;
	z-index: 10;
`;

const SidebarWrap = styled.div`
	width: 100%;
	${mobile({ width: "90%" })}
`;

const SideNav = ({ sidebar, showSidebar, isMobile }) => {
	//temp
	//^ temp
	return (
		<>
			{isMobile ? (
				<IconContext.Provider value={{ color: "#111010" }}>
					<SidebarNav backgroundcolor="white" isMobile={true}>
						<SidebarWrap>
							{SidebarData.map((item, index) => {
								return (
									<SubMenu backgroundcolor="white" item={item} key={index} />
								);
							})}
						</SidebarWrap>
					</SidebarNav>
				</IconContext.Provider>
			) : (
				<IconContext.Provider value={{ color: "#111010" }}>
					<SidebarNav sidebar={sidebar}>
						<SidebarWrap>
							<NavIcon to="#">
								<AiOutlineClose onClick={showSidebar} />
							</NavIcon>
							{SidebarData.map((item, index) => {
								return <SubMenu item={item} key={index} />;
							})}
						</SidebarWrap>
					</SidebarNav>
				</IconContext.Provider>
			)}
		</>
	);
};

export default SideNav;
