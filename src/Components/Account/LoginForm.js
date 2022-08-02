import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginForm = () => {
  return (
    <Container>
      <Top>
        <Title>Returning Customer</Title>
        <p>I am a returning customer</p>
      </Top>

      <FormHold>
        <InputHold>
          <label>
            Email Address <span style={{ color: "red" }}>*</span>
          </label>
          <input type="email" />
        </InputHold>
        <InputHold>
          <label>
            Password <span style={{ color: "red" }}>*</span>
          </label>
          <input type="password" />
        </InputHold>

        <Button type="submit">Login</Button>
        <Option>
          {" "}
          <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
            Forgot your password?
          </Link>{" "}
          or{" "}
          <Link to="/" style={{ color: "var(--blue)" }}>
            Return to Store
          </Link>{" "}
        </Option>
      </FormHold>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  width: 100%;

  bakground-color: white;

  margin: 30px 15px;

  @media screen and (max-width: 768px) {
    margin: 30px 0;
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
  color: var(--dark-blue);
  border: 2px solid var(--dark-blue);
  font-weight: 500;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  background-color: white;
  transition: all 350ms;
  text-transform: capitalize;
  :hover {
    background-color: white;
    border-color: var(--blue);
    color: var(--blue);
  }
`;

const Option = styled.div`
  color: var(--grey);
  font-size: 14px;
  margin-top: 20px;
`;
