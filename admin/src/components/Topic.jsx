import React from "react";
import Chip from "@mui/material/Chip";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
const Wrapper = styled.div`
	margin: 2px;
`;
export default function Topic(props) {
	return props.handleDelete ? (
		<Chip
			label={props.label}
			onClick={() => {
				props.handleClick ? props.handleClick(props.catId) : console.log();
			}}
			onDelete={() => props.handleDelete(props.catId, props.label, props.name)}
			deleteIcon={<DeleteIcon />}
			variant="outlined"
			color="success"
			sx={{
				m: 1,
			}}
		/>
	) : (
		<Chip
			label={props.label}
			onClick={() => {
				props.handleClick ? props.handleClick(props.catId) : console.log();
			}}
			variant="outlined"
			color="success"
			sx={{
				m: 1,
			}}
		/>
	);
}
