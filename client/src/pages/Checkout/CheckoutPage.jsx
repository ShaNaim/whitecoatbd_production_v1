import React, { useState, useRef, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { useValidator } from "../../customHooks";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createOrder } from "../../redux/apiCalls";
import PaymentModal from "../../components/PaymentModal";
import { useHistory } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import {
	Container,
	Wrapper,
	Title,
	Top,
	TopButton,
	TopTexts,
	TopText,
	Bottom,
	Info,
	Hr,
	Summary,
	SummaryTitle,
	SummaryItem,
	SummaryItemText,
	SummaryItemPrice,
	Button,
	Select,
	Option,
} from "./StyledCheckout";
import TextField from "../../components/TextField";
import AddressInput from "../Register/AddressInput";
import { registerGuest } from "../../redux/apiCalls";
import Switch from "@mui/material/Switch";
import Cartconfirmdetail from "../../components/CartConfirmDetail";
import PaymentMethood from "../../components/PaymentMethood";
import DeliveryCost from "../../components/DeliveryCost";
const formateCart = (order) => {
	console.log("ORDER ::", order);
	const products = [];
	order.products.forEach((item) => {
		products.push({
			productId: item._id,
			quantity: item.quantity,
		});
	});
	return products;
};

export default function CheckoutPage() {
	const cart = useSelector((state) => state.cart);
	const { currentUser, error, errorMessage } = useSelector(
		(state) => state.user
	);

	// useEffect(() => {
	// 	console.log(error);
	// 	const checkError = () => {
	// 		if (error) {
	// 			console.log("Im in 58");
	// 			setRegisterError(error);
	// 			if (errorMessage.email) {
	// 				setInputErrorMessage(errorMessage.email);
	// 			}
	// 			if (errorMessage.contact) {
	// 				setInputErrorMessage(errorMessage.contact);
	// 			}
	// 		} else {
	// 			setRegisterError(error);
	// 			console.log("Im in 67");
	// 		}
	// 	};
	// 	checkError();
	// }, [error]);

	const [registerError, setRegisterError] = useState(error);
	const defaultDiscount = 0;
	const defaultDelivery = 60;
	const [firstName, setFirstName] = useState(
		currentUser ? currentUser.firstName : ""
	);
	const [email, setEmail] = useState(currentUser ? currentUser.email : "");
	const [name, setName] = useState(false);
	const [contact, setContact] = useState(
		currentUser ? currentUser.contact : ""
	);
	const [deliveryAddress, setDeliveryAddress] = useState(
		currentUser ? currentUser.address : ""
	);

	const [billingAddress, setbillingAddress] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("");
	const [deliveryCost, setDeliveryCost] = useState(defaultDelivery);
	const [total, setTotal] = useState(defaultDelivery - defaultDiscount);
	const billingAddressRef = useRef(null);
	const deliveryAddressRef = useRef(null);
	const [openPaymentModal, setOpenPaymentModal] = useState(false);

	const [guestUser, setGuestUser] = useState({});

	const [inputErrorMessage, setInputErrorMessage] = useState("");
	const [firstNameError, setFirstNameError] = useState(false);
	const [contactError, setContactError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [checked, setChecked] = React.useState(false);

	const history = useHistory();

	const validateInput = useValidator();
	const dispatch = useDispatch();

	const handleChange = (event) => {
		if (!checked) {
			setChecked(true);
			const deliveryAddress = deliveryAddressRef.current.getAddress();
			setbillingAddress(deliveryAddress);
			setName(true);
		} else {
			setChecked(false);
			setbillingAddress({ address: "", city: "", area: "", zip: "" });
		}
	};

	const handleFilters = (event) => {
		setDeliveryCost(Number(event.target.value));
		setTotal(Number(event.target.value) - defaultDiscount);
	};

	const handelSubmit = async (event) => {
		event.preventDefault();
		try {
			if (currentUser) {
				setGuestUser(currentUser);
				setOpenPaymentModal(true);
			} else {
				const billingAddress = billingAddressRef.current.getAddress();
				const deliveryAddress = deliveryAddressRef.current.getAddress();
				const contactNumber = Number(contact);
				console.log({
					contactNumber,
					firstName,
					email,
					billingAddress,
					deliveryAddress,
				});
				if (
					validateInput([
						contactNumber,
						firstName,
						email,
						billingAddress,
						deliveryAddress,
					])
				) {
					const res = await publicRequest.post("/auth/register", {
						contact: contactNumber,
						firstName,
						email,
						address: billingAddress,
						password: contact,
					});
					console.log(res.status);
					if (res.status === 201) {
						setInputErrorMessage("");
						setOpenPaymentModal(true);
						setGuestUser(res.data);
					}
				} else {
					setInputErrorMessage("Please Provide Information");
				}
			}
		} catch (error) {
			console.log(error.response.status);
			if (error.response.status === 500 && error.response) {
				if (error.response?.data.email) {
					console.log(error.response?.data.email);
					setInputErrorMessage(error.response?.data.email);
				}
				if (error.response?.data.contact) {
					setInputErrorMessage(error.response?.data.contact);
				}
			} else {
				setInputErrorMessage("");
			}
		}
	};

	const handleClick = async () => {
		try {
			console.log("something");
			await createOrder(dispatch, {
				userId: guestUser._id,
				products: formateCart(cart),
				amount: cart.total,
				address: guestUser.address,
				deliveryCost: deliveryCost,
				contactNumber: guestUser.contact,
				paymentMethod: paymentMethod,
			});
			history.push("/success", {
				user: guestUser,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Top>
				<span className="text-danger"> {inputErrorMessage} </span>
				{/* <ErrorMessage message={inputErrorMessage} /> */}
			</Top>
			<Bottom>
				<Info className="p-3 me-3">
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						spacing={3}
						sx={{ width: "100%" }}
					>
						<TextField
							required
							type="text"
							id="firstName"
							name="firstName"
							label="Name"
							value={firstName}
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
							label="Contact"
							name="contact"
							value={contact}
							placeholder="+880"
							variant="standard"
							onChange={(e) => setContact(e.target.value)}
							error={contactError}
							onClick={(e) => {
								setContactError(false);
							}}
						/>
					</Stack>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						spacing={3}
						sx={{ width: "100%" }}
					>
						<TextField
							required
							sx={{ width: "100%" }}
							type="email"
							id="standard-basic"
							label="Email"
							name="email"
							value={email}
							variant="standard"
							onChange={(e) => setEmail(e.target.value)}
							error={emailError}
							onClick={(e) => {
								setEmailError(false);
							}}
						/>
					</Stack>

					<div>
						<div className="mt-4">
							<span className="fs-4">Delivery Address</span>
							<hr className="border-bottom border-primary " />
							<AddressInput
								name={name}
								address={deliveryAddress}
								ref={deliveryAddressRef}
							/>
						</div>
						<div className="mt-4">
							<span className="fs-4 ">Billing Address</span>
							<div>
								<span className="text-muted">Same As Delivery</span>
								<Switch
									checked={checked}
									onChange={handleChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							</div>
							<hr className="border-bottom border-primary " />

							<AddressInput address={billingAddress} ref={billingAddressRef} />
						</div>
						<hr className="border-bottom border-primary " />
					</div>
				</Info>
				<Summary>
					<span> Order Summery </span>
					<Cartconfirmdetail cart={cart} total={total} />
					<SummaryItem>
						<span className="d-block mb-2"> Payment Methood </span>
						<PaymentModal
							open={openPaymentModal}
							setOpen={setOpenPaymentModal}
							setPaymentMethod={setPaymentMethod}
							handleClick={handleClick}
						/>
					</SummaryItem>
					<SummaryItem>
						<span className="d-block mb-2"> Shipping </span>
						<DeliveryCost handleChange={handleFilters} />
					</SummaryItem>
					<div className="w-100">
						<Button className="mt-2" onClick={handelSubmit}>
							Confirm Order
						</Button>
					</div>
				</Summary>
			</Bottom>
		</div>
	);
}
