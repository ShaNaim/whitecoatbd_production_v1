import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;
let currentUser = {};
let TOKEN = "";

try {
	currentUser = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
	if (currentUser) {
		TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
		console.log("TRYING ::", TOKEN);
	}
} catch (error) {
	console.error(error);
}

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${TOKEN}` },
});
