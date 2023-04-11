import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Test from "./components/Test"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/5.jpg");
  position: fixed;
  min-width: 100%;
  background-size: cover;
  background-position: center;
 
  &: :-webkit-scrollbar{
    display: none;
  }
`;




function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      <Test/>
    </Container>
  )
}

export default App
