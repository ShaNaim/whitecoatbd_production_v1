import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
export const Button = styled.button`
	min-width: 100%;
	border: none;
	padding: 10px 8px;
	border: 2px solid
		${({ variant }) =>
			variant === "success"
				? "#0d804a"
				: variant === "danger"
				? "#eb4c4c"
				: variant === "info"
				? "#1f2df5"
				: "#3b9d9d"};
	border-radius: 20px;
	background-color: white;
	color: ${({ variant }) =>
		variant === "success"
			? "#0d804a"
			: variant === "danger"
			? "#eb4c4c"
			: variant === "info"
			? "#1f2df5"
			: "#3b9d9d"};
	margin-top: 10px;
	cursor: pointer;
	margin-bottom: 10px;
	letter-spacing: 2px;
	transition: transform 0.4s;
	box-shadow: 3px 3px 1.5px 0px rgba(0, 0, 0, 0.25);
	-webkit-box-shadow: 3px 3px 1.5px 0px rgba(0, 0, 0, 0.25);
	-moz-box-shadow: 3px 3px 1.5px 0px rgba(0, 0, 0, 0.25);
	&:disabled {
		color: green;
		cursor: not-allowed;
	}
	&:hover {
		transform: scale(1.1);
		-webkit-transform: scale(1.1);
		-moz-transform: scale(1.1);
		box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.25);
		-webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.25);
		-moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.25);
	}
	${mobile({ width: "40%" })}
`;
const Submitbutton = (props) => {
	return <Button {...props}>{props.children}</Button>;
};

export default Submitbutton;
