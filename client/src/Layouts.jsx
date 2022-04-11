import React, { useState, createRef } from "react";
import { useMobile } from "./customHooks";
import { SnackbarProvider } from "notistack";
import { Link } from "react-router-dom";
//.... UI
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { Row, Col, Container } from "react-bootstrap";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Navbar from "./components/Nav/Navbar";
import SideNav from "./components/Nav/SideNav";

export default function Layouts(props) {
	const isMobile = useMobile(1000);
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	const notistackRef = createRef();
	const onClickDismiss = (key) => () => {
		notistackRef.current.closeSnackbar(key);
	};

	return (
		<>
			<SnackbarProvider
				ref={notistackRef}
				action={(key) => (
					<div>
						<Link className="text-light" to={`/cart`}>
							Viwe Cart
						</Link>
						<Button className="text-light" onClick={onClickDismiss(key)}>
							<CloseIcon />
						</Button>
					</div>
				)}
				maxSnack={4}
			>
				<Announcement />
				<Navbar user={props.user} />
				<Container fluid="md">
					<Row container direction="row">
						<Col lg={2}>
							<SideNav
								sidebar={sidebar}
								showSidebar={showSidebar}
								isMobile={!isMobile}
							/>
						</Col>
						<Col item xs={12} sm={12} md={12} lg={9}>
							{props.children}
						</Col>
						<Col sm={2}></Col>
					</Row>
				</Container>
				<Footer />
			</SnackbarProvider>
		</>
	);
}
