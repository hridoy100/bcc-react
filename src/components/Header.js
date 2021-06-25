import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { LocationOn, ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                    <img style={{
                        paddingRight: "5px",
                        marginTop: "-6px",
                        width: "32px",
                        verticalAlign: "middle",}} src={"https://buetcareerclub.org/img/bcc-logo.png"} />
                        <span style={{color: "white", fontWeight: "bold"}}>BCC</span>
                </Link>
            </HeaderLogo>
            <HeaderOptionAddress>
                <LocationOn />
                <HeaderOption>
                    <OptionLineOne>Hello,</OptionLineOne>
                    <OptionLineTwo>Select your address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>Hello, Hridoy</OptionLineOne>
                    <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>
                <HeaderOptionCart>
                    <Link to="/events">
                        <ShoppingBasket />
                        <CartCount>5</CartCount>
                    </Link>
                </HeaderOptionCart>
            </HeaderNavItems>
        </Container>
    );
}

export default Header;

const Container = styled.div`
	height: 60px;
	background-color: rgba(29,29,33,0.8) !important;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: white;
`;

const HeaderLogo = styled.div`
	img {
		width: 100px;
		margin-left: 11px;
	}
`;

const HeaderOptionAddress = styled.div`
	padding-left: 9px;
	display: flex;
	align-items: center;
`;

const OptionLineOne = styled.div``;
const OptionLineTwo = styled.div`
	font-weight: 700;
`;

const HeaderSearch = styled.div`
	display: flex;
	flex-grow: 1;
	height: 40px;
	border-radius: 4px;
	overflow: hidden;
	margin-left: 4px;
	background-color: white;
	:focus-within {
		box-shadow: 0 0 0 3px #f90;
	}
`;

const HeaderSearchInput = styled.input`
	flex-grow: 1;
	border: 0;
	:focus {
		outline: none;
	}
`;

const HeaderSearchIconContainer = styled.div`
	background-color: #febd69;
	width: 45px;
	color: black;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const HeaderNavItems = styled.div`
	display: flex;
`;
const HeaderOption = styled.div`
	// TRouBLe
	padding: 10px 9px 10px 9px;
`;
const HeaderOptionCart = styled.div`
	display: flex;

	a {
		display: flex;
		align-items: center;
		padding-right: 9px;
		color: white;
		text-decoration: none;
	}
`;
const CartCount = styled.div`
	padding-left: 4px;
`;
