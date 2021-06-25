import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Blog from "./Blog";
// import { db } from "./firebase";

export default function Home() {
	const [blogs, setBlogs] = useState([]);
	const getProducts = () => {
		// db.collection("products").onSnapshot((snapshot) => {
		// 	let tempProducts = [];
		// 	tempProducts = snapshot.docs.map((doc) => ({
		// 		id: doc.id,
		// 		product: doc.data(),
		// 	}));
		// 	setProducts(tempProducts);
		// 	console.log(tempProducts);
		// });

		let tempBlogs = [
			{
				id: 1,
				title: "Computer Science and Engineering",
				timestamp: 1012725148, //in milliseconds
				price: 0,
				rating: 5,
				description: "lorem ipsum ....",
				image: "https://buetcareerclub.org/img/subject/cse.jpg"
			},
			{
				id: 2,
				title: "Computer Science and Engineering",
				timestamp: 1012725148, //in milliseconds
				price: 0,
				rating: 5,
				description: "lorem ipsum ....",
				image: "https://buetcareerclub.org/img/subject/cse.jpg"
			},
			{
				id: 3,
				title: "Computer Science and Engineering",
				timestamp: 1012725148, //in milliseconds
				price: 0,
				rating: 5,
				description: "lorem ipsum ....",
				image: "https://buetcareerclub.org/img/subject/cse.jpg"
			},
			{
				id: 4,
				title: "Computer Science and Engineering",
				timestamp: 1012725148, //in milliseconds
				price: 0,
				rating: 5,
				description: "lorem ipsum ....",
				image: "https://buetcareerclub.org/img/subject/cse.jpg"
			},
			{
				id: 5,
				title: "Computer Science and Engineering",
				timestamp: 1012725148, //in milliseconds
				price: 0,
				rating: 5,
				description: "lorem ipsum ....",
				image: "https://buetcareerclub.org/img/subject/cse.jpg"
			}
		]

		setBlogs(tempBlogs);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Container>
			<Banner></Banner>
			<Content>
				{blogs.map((data) => (
					<Blog
						title={data.title}
						price={data.price}
						rating={data.rating}
						image={data.image}
						id={data.id}
						key={data.id}
					/>
				))}
			</Content>
		</Container>
	);
}

const Container = styled.div`
	max-width: 100hw;
	margin: 0 auto;
`;

const Banner = styled.div`
	background-image: url(https://i.imgur.com/SYHeuYM.jpg);
	min-height: 600px;
	background-position: center;
	background-size: cover;
	z-index: 1;
	mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
	padding-left: 10px;
	padding-right: 10px;
	margin-top: -350px;
	z-index: 100;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
