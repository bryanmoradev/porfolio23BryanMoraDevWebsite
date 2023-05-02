import React from 'react';
import styled from 'styled-components';
import { Center, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'



const data = [
  "Web Development",
  "UX | UI Design",
  "Multimedia Art",
];
const Section = styled.div`

  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`

  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
` 
const Div = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const ListItem = styled.li`
font-size: 4.5rem;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 2px white; 
position: relative;

::after{
  content: "${(props)=>props.text}";
  position: absolute;
  top: 0;
  left: 0;
  width: 0px;
  overflow: hidden;
  white-space: nowrap;
  background: linear-gradient(to right, #ff0000, #00ff00, #0000ff);
  -webkit-text-stroke: 6px transparent; 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

&:hover{
  ::after{
    animation: moveText 0.5s linear both ;
    
    @keyframes moveText{
      to{
        width: 100%;
      }
    }
  }
}
`;




const Works = () => {
  
  return (
    <Section>
      <Container>

        <Left>
          <Div>
          <Canvas camera={{fov:10, position:[3.5, 3.5, 3.5]}}>
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,2,1]}/>
            <mesh>
                <dodecahedronGeometry arg={[10, 10, 10]}/>
                <meshStandardMaterial color="#8E44AD" wireframe={true}/>
            </mesh>
        </Canvas>
          </Div>
        
          <List>
            {data.map((item) =>(
              <ListItem key={item} text={item}>{item}</ListItem>
            ))} 
          </List>
        </Left>
      </Container>
    </Section>
  )
}

export default Works