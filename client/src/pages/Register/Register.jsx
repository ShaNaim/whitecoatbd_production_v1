import React, { useRef, useState } from "react";
import { register } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setTitle } from "../../customHooks";
//... UI
import Submitbutton from "../../components/SubmitButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
	Container,
	Wrapper,
	Title,
	Form,
	Agreement,
	PersonalInfoContainer,
	Hr,
	ButtonContainer,
	RedirectLink,
	PasswordContainer,
} from "./styled.jsx";
import Passwordinput from "../../components/PasswordInput";
import TextField from "../../components/TextField";
import AddressInput from "./AddressInput";
//......................
const Register = () => {
	setTitle("Register");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [gender, setGender] = useState("");
	const [contact, setContact] = useState(0);

	const [firstNameError, setFirstNameError] = useState(false);
	const [lastNameError, setLastNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [contactError, setContactError] = useState(false);
	const [genderError, setGenderError] = useState(false);

	const history = useHistory();
	const dispatch = useDispatch();
	const addressRef = useRef(null);

	const { isFetching, error } = useSelector((state) => state.user);

	// const getAddress = () => {
	// 	return { address: address, city: city, area: area, zip: zip };
	// };

	const validate = (address) => {
		let valid = true;
		if (firstName === "") {
			console.log("FirstName");

			setFirstNameError(true);
			valid = false;
		}
		if (lastName === "") {
			console.log("lastName");

			setLastNameError(true);
			valid = false;
		}
		if (email === "") {
			console.log("email");

			setEmailError(true);
			valid = false;
		}

		if (password === "") {
			console.log("password");

			setPasswordError(true);
			valid = false;
		}

		if (contact === "") {
			console.log("contact");

			setContactError(true);
			valid = false;
		}
		if (gender === "") {
			console.log("gender");

			setGenderError(true);
			valid = false;
		}

		if (!address) {
			console.log("address");
			valid = false;
		}

		return valid;
	};
	const handleChange = (e) => {
		setGender(e.target.value);
		setGenderError(false);
		console.log("STATE ::", gender);
	};

	const handleClick = async (e) => {
		e.preventDefault();
		const address = addressRef.current.getAddress();

		if (validate(address)) {
			try {
				console.log(
					"ADDRESS ::",
					firstName,
					lastName,
					email,
					password,
					contact,
					gender,
					address
				);
				register(dispatch, {
					firstName,
					lastName,
					email,
					password,
					contact,
					gender,
					address,
				});
				history.push("/");
			} catch (error) {
				console.log("User Auth Error :");
			}
		}
	};
	return (
		<Container>
			<Wrapper>
				<Form>
					<Title>CREATE AN ACCOUNT</Title>
					<div>
						<PersonalInfoContainer justifycontent="space-between">
							<TextField
								required
								type="text"
								id="firstName"
								name="firstName"
								label="First Name"
								variant="standard"
								onChange={(e) => setFirstName(e.target.value)}
								error={firstNameError}
								onClick={(e) => {
									setFirstNameError(false);
								}}
							/>
							<TextField
								required
								type="text"
								id="standard-basic"
								label="Last Name"
								name="lastName"
								variant="standard"
								onChange={(e) => setLastName(e.target.value)}
								error={lastNameError}
								onClick={(e) => {
									setLastNameError(false);
								}}
							/>
							<TextField
								required
								type="email"
								id="standard-basic"
								label="Email"
								name="email"
								variant="standard"
								onChange={(e) => setEmail(e.target.value)}
								error={emailError}
								onClick={(e) => {
									setEmailError(false);
								}}
							/>
						</PersonalInfoContainer>
						<PersonalInfoContainer justifycontent="space-between">
							<PasswordContainer>
								<Passwordinput
									label="Password"
									setPassword={setPassword}
									setPasswordError={setPasswordError}
									passwordError={passwordError}
								/>
							</PasswordContainer>
							<FormControl
								variant="standard"
								sx={{ m: 1, minWidth: 120 }}
								error={genderError}
							>
								<InputLabel id="gender-select-label">Gender</InputLabel>
								<Select
									labelId="gender-select-label"
									id="gender-select"
									value={gender}
									onChange={handleChange}
									label="Gender"
								>
									<MenuItem value="">
										<em>Choose..</em>
									</MenuItem>
									<MenuItem value={"male"}>Male</MenuItem>
									<MenuItem value={"female"}>Female</MenuItem>
									<MenuItem value={"other"}>Other</MenuItem>
								</Select>
							</FormControl>

							<TextField
								required
								type="number"
								id="standard-basic"
								label="Contact"
								name="contact"
								placeholder="+880"
								variant="standard"
								onChange={(e) => setContact(e.target.value)}
								error={contactError}
								onClick={(e) => {
									setContactError(false);
								}}
							/>
						</PersonalInfoContainer>
						<AddressInput ref={addressRef} />
						<Hr />
						<Hr />
						<Agreement>
							By creating an account, I consent to the processing of my personal
							data in accordance with the <b>PRIVACY POLICY</b>
						</Agreement>
					</div>
					<ButtonContainer>
						<Submitbutton onClick={handleClick}>CREATE</Submitbutton>
						<RedirectLink to="/login">Already Registered ?</RedirectLink>
					</ButtonContainer>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
