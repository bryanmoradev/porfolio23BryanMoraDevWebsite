import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 760px){
        width: 100%;
    }
  
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

   @media only screen and (max-width: 760px){
    width: 100%;
    padding: 10px;
}
  
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px
    
    `;

const Logo = styled.img`
background-color:rgba(191, 201, 202, 0.3);
border-radius: 10px;
padding-left: 3px;
padding-right: 3px;
width: 3rem`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    @media only screen and (max-width: 760px){
        display: none;
    }
    `;
    
const ListItem = styled.li`
    text-decoration: none;

`;
const a = styled.a`
text-decoration: non
`;

const Icons = styled.div`
    display: flex;
    align-itens: center;
    gap: 20px`;
const Button = styled.button`
color: white;
width: 100%;
padding: 10px;
background-color: rgba(191, 201, 202, 0.7);
font-weight: bold;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src="./img/icons8-barcode-64.png"/>
            <List>
                <ListItem><a href='#home'>Home</a></ListItem>
                <ListItem><a href='#about'>About</a></ListItem>
                <ListItem><a href='#proyects'>Projects</a></ListItem>
                <ListItem><a href='#social'>Social</a></ListItem>
            </List>
            </Links>
            <Icons>
                
                    <a href="https://wa.me/593998292682?/Hola-es-un-placer-atenderle." target="_blank" rel="noopener noreferrer"><Button>Let's Talk</Button></a>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar