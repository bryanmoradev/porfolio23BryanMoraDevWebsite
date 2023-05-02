import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center; 
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  background: url("./img/Edificios.jpg");
  min-width: 100%;
  background-size: cover;
  background-position: center;
`;

const Left = styled.div`
 flex: 1;
 display: flex;
 justify-content: flex-end; 
 align-items: center;
 
`;

const Title = styled.h1`
 font-weight: 200;
  
`;
const Form = styled.form`
 width: 500px;
 display: flex;
 flex-direction: column;
 gap: 20px

`;
const Input = styled.input`
  padding: 20px;
  backgroun-color: lightgray;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  backgroun-color: lightgray;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  background-color: #BFC9CA;
  width: 8rem;
  padding: 10px;
  color: black;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
   
`;

const Right = styled.div`
  flex: 1;
`

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
 
  const handleSubmit = (e) => {
    e.preventDefault();

  emailjs
  .sendForm(
    'service_6jlpbte',
    'template_na1bo3o',
    ref.current,
    'ZPkYqWtO6vJmLDRNo'
  )
  .then(
    (result) => {
      console.log(result.text);
      setSuccess(true)
    },
    (error) => {
      console.log(error.text);
      setSuccess(false);
    }
  );
};
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Tell us about your projects</Title>
            <Input placeholder='Name' name="name"/>
            <Input placeholder='Email' name="email"/>
            <TextArea placeholder='Write you message' name="message" rows={10}/>
            <Button type='submit'>Send</Button>
            {success &&
            "Your message has been sent. Well'll get back you soon :)"}
          </Form>
        </Left>
        <Right></Right>
      </Container>  
    </Section>
  )
}

export default Contact