import React from "react";
import styled from "styled-components";

export default function Blog({ title, price, rating, image, id }) {
	return (<Container>
        <Title>{title}</Title>
        <Price>${price}</Price>
        <Rating>
            {Array(rating)
                .fill()
                .map((rating) => (
                    <p>⭐</p>
                ))}
        </Rating>
        {/* <Image src="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX342_.jpg" /> */}
        <Image src={image} />

        <ActionSection>
            <AddToCartButton>Add to cart</AddToCartButton>
        </ActionSection>
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
const Price = styled.span`
	font-weight: 500;
	margin-top: 3px;
`;
const Rating = styled.div`
	display: flex;
`;
const Image = styled.img`
	max-height: 200px;
	object-fit: contain;
`;
const AddToCartButton = styled.button`
	width: 100px;
	height: 30px;
	background-color: #f0c14b;
	border: 2px solid #a88734;
	border-radius: 2px;
	cursor: pointer;
	transition: 0.3s;
	:hover {
		// box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		box-shadow: 0 0 0 3px #f90;
	}
`;

const ActionSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 12px;
`;
