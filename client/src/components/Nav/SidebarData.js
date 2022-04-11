import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Books",
		path: "/categories/book",
		icon: <FaIcons.FaBookMedical />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		// subNav: [
		// 	{
		// 		title: "By Subject",
		// 		path: "/books",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},
		// 	{
		// 		title: "Bundels",
		// 		path: "/guides",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},
		// ],
	},
	{
		title: "Accessories",
		path: "/categories/accessories",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Stethoscope",
				path: "/categories/accessories/stethoscope",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "BP Mechine",
				path: "/categories/accessories/bp-mechine",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
		],
	},
	{
		title: "Clothing",
		path: "/categories/clothing",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Apron",
				path: "/categories/accessories/apron",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "T-Shirt",
				path: "/categories/accessories/t-shirt",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
		],
	},
	{
		title: "Gifts",
		path: "/categories/gifts",
		icon: <FaIcons.FaEnvelopeOpenText />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Mugs",
				path: "/categories/gifts/mugs",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Pens",
				path: "/categories/gifts/pens",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "All Products",
		path: "/products",
		icon: <FaIcons.FaCartPlus />,
	},
];
