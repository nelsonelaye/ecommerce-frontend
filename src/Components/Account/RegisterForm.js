import React from "react";
import styled from "styled-components";

const RegisterForm = () => {
  return (
    <Container>
      <Top>
        <Title>New Customer</Title>
        <p>Register Account</p>
        <p>
          By creating an account you will be able to shop faster, be up to date
          on an order's status, and keep track of the orders you have previously
          made.
        </p>
      </Top>

      <FormHold>
        <InputHold>
          <label>First Name</label>
          <input type="text" />
        </InputHold>
        <InputHold>
          <label>Last Name</label>
          <input type="text" />
        </InputHold>
        <InputHold>
          <label>
            Your Email Address <span style={{ color: "red" }}>*</span>
          </label>
          <input type="email" />
        </InputHold>
        <InputHold>
          <label>
            Your Password <span style={{ color: "red" }}>*</span>
          </label>
          <input type="password" />
        </InputHold>

        <Button type="submit">Create An Account</Button>
      </FormHold>
    </Container>
  );
};

export default RegisterForm;

const Container = styled.div`
  width: 100%;
  margin: 30px 15px;
  background-color: white;

  @media screen and (max-width: 768px) {
  }
`;

const Top = styled.div`
  margin-bottom: 30px;
  p {
    color: var(--grey);
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const Title = styled.div`
  color: var(--blue);
  font-size: 25px;
  font-weight: 500;
`;
const FormHold = styled.form`
  width: 100%;
`;
const InputHold = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 30px;
  label {
    color: var(--dark-blue);
    margin-bottom: 15px;
    font-size: 16px;
  }

  input {
    width: 100%;
    height: 55px;
    padding: 0 10px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    outline: 0;
    box-sizing: border-box;
    color: var(--grey);
  }
`;
const Button = styled.button`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0px;
  color: white;
  border: 2px solid var(--blue);
  font-weight: 500;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  background-color: var(--blue);
  transition: all 350ms;
  text-transform: capitalize;
  :hover {
    background-color: white;
    border-color: var(--dark-blue);
    color: var(--dark-blue);
  }
`;
