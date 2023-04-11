import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
  
`;

const Container = styled.div`
   width: 100vh;
   background-color: rgba(95, 11, 129, 0,8);
   font-weight: bold;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 20px;
   padding-left: 20px;
   padding-right: 20px;
   border-radius: 20px;
   border: none;
  
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px`;
const Logo = styled.img`
background-color:rgba(191, 201, 202, 0.3);
border-radius: 10px;
padding-left: 3px;
padding-right: 3px;
width: 3rem`;
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;`;
const ListItem = styled.li``;
const Icons = styled.div`
    display: flex;
    align-itens: center;
    gap: 20px`;
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: rgba(191, 201, 202, 0.7);
font-weight: bold;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;`;

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src="./img/icons8-barcode-64.png"/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Projects</ListItem>
                <ListItem>Social</ListItem>
            </List>
            </Links>
            <Icons>
                <Button>Let's Talk</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar