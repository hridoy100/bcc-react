import React from 'react'
import styled from "styled-components";
import { ImLocation } from 'react-icons/im';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
 
const Footer = () => {
    const inputStyles = {
        border: '1px solid #848484',
        borderRadius: '30px',
        color: '#cdcdcd',
        marginLeft: '5vw',
        marginRight: '1vw',
        outline:'0',
        height:'25px',
        width: '275px',
        paddingLeft:'10px',
        paddingRight:'10px',
        background: 'rgba(0,0,0,0.15)',
    }
 
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
 
    return(
        <>
            <Bottom>
                <Review>
                    {tempBlogs.map((data) => (
                        <Subject>
                            <Image src={data.image} />
                            <h4>{data.title}</h4>
                        </Subject>
                    ))}
                </Review>
                <Tags>
                    <Tag>SUBJECT REVIEW</Tag>
                    <Tag>COMPETITION</Tag>
                    <Tag>HIGHER STUDIES</Tag>
                    <Tag>BCS</Tag>
                    <Tag>BUET ROSTRUM</Tag>
                    <Tag>CORPORATE GROOMING</Tag>
                    <Tag>DUKE OF EDINBURGH'S AWARD</Tag>
                </Tags>
                <Extras>
                    <h4>SEARCH</h4>
                    <Form>
                        <input style={inputStyles} type="text" placeholder="Search something" autoComplete="off"/>
                        <FaSearch />
                    </Form>
                    <h4>GET IN TOUCH</h4>
                    <p>BUET Career Club (BCC) is the most student-oriented club of BUET, aiming to add values to the BUETians life and build them more competent for this most competitive world.</p>
                    <p><ImLocation /> Bangladesh University of Engineering & Technology, Dhaka 1000</p>
                    <p><FaPhoneAlt /> +88 01839-335640</p>
                    <p><FiMail /> buetcareerclub@email.com</p>
                </Extras>
            </Bottom>
            <Copy>
                Copyright &copy
                2021
                , All rights reserved | by BUET CAREER CLUB
            </Copy>
        </>
    )
}
 
const Bottom = styled.footer`
    background: #26262a;
    color: #cdcdcd;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
 
    @media only screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`
 
const Review = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    width: 30%;
    align-items: center;
 
    @media only screen and (max-width: 768px){
        width: 50%;
    }
`
 
const Subject = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 1vh;
 
    @media only screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`
 
const Image = styled.img`
    max-width: 100px;
    object-fit: contain;
`
 
const Tags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    padding: 1rem;
    padding-right: 2px;
    width: 30%;
 
    @media only screen and (max-width: 768px){
        flex-direction: column;
        padding-left: 10vw;
        width: 50%;
    }
`
 
const Tag = styled.div`
    width: 30%;
    height: 13%;
    font-size: 14px;
    background: rgba(0,0,0,0.15);
    color: white;
    padding: 5px;
    text-align: center;
 
    @media only screen and (max-width: 768px){
        width: 70%;
        margin-bottom: 1vh;
    }
`
 
const Extras = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 3rem;
    padding-left: 2rem;
    width: 30%;
    color: #cdcdcd;
 
    @media only screen and (max-width: 768px){
        padding: 0;
        width: 100%;
    }
`
 
const Form = styled.div`
    display: flex; 
`
 
const Copy = styled.div`
    background: #000;
    color: #cdcdcd;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
`
 
export default Footer;
