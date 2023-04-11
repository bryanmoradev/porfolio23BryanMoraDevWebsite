import React from 'react';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  position: relative;
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
  
`;

const Img = styled.img`
width: 500px;
color: white;
object-fit: contain; 
filter: invert(2) hue-rotate(120deg);
position: absolute; 
top: 0;
button: 0;
left: 0;
right: 0;
margin: auto;
  
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
 
  
`;

const Title = styled.h1`
  font-size: 74px;

  
`;
const Subtitle = styled.h2`
  color: #6C3483;
  
`;
const Paragrahp = styled.h3`
color: white;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Canvas camera={{fov:35, position:[3.5, 3.5, 3.5]}}>
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,2,1]}/>
            <mesh>
                <icosahedronGeometry arg={[5, 5, 5]}/>
                <meshStandardMaterial color="#8E44AD"/>
            </mesh>
        </Canvas>
        </Left>
        <Right>
          <Title>About</Title>
          <Subtitle>Bienvenido al portafolio de Bryan, un desarrollador web frontend con habilidades en tecnologías como HTML, CSS, Bootstrap, JavaScript y React. Con una pasión por el diseño y la programación, Bryan crea sitios web hermosos y funcionales que combinan la estética y la funcionalidad.</Subtitle>
          <Paragrahp>From Ecuador,<br/>Working Worldwide.</Paragrahp>
          <Button2>Résumé</Button2>
        </Right>
      </Container>
    </Section>
  )
}

export default Who