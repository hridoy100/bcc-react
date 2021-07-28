import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
 
function Header() {
    const [openDrawer, toggleDrawer] = useState(false);
    const drawerRef = useRef(null);
 
    useEffect(() => {
        const closeDrawer = (event) => {
            if (drawerRef.current && (drawerRef?.current).contains(event.target)) {
                return;
            }
 
            toggleDrawer(false);
        };
 
        document.addEventListener("mousedown", closeDrawer);
        return () => document.removeEventListener("mousedown", closeDrawer);
    }, []);
 
    const NavbarItemsProps = {
        openDrawer: openDrawer,
    };
 
    return (
        <Nav>
            <Logo to="/">
                <img style={{
                paddingRight: "10px",
                marginTop: "-6px",
                width: "32px",
                verticalAlign: "middle",}} src={"https://buetcareerclub.org/img/bcc-logo.png"}  alt={"BCC"}/>
                <span style={{color: "white", fontWeight: "bold", fontSize: "30px"}}>BCC</span>
            </Logo>
            <Bars onClick={() => toggleDrawer(true)} />
            <Menu ref={drawerRef} {...NavbarItemsProps}>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/events">EVENTS</NavLink>
                <NavLink to="/subject-review">SUBJECT REVIEWS</NavLink>
                <NavLink to="/team">TEAM</NavLink>
                <NavLink to="/alumni">ALUMNI</NavLink>
                <NavLink to="/member-list">MEMBER LIST</NavLink>
                <NavLink to="/login">LOGIN</NavLink>
                <NavLink to="/register">REGISTER</NavLink>
            </Menu>
        </Nav>
    );
}
 
const Nav = styled.nav`
    background: #1b9ca6;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`
 
const Logo = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    
    @media only screen and (max-width: 768px){
        padding-left: 5vw;
        padding-bottom: 2vh;
    }
`
 
const Menu = styled.ul`
    display: flex;
    list-style: none;
 
    @media only screen and (max-width: 768px) {
        position: fixed;
        right: 0;
        top: 0;
        height: 100%;
        flex-direction: column;
        padding: 0 2rem 1rem 2rem;
        margin-top: 0;
        transition: 0.2s ease-out;
        background-color: #5F939A;
        z-index: 101;
        transform: ${({ openDrawer }) => (openDrawer ? `translateX(0)` : `translateX(100%)`)};
    }
`
 
const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
 
    &:hover{
        color: blue;
    }
 
    @media only screen and (max-width: 768px) {
        padding: 1rem 0;
        margin: 0 auto 0 0;
    }
`
 
const Bars = styled(FaBars)`
    display: none;
    color: #fff;
 
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 7vh;
        right: 0;
        transform: translate(-100%, -75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
 
export default Header;
