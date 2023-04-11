import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
`

const Test = () => {
  return (
    <Container>
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,-2,1]}/>
            <mesh>
                <icosahedronGeometry arg={[5, 5, 5]}/>
                <meshStandardMaterial color="#8E44AD"/>
            </mesh>
        </Canvas>
    </Container>
  )
}

export default Test