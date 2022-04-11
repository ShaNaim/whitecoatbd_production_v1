import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { default as Input } from "@mui/material/TextField";
import { mobile } from "../responsive";
import styled from "styled-components";

const UserInput = styled(Input)`
	margin-bottom: 10px;
	${mobile({ width: "100%" })}
`;

const TextField = (props) => {
	return (
		<>
			<UserInput sx={{ mb: 2 }} {...props} />
		</>
	);
};

export default TextField;
