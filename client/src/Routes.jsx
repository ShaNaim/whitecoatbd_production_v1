import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//... Components ?
import CategoryList from "./components/CategoryList";
import Secondprof from "./components/profs/SecondProf";
//.... Pages
import Success from "./pages/Success";
import Search from "./pages/Search/Search";
import Profilepage from "./pages/Profile/ProfilePage";
import Product from "./pages/Product/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register/Register";
import Login from "./pages/Register/Login";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart/Cart.jsx";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import PageNotFound from "./pages/PageNotFound";
import CategoryItem from "./components/CategoryItem";
import TrackOrder from "./pages/TrackOrder";
import ForgotPassword from "./pages/Register/ForgotPassword";
import Resetpassword from "./pages/Register/ResetPassword";
export default function routes({ user }) {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/books">
					<Shop default="0" />
				</Route>
				<Route exact path="/categories">
					<Secondprof />
				</Route>
				<Route exact path="/shop">
					<CategoryItem default="0" />
				</Route>
				<Route exact path="/categories/:category/:sub">
					<CategoryPage />
				</Route>
				<Route exact path="/categories/:category">
					<CategoryList />
				</Route>
				<Route exact path="/search/:query">
					<Search />
				</Route>
				<Route path="/products">
					<ProductList />
				</Route>
				<Route path="/profile">
					<Profilepage user={user} />
				</Route>
				<Route path="/products/:category">
					<CategoryList />
				</Route>
				<Route path="/product/:id">
					<Product />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
				<Route path="/checkout">
					<CheckoutPage />
				</Route>
				<Route path="/success">
					<Success />
				</Route>
				<Route path="/track-order">
					<TrackOrder />
				</Route>
				<Route path="/forgot-password">
					<ForgotPassword />
				</Route>
				<Route path="/reset-password">
					<Resetpassword />
				</Route>
				<Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
				<Route path="/register">
					{user ? <Redirect to="/" /> : <Register />}
				</Route>
				<Route path="*">
					<PageNotFound />
				</Route>
			</Switch>
		</>
	);
}
