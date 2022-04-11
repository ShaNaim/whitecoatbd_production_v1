import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
	background: ${({ backgroundcolor }) =>
		backgroundcolor ? "white" : "#f1f2f5"};
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #05070f;
	border-radius: 20px;
	box-shadow: 5px 2px 9px 1px rgb(88, 165, 216, 0.51);
	padding: 20px;
	margin: 0 8px 8px 0;
	list-style: none;
	height: 60px;
	text-decoration: none;
	font-size: 18px;
	&:hover {
		transition: 350ms;
		background: #85b7d8;
		backgroundcolor: #dd48ebc9;
		border-left: 2px solid #d52ce4;
		cursor: pointer;
		box-shadow: 5px 2px 9px 1px rgb(213, 44, 228, 0.51);
	}
`;

const SidebarLabel = styled.span`
	margin-left: 16px;
`;

const DropdownLink = styled(Link)`
	background: ${({ backgroundcolor }) =>
		backgroundcolor ? "white" : "#bdbec0"};
	height: 60px;
	padding-left: 2rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #000000;
	font-size: 16px;
	&:hover {
		transition: 350ms;
		background: #85b7d8;
		color: #dd48ebc9;
		cursor: pointer;
	}
`;

const SubMenu = ({ item, backgroundcolor }) => {
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	return (
		<>
			<SidebarLink
				backgroundcolor={backgroundcolor}
				to={item.path}
				onClick={item.subNav && showSubnav}
			>
				<div>
					{item.icon}
					<SidebarLabel>{item.title}</SidebarLabel>
				</div>
				<div>
					{item.subNav && subnav
						? item.iconOpened
						: item.subNav
						? item.iconClosed
						: null}
				</div>
			</SidebarLink>
			{subnav &&
				item.subNav.map((item, index) => {
					return (
						<DropdownLink
							backgroundcolor={backgroundcolor}
							to={item.path}
							key={index}
						>
							{item.icon}
							<SidebarLabel>{item.title}</SidebarLabel>
						</DropdownLink>
					);
				})}
		</>
	);
};

export default SubMenu;
