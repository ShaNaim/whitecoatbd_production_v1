import { useState } from "react";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
// UI
import "./newProduct.css";
import MultiSelect from "../../components/select/MultiSelect.jsx";
import ItemSelect from "../../components/select/ItemSelect.jsx";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Slide from "@material-ui/core/Slide";
import Alert from "@mui/material/Alert";
const test = [
	{
		mainCategory: "first-prof",
		subCategories: ["book", "guide", "anatomy", "physiology", "biochemistry"],
	},
	{
		mainCategory: "second-prof",
		subCategories: ["book", "guide", "community medicine", "forensic medicine"],
	},
	{
		mainCategory: "third-prof",
		subCategories: [
			"book",
			"guide",
			"microbiology",
			"pathology",
			"pharmacology",
		],
	},
	{
		mainCategory: "forth-prof",
		subCategories: [
			"book",
			"guide",
			"surgery",
			"gynecology and obstetrics",
			"medicine",
		],
	},
	{
		mainCategory: "book",
		subCategories: [
			"first-prof",
			"second-prof",
			"third-prof",
			"forth-prof",
			"anatomy",
			"physiology",
			"biochemistry",
			"community medicine",
			"forensic medicine",
			"microbiology",
			"pathology",
			"pharmacology",
			"surgery",
			"gynecology and obstetrics",
			"medicine",
		],
	},
	{
		mainCategory: "guide",
		subCategories: [
			"first-prof",
			"second-prof",
			"third-prof",
			"forth-prof",
			"anatomy",
			"physiology",
			"biochemistry",
			"community medicine",
			"forensic medicine",
			"microbiology",
			"pathology",
			"pharmacology",
			"surgery",
			"gynecology and obstetrics",
			"medicine",
		],
	},
	{
		mainCategory: "bundle",
		subCategories: [
			"book",
			"guide",
			"first-prof",
			"second-prof",
			"third-prof",
			"forth-prof",
			"anatomy",
			"physiology",
			"biochemistry",
			"community medicine",
			"forensic medicine",
			"microbiology",
			"pathology",
			"pharmacology",
			"surgery",
			"gynecology and obstetrics",
			"medicine",
		],
	},
	{
		mainCategory: "accessories",
		subCategories: ["bp-mechine", "stethoscope"],
	},
	{
		mainCategory: "clothing",
		subCategories: ["gifts", "apron", "t-shirt"],
	},
	{
		mainCategory: "gifts",
		subCategories: ["test", "mugs", "pens"],
	},
];

const getSubCategory = (cat) => {
	let subCatagory = [];
	test.forEach((item) => {
		if (item.mainCategory === cat) {
			subCatagory = item.subCategories;
		}
	});
	return subCatagory;
};

export default function NewProduct() {
	const [inputs, setInputs] = useState({});
	const [file, setFile] = useState(null);
	const dispatch = useDispatch();
	const [subCatagory, setSubCatagory] = useState([]);
	const [catagory, setCatagory] = useState([]);
	const [options, setOptions] = useState([]);
	const [progressBar, setProgressBar] = useState(0);
	const { enqueueSnackbar } = useSnackbar();
	console.log("rerender");

	const alert = (message, type, center) => {
		enqueueSnackbar(message, {
			variant: type,
			anchorOrigin: {
				vertical: center ? "top" : "bottom",
				horizontal: center ? "center" : "left",
			},
			TransitionComponent: Slide,
			autoHideDuration: 2000,
		});
	};
	const handleCategoryChange = (event) => {
		console.log(event);
		setCatagory(event.target.value);
		const sub = getSubCategory(event.target.value);
		setOptions(sub);
	};

	// const handleSubCatagoryChange = (event) => {
	// 	const {
	// 		target: { value },
	// 	} = event;
	// 	setSubCatagory(
	// 		// On autofill we get a the stringified value.
	// 		typeof value === "string" ? value.split(",") : value
	// 	);
	// };

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleCat = (mainCat, subCat) => {
		let cat = [mainCat, ...subCat];
		return cat;
	};

	const handleClick = (e) => {
		e.preventDefault();
		let cat = handleCat(catagory, subCatagory);
		console.log({ ...inputs });
		if (file) {
			try {
				const fileName = new Date().getTime() + file.name;
				const storage = getStorage(app);
				const storageRef = ref(storage, fileName);
				const uploadTask = uploadBytesResumable(storageRef, file);
				uploadTask.on(
					"state_changed",
					(snapshot) => {
						const progress =
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
						console.log("Upload is " + progress + "% done");
						setProgressBar(progress);
						switch (snapshot.state) {
							case "paused":
								console.log("Upload is paused");
								break;
							case "running":
								console.log("Upload is running");
								break;
							default:
						}
					},
					(error) => {
						console.log("Upload is Blocked", error);
					},
					() => {
						getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
							const product = { ...inputs, img: downloadURL, categories: cat };
							addProduct(product, dispatch);
							alert("Product Added");
						});
					}
				);
			} catch (error) {
				alert(error, "warning", true);
			}
		} else {
			alert("Please Provide Photo", "warning", true);
		}
	};

	return (
		<div className="newProduct">
			<h1 className="addProductTitle">New Product</h1>
			<form className="addProductForm">
				<Box
					component="form"
					sx={{
						"& > :not(style)": { m: 1, width: "40ch" },
					}}
					noValidate
					autoComplete="off"
				>
					<div className="addProductItem">
						<label>Image</label>
						<input
							type="file"
							id="file"
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>
				</Box>
				<Box
					component="form"
					sx={{
						"& > :not(style)": { m: 1, width: "40ch" },
					}}
					noValidate
					autoComplete="off"
				>
					<div className="addProductItem">
						<TextField
							name="title"
							required
							id="outlined-required"
							label="Product Name"
							onChange={handleChange}
						/>
					</div>
					<div className="addProductItem">
						<TextField
							name="description"
							required
							id="outlined-required"
							label="Description"
							multiline
							rows={4}
							onChange={handleChange}
						/>
					</div>
					<div className="addProductItem">
						<TextField
							name="buyingPrice"
							required
							id="outlined-required"
							label="Buying Price"
							onChange={handleChange}
						/>
					</div>
					<div className="addProductItem">
						<TextField
							name="price"
							required
							id="outlined-required"
							label="Selling Price"
							onChange={handleChange}
						/>
					</div>
				</Box>
				<div className="addProductItem">
					<label>Categories</label>
					<ItemSelect
						options={test}
						catagory={catagory}
						handleSelectChange={handleCategoryChange}
					/>
					<MultiSelect
						subCatagory={subCatagory}
						setSubCatagory={setSubCatagory}
						options={options}
					/>
					{/* <input type="text" placeholder="book,anatomy" onChange={handleCat} /> */}
				</div>
				<div className="addProductItem">
					<label>Stock</label>
					<select name="inStock" onChange={handleChange}>
						<option value="true">Yes</option>
						<option value="false">No</option>
					</select>
				</div>

				<button onClick={handleClick} className="addProductButton">
					Create
				</button>
			</form>
			<div>{progressBar}</div>
		</div>
	);
}
