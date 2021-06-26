import React from "react";
import styled from "styled-components";

export default function Blog({ title, price, rating, image, description, id }) {
	return (<Container>
        <Title>{title}</Title>
        {/* <Image src="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX342_.jpg" /> */}
        <Image src={image} />
		<p>{ description }</p>
    </Container>);
}

const Container = styled.div`
	background-color: white;
	z-index: 100;
	height: 400px;
	max-width: 300px;
	flex: 1;
	padding: 20px;
	margin: 10px;
	max-height: 400px;
	display: flex;
	flex-direction: column;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	border-radius: 5px;
	:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
	cursor: click;
`;

const Title = styled.span``;

const Image = styled.img`
	max-height: 200px;
	object-fit: contain;
`;
