import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 760px){
    height: 200vh;
}
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 80%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 760px){
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 760px){
    flex: 1;
    align-items: center;
}
`;
const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 760px){
    font-size: 60px;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    
}
  

  
`;
const Subtitle = styled.h2`
  background: linear-gradient(to right, #ff0000, #00ff00, #0000ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.8px transparent;
  @media only screen and (max-width: 760px){
    font-size: 30px;
    text-align: center;
    padding: 20px;
}
  
`;
const Button2 = styled.button`
background-color: rgba(191, 201, 202, 0.7);
font-weight: bold;
color: black;
font-size: 15px;
width: 100px;
width: 132px;
padding: 10px;
border: none; 
border-radius: 10px;
cursor: pointer; 
white-space: nowrap; 
@media only screen and (max-width: 760px){ 
  font-size: 18px; 
  width: 170px;
}
  
`;
const Logo = styled.img`
width: 1rem;
position: relative;
left: 2px;
top: 6px;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 760px){
    flex: 1;
    width: 100%;
}
  
`;


const hero = () => {
  return (
    <Section id="home">
      <Navbar/>
      <Container>
        <Left>
          <Title>Hi, I'm a Creative Developer</Title>
          <Subtitle>Front-End | Multimedia Artist</Subtitle>
          <Button2>What I made<Logo src="./img/icons8-turn-32.png"/></Button2>
        </Left>
        <Right>
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[5,5,5]}/>
            <Sphere args={[1, 200, 200]} scale={1.6}>
            <MeshDistortMaterial color={"#633974"} wireframe={true} distort={1} speed={3}/>
            </Sphere>
        </Canvas> 
        </Right>
      </Container>
    </Section>
  )
}

export default hero